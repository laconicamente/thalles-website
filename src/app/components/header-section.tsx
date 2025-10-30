"use client";

import { motion } from "motion/react";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import { ContentSection } from "./content-section";
import { LinkPreview } from "./link-preview";
import Image from "next/image";
import { SpotlightBackground } from "@/lib/ui/spotlight-background";

function InitialSection() {
  return (
    <>
    <div className="relative flex h-[30em] w-full items-center justify-center bg-header overflow-hidden">
    <SpotlightBackground />
      <div className="px-4 py-10 md:p-20">
        <h1 className="relative playfair z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 text-5xl lg:text-7xl dark:text-slate-300">
          <div>
            <Image
              src="/images/logo.png"
              alt="Thalles Azevedo"
              width={350}
              height={150}
              className="mx-auto block"
            />
          </div>
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl text-center text-lg font-normal text-[#0e433a] dark:text-neutral-400" style={{ marginTop: '-1rem' }}
        >
          RP 834
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <LinkPreview url="https://wa.me/5522981215841?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços" className="font-bold">
            <button style={{ cursor: 'pointer', fontSize: '11pt' }} className="px-12 py-3 rounded-full bg-[#0c302f] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#0c302f] transition-colors duration-200">
              <CalendarMonthOutlined /> Agende sua consulta
            </button>
          </LinkPreview>
        </motion.div>

      </div>
    </div>
    </>
  );
}

export function HeaderSection() {
  return (
    <div className="relative flex w-full flex-wrap justify-center">
      <InitialSection />
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 1.2,
        }}
        className="relative w-full"
      >
        <div className="w-full overflow-hidden">
          {/* <ContentSection /> */}
        </div>
      </motion.div>
    </div>
  );
}