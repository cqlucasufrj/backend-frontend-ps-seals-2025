"use client";
import api from "@/services/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [DUVs, setDUVs] = useState([]);

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
