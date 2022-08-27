-- AlterTable
ALTER TABLE `users` MODIFY `email_verified` BOOLEAN NULL DEFAULT false,
    MODIFY `phone_verified` BOOLEAN NULL DEFAULT false,
    MODIFY `password` VARCHAR(100) NULL,
    MODIFY `is_deleted` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users_address` MODIFY `address_2` VARCHAR(255) NULL,
    MODIFY `is_active` BOOLEAN NULL DEFAULT false;
