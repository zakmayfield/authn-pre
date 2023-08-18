-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "ref" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ref_key" ON "User"("ref");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
