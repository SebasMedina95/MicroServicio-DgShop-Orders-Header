/*
  Warnings:

  - A unique constraint covering the columns `[factureCode]` on the table `TBL_PURCHASE_ORDER` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `factureCode` to the `TBL_PURCHASE_ORDER` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TBL_PURCHASE_ORDER` ADD COLUMN `description` LONGTEXT NULL,
    ADD COLUMN `factureCode` VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TBL_PURCHASE_ORDER_factureCode_key` ON `TBL_PURCHASE_ORDER`(`factureCode`);
