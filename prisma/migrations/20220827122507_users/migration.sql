-- CreateTable
CREATE TABLE `users` (
    `user_id` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(150) NOT NULL,
    `last_name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` CHAR(14) NOT NULL,
    `email_verified` BOOLEAN NOT NULL DEFAULT false,
    `phone_verified` BOOLEAN NOT NULL DEFAULT false,
    `password` VARCHAR(100) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `users_user_id_key`(`user_id`),
    INDEX `users_email_phone_idx`(`email`, `phone`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_address` (
    `id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `address_1` VARCHAR(255) NOT NULL,
    `address_2` VARCHAR(255) NOT NULL,
    `city` VARCHAR(150) NOT NULL,
    `state` VARCHAR(150) NOT NULL,
    `pin` CHAR(6) NOT NULL,
    `country` VARCHAR(150) NOT NULL,
    `phone` CHAR(14) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `users_address_id_key`(`id`),
    UNIQUE INDEX `users_address_user_id_key`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users_address` ADD CONSTRAINT `users_address_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
