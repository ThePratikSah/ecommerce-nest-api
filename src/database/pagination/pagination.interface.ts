export interface PaginationQuery {
  take: number;
  skip: number;
  cursor?: any;
}

export interface PaginatedResponse<T = any> {
  results: T[];
  hasNextPage: boolean;
  cursor?: string;
}

export interface ApiResponse<T = any> {
  response: T;
}
