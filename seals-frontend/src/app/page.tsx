"use client";
import api from "@/services/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  type DUV = {
    id: number;
    numeroDUV: string;
    dataDaViagem: string;
    navio?: {
      nome?: string;
    };
  };

  const [DUVs, setDUVs] = useState<DUV[]>([]);

  const fetchDUVData = async () => {
    try {
      const response = await api.get("/duv");
      setDUVs(response.data);
      console.log("DUVs encontradas:", response.data);
    } catch (error) {
      console.error("Erro obtendo as DUVs:", error);
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
      <main className="flex flex-col items-center sm:items-start">
        <h1 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-[#071e48] mx-auto">
          DUVs cadastradas
        </h1>

        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-[#071e48] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Número DUV
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Data da Viagem
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Navio
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Mais informações
              </th>
            </tr>
          </thead>
          <tbody>
            {DUVs.map((duv) => (
              <tr key={duv.id} className="border-b border-gray-200">
                <td className="px-6 py-4 text-sm text-gray-800">
                  {duv.numeroDUV}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {new Date(duv.dataDaViagem).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {duv.navio?.nome || "Navio não informado"}
                </td>
                <td className="px-6 py-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#071e48" className="m-auto">
                  <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
        </div> */}
      </main>
    </div>
  );
}
