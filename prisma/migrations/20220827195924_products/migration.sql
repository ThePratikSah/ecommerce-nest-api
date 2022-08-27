/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Category` (
    `category_id` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(150) NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `is_deleted` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `Category_category_id_key`(`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `product_id` VARCHAR(255) NOT NULL,
    `product_name` VARCHAR(150) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `selling_price` DECIMAL(10, 2) NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `category_id` VARCHAR(255) NULL,
    `created_on` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_on` DATETIME(3) NULL,
    `is_available` BOOLEAN NULL DEFAULT true,
    `prescription_required` BOOLEAN NULL DEFAULT false,
    `is_deleted` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `Product_product_id_key`(`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;
