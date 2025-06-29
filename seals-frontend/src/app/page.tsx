"use client";
import api from "@/services/axios";
import { useEffect } from "react";

export default function Home() {

  const fetchDUVData = async () => {
    try {
      const response = await api.get("/duv");
      console.log("DUVs encontradas:", response.data);
    } catch (error) {
      console.error("Erro obtendo as DUVs:", error);
    }
  };

  useEffect(() => {
    fetchDUVData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
        </div>
      </main>
    </div>
  );
}
