"use client";
import React, { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "motion/react";

export function AboutSection() {
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
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      className="relative w-full py-16 bg-[#0c302f]"
    >
      <Box className="container mx-auto px-6" sx={{ minHeight: '34rem', position: 'relative' }}>
        {/* Conteúdo principal */}
        <Box className="max-w-6xl mx-auto" sx={{ position: 'absolute', top: '-6rem'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Vídeo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full h-full flex justify-center"
            >
              <Box className="relative">
                <video
                  width="360"
                  height="640"
                  className="rounded-lg shadow-lg w-full max-w-[360px] aspect-[9/16] object-cover mx-auto"
                  controls={isPlaying}
                  poster="/images/thalles-3.jpeg"
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
                  <source src="/videos/sobre-mim.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                {!isPlaying && (
                  <button
                    onClick={handlePlayVideo}
                    className="absolute inset-0 flex items-center justify-center bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all duration-200"
                  >
                    <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-200">
                      <PlayArrowIcon style={{ fontSize: 50, color: '#297270' }} />
                    </div>
                  </button>
                )}
              </Box>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-full" 
              style={{marginTop: '4rem'}}
            >
                <h2 className="relative z-20 mb-10 font-bold text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-[#fff]">
            Sobre mim
          </h2>
              <Typography
                variant="body1"
                className="text-[#f4f4f4] leading-relaxed text-justify"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                }}
              >
                Formado em Psicanálise pela Centro de Estudos em Terapia e Psicanálise (CETEP) e doutorando em Psicanálise, saúde e sociedade pela Universidade Veiga de Almeida (UVA). Atua como psicanalista clínico no formato online, atendendo centenas de pessoas ao redor do Brasil e brasileiros que moram em Portugal. É considerado um dos maiores psicanalistas do país a se especializar no tratamento de ansiedade, síndrome de Burnout e depressão. Venceu a categoria de melhores do ano na categoria psicanalista em 2025 em Rio das Ostras/RJ e foi profissional destaque do Sudeste e destaque do ano pela MG produções. Também atua como professor nos municípios de Rio das Ostras/RJ e Casimiro de Abreu/RJ. Possui diversos capítulos de livros publicados e artigos científicos publicados em revistas acadêmicas.
              </Typography>
              <Box className="mt-6">
            <button style={{ cursor: 'pointer', fontSize: '11pt' }} className="px-12 py-3 rounded-full bg-[#fff] font-bold text-[#0c302f] tracking-widest uppercase transform hover:scale-105 hover:bg-[#fff] transition-colors duration-200">
               Produções acadêmicas
            </button>
              </Box>
            </motion.div>
          </div>
        </Box>
      </Box>
    </motion.div>
  );
}