-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "real_name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "bank_name" TEXT NOT NULL,
    "bank_short_name" TEXT NOT NULL,
    "score_good" TEXT,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
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

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bill" (
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

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Take" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "bill_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "take_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Take_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fenqi" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "card_id" INTEGER NOT NULL,
    "per_month" INTEGER NOT NULL,
    "per_amount" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "repay_date" INTEGER NOT NULL,
    "done_count" INTEGER NOT NULL,
    "total_count" INTEGER NOT NULL,

    CONSTRAINT "Fenqi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FenqiDetail" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "fenqi_id" INTEGER NOT NULL,
    "due_time" TIMESTAMP(3) NOT NULL,
    "done_time" TIMESTAMP(3) NOT NULL,
    "index" INTEGER NOT NULL,
    "remark" TEXT NOT NULL,

    CONSTRAINT "FenqiDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bank_bank_name_key" ON "Bank"("bank_name");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_bank_short_name_key" ON "Bank"("bank_short_name");
