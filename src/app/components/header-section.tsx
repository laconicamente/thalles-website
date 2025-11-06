"use client";

import { motion } from "motion/react";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import { LinkPreview } from "./link-preview";
import Image from "next/image";
import { SpotlightBackground } from "@/lib/ui/spotlight-background";
import { cn } from "@/lib/utils";

function InitialSection() {
  return (
    <div className="relative flex h-[30em] w-full items-center justify-center bg-white dark:bg-green">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-green"></div>

      <div className="px-4 py-10 md:p-20">
        {/* <h1 className="relative playfair z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 text-5xl lg:text-7xl dark:text-slate-300">
          <div>
            <Image
              src="/images/thalles-1.jpeg"
              alt="Thalles Azevedo"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full block md:hidden"
            />
          </div>
          {"Thalles Azevedo"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-[#0c302f]"
              >
                {word}
              </motion.span>
            ))}
        </h1> */}
          <h1 className="relative playfair z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 text-5xl lg:text-7xl dark:text-slate-300">
          <div>
            <Image
              src="/images/thalles-4.jpeg"
              alt="Thalles Azevedo"
              width={100}
              height={100}
              className="mx-auto rounded-full block md:hidden"
            />
          </div>
          <div>
            <Image
              src="/images/logo.png"
              alt="Thalles Azevedo"
              width={350}
              height={150}
              className="mx-auto block mt-[-1rem]"
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
          className="relative z-10 mx-auto max-w-xl mt-[-2rem] text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          <strong style={{fontSize: '11pt'}}>(RP 834)</strong>
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
          className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <LinkPreview url="https://wa.me/5522981215841?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços" className="font-bold">
            <button style={{ cursor: 'pointer', fontSize: '11pt' }} className="px-12 py-3 rounded-full bg-[#0c302f] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#0c302f] transition-colors duration-200">
              <CalendarMonthOutlined /> Agende sua consulta
            </button>
          </LinkPreview>
        </motion.div>

      </div>
    </div>
  );
}

function InitialSection1() {
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
      </motion.div>
    </div>
  );
}