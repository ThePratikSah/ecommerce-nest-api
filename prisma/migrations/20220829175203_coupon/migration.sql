-- CreateTable
CREATE TABLE `Coupon` (
    `coupon_id` VARCHAR(255) NOT NULL,
    `code` VARCHAR(150) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `type` ENUM('FLAT', 'PERCENT') NULL DEFAULT 'FLAT',
    `amount` DECIMAL(10, 2) NOT NULL,
    `min_cart` DECIMAL(10, 2) NOT NULL,
    `is_active` BOOLEAN NULL DEFAULT false,
    `is_deleted` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `Coupon_coupon_id_key`(`coupon_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
