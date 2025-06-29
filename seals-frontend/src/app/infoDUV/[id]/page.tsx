"use client";
import api from "@/services/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type DUV = {
    id: number;
    numeroDUV: string;
    dataDaViagem: string;
    navio: {
      nome: string;
      imagem?: string;
      bandeira: string;
    };
  };

export default function InfoDUV({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const [loadingDUV, setLoadingDUV] = useState<boolean>(true);
  const [DUV, setDUV] = useState<DUV>();

  const fetchDUVData = async () => {
    setLoadingDUV(true);
    try {
      const { id } = await params;
      const response = await api.get(`/duv/${id}`);
      setDUV(response.data);
      console.log("DUV encontrada:", response.data);
    } catch (error) {
      console.error("Erro obtendo a DUV:", error);
    } finally {
        setLoadingDUV(false);
    }
  };

  useEffect(() => {
    fetchDUVData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
      <header className="flex flex-col w-full items-center bg-[#071e48]">
        <Image
          src="/logoseals.png"
          alt="Logo do PS Seals 2025"
          width={150}
          height={50}
          className="w-36 sm:w-40" 
        />
      </header>
      <main className="flex flex-col items-center sm:items-start w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-[#071e48] mx-auto">
          Informações da DUV
        </h1>

        {loadingDUV ? (
          <div className="flex items-center justify-center w-full h-64">
            <svg
              className="animate-spin h-10 w-10 text-[#071e48]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="#071e48"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="#071e48"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.93A8.003 8.003 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-3.008zM12 20a8.003 8.003 0 01-6.93-4.07L2.07 18A11.95 11.95 0 0012 24v-4zm6.93-2.07A8.003 8.003 0 0120 12h4c0 3.042-1.135 5.824-3 7.938l-3.07-2.07zM20 12a8.003 8.003 0 01-4.07-6.93L18 .07A11.95 11.95 0 0024 12h-4z"
              ></path>
            </svg>
          </div>
        ) :
        DUV ?
        (
        <div className="w-full max-w-[90%] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full h-full space-y-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#071e48] underline mx-auto">Número da DUV:</h2>
            <p className="text-md sm:text-lg font-medium text-[#071e48] mx-auto">{DUV.numeroDUV}</p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#071e48] underline mx-auto">Data da Viagem:</h2>
            <p className="text-md sm:text-lg font-medium text-[#071e48] mx-auto">{new Date(DUV.dataDaViagem).toLocaleDateString("pt-BR")}</p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#071e48] underline mx-auto">Nome do Navio:</h2>
            <p className="text-md sm:text-lg font-medium text-[#071e48] mx-auto">{DUV.navio.nome}</p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#071e48] underline mx-auto">Bandeira do Navio:</h2>
            <p className="text-md sm:text-lg font-medium text-[#071e48] mx-auto">{DUV.navio.bandeira}</p>

            {DUV.navio.imagem &&
            <>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#071e48] underline mx-auto">Foto do Navio:</h2>
              <Image
                src={DUV.navio.imagem}
                alt={`Foto do navio ${DUV.navio.nome}`}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg mx-auto"
              />
            </>}
          </div>

          <div className="w-full h-full">
            <p>fasdf</p>
          </div>
        </div>
        )
        :
        (
          <div className="text-red-500 text-center mx-auto">
            <p>DUV não encontrada ou erro ao carregar.</p>
          </div>
        )
        }
      </main>
    </div>
  );
}
