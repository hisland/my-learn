/*
  Warnings:

  - You are about to drop the `Bank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Fenqi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FenqiDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Take` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Bank";

-- DropTable
DROP TABLE "Bill";

-- DropTable
DROP TABLE "Card";

-- DropTable
DROP TABLE "Fenqi";

-- DropTable
DROP TABLE "FenqiDetail";

-- DropTable
DROP TABLE "Take";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "real_name" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank" (
    "id" SERIAL NOT NULL,
    "bank_name" TEXT NOT NULL,
    "bank_short_name" TEXT NOT NULL,
    "score_good" TEXT,

    CONSTRAINT "bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "bank_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "card_no" TEXT NOT NULL,
    "card_type" TEXT NOT NULL,
    "card_nick_name" TEXT,
    "bill_date" INTEGER,
    "due_type" TEXT NOT NULL,
    "due_date_fixed" INTEGER,
    "due_date_after" INTEGER,
    "total_limit" INTEGER NOT NULL DEFAULT 0,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill" (
    "id" SERIAL NOT NULL,
    "auto_amount" INTEGER NOT NULL DEFAULT 0,
    "set_amount" INTEGER NOT NULL DEFAULT 0,
    "set_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "set_user_id" INTEGER NOT NULL,
    "card_id" INTEGER NOT NULL,
    "bill_year" INTEGER NOT NULL,
    "bill_month" INTEGER NOT NULL,
    "bill_time" TIMESTAMP(3) NOT NULL,
    "due_time" TIMESTAMP(3) NOT NULL,
    "done_time" TIMESTAMP(3) NOT NULL,
    "done_by" INTEGER NOT NULL,

    CONSTRAINT "bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "take" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "bill_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "take_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "take_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fenqi" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "card_id" INTEGER NOT NULL,
    "per_month" INTEGER NOT NULL,
    "per_amount" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "repay_date" INTEGER NOT NULL,
    "done_count" INTEGER NOT NULL,
    "total_count" INTEGER NOT NULL,

    CONSTRAINT "fenqi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fenqi_detail" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "fenqi_id" INTEGER NOT NULL,
    "due_time" TIMESTAMP(3) NOT NULL,
    "done_time" TIMESTAMP(3) NOT NULL,
    "index" INTEGER NOT NULL,
    "remark" TEXT NOT NULL,

    CONSTRAINT "fenqi_detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bank_bank_name_key" ON "bank"("bank_name");

-- CreateIndex
CREATE UNIQUE INDEX "bank_bank_short_name_key" ON "bank"("bank_short_name");
