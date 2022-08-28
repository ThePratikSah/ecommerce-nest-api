/*
  Warnings:

  - You are about to drop the column `first_name` on the `Category` table. All the data in the column will be lost.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Category` DROP COLUMN `first_name`,
    ADD COLUMN `name` VARCHAR(150) NOT NULL;
