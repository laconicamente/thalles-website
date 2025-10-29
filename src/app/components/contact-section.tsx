"use client";
import React, { useRef, useState } from "react";
import { Box, Typography, Card } from "@mui/material";
import MapOutlined from "@mui/icons-material/MapOutlined";
import CallEndRounded from "@mui/icons-material/CallEndRounded";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "motion/react";
import { LinkPreview } from "./link-preview";
import Instagram from "@mui/icons-material/Instagram";
import Link from "next/link";


export function ContactSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
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
        <Box minHeight={"15em"}>
          <div className="relative p-15 py-15">
              <Box className={"w-full flex justify-center items-center text-center "}>
              <h2 className="relative z-20 pb-8 font-bold text-4xl sm:text-5xl md:text-5xl lg:text-5xl">
                    Conheça mais sobre mim e <div style={{color: '#377394'}}>entre em contato</div>
                  </h2>
              </Box>
            <Box display={"flex"} flexDirection={{ xs: "column", sm: "column", md: "row" }} gap={4}>
              <Box width={{ sm: "100%", md: "50%" }}>
                <Box gap={3}>
                  
                  <Box mb={4} className="relative">
                    <video
                      width="360"
                      height="640"
                      controls={isPlaying}
                      poster="/images/thalles-1.jpeg"
                      className="rounded-lg shadow-lg w-full max-w-[360px] aspect-[9/16] object-cover mx-auto"
                      style={{
                        aspectRatio: '9/16',
                        maxWidth: '360px',
                        height: 'auto'
                      }}
                      ref={videoRef}
                      onClick={handleVideoClick}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source src="/videos/entre-contato.mp4" type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                    {!isPlaying && (
                      <button 
                        onClick={handlePlayVideo} 
                        className="absolute inset-0 flex items-center justify-center bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all duration-200"
                      >
                        <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-200">
                          <PlayArrowIcon style={{ fontSize: 50, color: '#377394' }} />
                        </div>
                      </button>
                    )}
                  </Box>
                </Box>
              </Box>

              <div className="w-full relative flex flex-wrap justify-start items-start gap-6">
                <div className="relative flex flex-wrap justify-start gap-4 flex-col">
                <Box>
                    Se desejar esclarecer dúvidas, agendar consultas ou
                    obter mais informações, estou à disposição nos canais
                    de contato disponibilizados no site.
                  </Box>
                  <Box className="flex justify-start gap-4">
                  <Card
                    style={{
                      width: "4em",
                      height: "4em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <CallEndRounded />
                  </Card>
                  <Box>
                  <Typography>
                    <strong>Contato</strong> <br />
                    +55 (22) 98121-5841
                    <br />
                    thalles-ladeira@hotmail.com
                  </Typography>
                  <Box display={'flex'} gap={4}>
                     <Link href="https://www.instagram.com/psi.thallesazevedo/" target="_blank"><Instagram /> </Link>
                  </Box>
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
          className="relative z-10 my-4 flex flex-wrap flex-start gap-4"
        >
          <LinkPreview url="https://wa.me/5522981215841?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços" className="font-bold">
            <button style={{ cursor: 'pointer', fontSize: '11pt' }} className="px-12 py-3 rounded-full bg-[#222] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#69c464] transition-colors duration-200">
               Entre em contato
            </button>
          </LinkPreview>
        </motion.div>
                  </Box>
                  </Box>
                </div>
              </div>
            </Box>
          </div>
        </Box>
      </motion.div>
    </>
  );
}
