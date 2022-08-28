import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ApiResponse,
  PaginatedResponse,
  PaginationQuery,
} from './pagination.interface';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse | PaginatedResponse> {
    const request = context.switchToHttp().getRequest();

    // Absolute to avoid -ve
    request.query = {
      ...request.query,
      page: Math.abs(request.query.page ?? 0),
      pageSize: Math.abs(Math.min(request.query.pageSize || 50, 50)),
    };

    // Here we request one more than they asked for to see if we have another page
    request.query.pagination = {
      take: request.query.pageSize + 1,
      skip: (request.query.page ?? 0) * request.query.pageSize,
      cursor: request.query.cursor ?? undefined,
    } as PaginationQuery;

    return next.handle().pipe(
      map((response) => {
        const { totalCount, list, ...args } = response;
        if (!Array.isArray(response)) {
          // Check for total count key, return with hasNext and result
          if (response?.totalCount >= 0) {
            return paginationData(
              response.list,
              request.query.pageSize,
              response.totalCount,
              args,
            );
          }

          return { response };
        }

        return paginationData(response, request.query.pageSize, null, args);
      }),
    );
  }
}

function paginationData(
  responseArr,
  pageSize: number,
  totalCount: number | null = null,
  args,
) {
  // Here we return pageSize because we added an extra earlier
  const resultsLength =
    responseArr.length > pageSize + 1 ? responseArr.length : pageSize;
  const results = (responseArr || []).slice(0, resultsLength);

  return {
    results,
    hasNextPage: responseArr.length > pageSize,
    totalPages: Math.ceil(totalCount / pageSize),
    totalCount,
    ...args,
  };
}
