-- CreateTable
CREATE TABLE "DUV" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "navioId" INTEGER NOT NULL,
    "numeroDUV" TEXT NOT NULL,
    "dataDaViagem" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DUV_navioId_fkey" FOREIGN KEY ("navioId") REFERENCES "Navio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Navio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "bandeira" INTEGER NOT NULL,
    "imagem" TEXT NOT NULL DEFAULT 'https://i.insider.com/63fe5742d5d80a0018278d37?width=1200'
);

-- CreateTable
CREATE TABLE "Passageiro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "SID" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "foto" TEXT NOT NULL DEFAULT 'https://randomuser.me/api/portraits/men/0.jpg'
);

-- CreateTable
CREATE TABLE "_DUVToPassageiro" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DUVToPassageiro_A_fkey" FOREIGN KEY ("A") REFERENCES "DUV" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DUVToPassageiro_B_fkey" FOREIGN KEY ("B") REFERENCES "Passageiro" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "DUV_numeroDUV_key" ON "DUV"("numeroDUV");

-- CreateIndex
CREATE UNIQUE INDEX "Navio_nome_key" ON "Navio"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Passageiro_SID_key" ON "Passageiro"("SID");

-- CreateIndex
CREATE UNIQUE INDEX "_DUVToPassageiro_AB_unique" ON "_DUVToPassageiro"("A", "B");

-- CreateIndex
CREATE INDEX "_DUVToPassageiro_B_index" ON "_DUVToPassageiro"("B");
