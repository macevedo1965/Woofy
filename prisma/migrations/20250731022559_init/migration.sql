-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "pushToken" TEXT;

-- CreateTable
CREATE TABLE "public"."devices" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "devices_token_key" ON "public"."devices"("token");

-- AddForeignKey
ALTER TABLE "public"."devices" ADD CONSTRAINT "devices_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
