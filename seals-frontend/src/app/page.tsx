"use client";
import api from "@/services/axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import offlineInfo from "../../mock.json";

type DUV = {
    id: number;
    numeroDUV: string;
    dataDaViagem: string;
    navio?: {
      nome?: string;
    };
  };

export default function Home() {
  
  const [loadingDUVs, setLoadingDUVs] = useState<boolean>(true);
  const [DUVs, setDUVs] = useState<DUV[]>([]);

  const [networkError, setNetworkError] = useState(false);

  const fetchDUVData = async () => {
    setLoadingDUVs(true);
    setNetworkError(false);
    try {
      const response = await api.get("/duv");
      setDUVs(response.data);
      console.log("DUVs encontradas:", response.data);
    } catch (error: any) {
      console.error("Erro obtendo as DUVs:", error);
      if (error.code === "ERR_NETWORK") {
        setNetworkError(true);
      }
    } finally {
        setLoadingDUVs(false);
    }
  };

  const obterDadosOffline = async () => {
    const newList: DUV[] = [];
    offlineInfo.duvs.map((item) => {
      const newObj : DUV = {
        id: +item.id,
        numeroDUV: item.numero,
        dataDaViagem: item.data_viagem,
        navio: { nome: item.navio.nome }
      };
      newList.push(newObj);
    });
    setDUVs(newList);
    setNetworkError(false);
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
          DUVs cadastradas
        </h1>

        {loadingDUVs ? 
        // Caso esteja carregando
        (
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
        // Caso não esteja mais carregando
        // Caso tenha recebido erro de conexão
        networkError 
        ?
        (<>
        <h2 className="text-red-500 mx-auto text-2xl font-semibold">Erro obtendo dados do backend</h2>
        <p className="text-red-500 mx-auto">Talvez você não tenha iniciado o backend localmente, deseja usar os dados offline?</p>
        <button
          className={`px-4 py-2 mt-4 rounded-lg visualizarPassageiros hover:bg-[#071e48] hover:text-white bg-gray-200 text-gray-800 cursor-pointer mx-auto`}
          onClick={() => obterDadosOffline()}
        >
          Obter dados offline
        </button>
        <button
          className={`px-4 py-2 mt-2 rounded-lg visualizarPassageiros hover:bg-[#071e48] hover:text-white bg-gray-200 text-gray-800 cursor-pointer mx-auto`}
          onClick={() => fetchDUVData()}
        >
          Tentar novamente
        </button>
        </>)
        :
        // Caso não tenha recebido erro de conexão
        (<table className="min-w-[70%] w-full max-w-[90%] mx-auto bg-white border border-gray-200 shadow-md rounded-lg overflow-x-auto">
          <thead className="bg-[#071e48] text-white">
            <tr>
              <th className="py-3 border-[1px] text-center text-xs sm:text-sm font-medium">
                Número DUV
              </th>
              <th className="py-3 border-[1px] text-center text-xs sm:text-sm font-medium">
                Data da Viagem
              </th>
              <th className="py-3 border-[1px] text-center text-xs sm:text-sm font-medium">
                Navio
              </th>
              <th className="py-3 px-2 border-[1px] border-white text-center text-xs sm:text-sm font-medium">
                Mais informações
              </th>
            </tr>
          </thead>
          <tbody>
            {DUVs.map((duv, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-2 sm:px-6 py-4 text-sm text-gray-800 bg-gray-100">
                  {duv.numeroDUV}
                </td>
                <td className="sm:px-6 py-4 text-sm text-center text-gray-800">
                  {new Date(duv.dataDaViagem).toLocaleDateString("pt-BR")}
                </td>
                <td className="sm:px-6 py-4 text-sm text-center text-gray-800 bg-gray-100">
                  {duv.navio?.nome || "Navio não informado"}
                </td>
                <td className="sm:px-6 py-4">
                  <Link href={`/infoDUV/${duv.id}`} className="flex w-12 m-auto items-center justify-center">
                    <svg className="m-auto w-12 h-8" width="24" height="24" viewBox="0 0 24 24" fill="#071e48">
                      <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
                    </svg>
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>)}
      </main>
    </div>
  );
}
