"use client";
import React, { useRef, useState } from "react";
import { Box, Typography, Card, Modal, IconButton } from "@mui/material";
import MapOutlined from "@mui/icons-material/MapOutlined";
import CallEndRounded from "@mui/icons-material/CallEndRounded";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "motion/react";
import { LinkPreview } from "./link-preview";
import Instagram from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";


export function ContactSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

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

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  const awards = [
    { src: "/images/premio-1.jpeg", alt: "Prêmio 1" },
    { src: "/images/premio-2.jpeg", alt: "Prêmio 2" },
    { src: "/images/premio-3.jpeg", alt: "Prêmio 3" },
  ];

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
        <Box className="container mx-auto px-6 max-w-6xl">
          <div className="relative p-15 py-15">
            <Box className={"w-full flex justify-center items-center text-center "}>
              <h2 className="relative z-20 pb-12 font-bold text-4xl sm:text-5xl md:text-5xl lg:text-5xl">
                Conheça mais sobre mim e <div style={{ color: '#297270' }}>entre em contato</div>
              </h2>
            </Box>
            <Box display={"flex"} flexDirection={{ xs: "column", sm: "column", md: "row" }} gap={8} justifyContent="center" alignItems="flex-start">
              <Box width={{ sm: "100%", md: "50%" }} className="flex justify-center">
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
                          <PlayArrowIcon style={{ fontSize: 50, color: '#297270' }} />
                        </div>
                      </button>
                    )}
                  </Box>
                </Box>
              </Box>

              <Box width={{ sm: "100%", md: "50%" }} className="flex justify-start">
                <div className="w-full max-w-md relative flex flex-wrap justify-start items-start gap-6">
                  <div className="relative flex flex-wrap justify-start gap-4 flex-col">
                    <Box>
                      Se desejar esclarecer dúvidas, agendar consultas ou <br />
                      obter mais informações, estou à disposição nos canais <br />
                      de contato disponibilizados no site.
                    </Box>
                    <Box className="flex justify-start gap-4 flex-wrap">
                      <Typography fontWeight={'bold'} variant={'h5'}>Contato</Typography>
                      <Box className={"w-full flex gap-4 flex-wrap align-center"}>
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
                        <Box  alignItems={'center'}>
                          <Typography>
                            +55 (22) 98121-5841
                            <br />
                            thalles-ladeira@hotmail.com
                          </Typography>
                        </Box>
                        <Box className={"w-full flex gap-4 flex-wrap"}>
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
                            <Instagram />
                          </Card>
                          <Box className={"flex"} alignItems={'center'}>
                            <Typography>
                              <Link href="https://www.instagram.com/psi.thallesazevedo/" target="_blank"> @psi.thallesazevedo</Link>
                            </Typography>
                          </Box>
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
                            <button style={{ cursor: 'pointer', fontSize: '11pt' }} className="px-12 py-3 rounded-full bg-[#222] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#333] transition-colors duration-200">
                              Entre em contato
                            </button>
                          </LinkPreview>
                        </motion.div>

                        {/* Seção de Premiações */}
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
                            delay: 1.4,
                          }}
                          className="w-full mt-6"
                        >
                          <Typography variant="h5" fontWeight={'bold'} className="pb-6 font-semibold">
                            Premiações e Reconhecimentos
                          </Typography>
                          <Box display="flex" gap={2} flexWrap="wrap" justifyContent="flex-start">
                            {awards.map((award, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer"
                                onClick={() => handleImageClick(award.src)}
                              >
                                <Box
                                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                                  style={{ width: "80px", height: "80px" }}
                                >
                                  <Image
                                    src={award.src}
                                    alt={award.alt}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                  />
                                </Box>
                              </motion.div>
                            ))}
                          </Box>
                        </motion.div>
                      </Box>
                    </Box>
                  </div>
                </div>
              </Box>
            </Box>
          </div>
        </Box>

        {/* Modal para visualizar imagem maior */}
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          className="flex items-center justify-center p-4"
        >
          <Box className="relative bg-white rounded-lg shadow-2xl overflow-hidden" style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
            <IconButton
              onClick={handleCloseModal}
              className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100"
              style={{ color: '#297270' }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <Box className="relative p-4">
                <Image
                  src={selectedImage}
                  alt="Prêmio ampliado"
                  width={0}
                  height={0}
                  sizes="90vw"
                  className="object-contain w-auto h-auto"
                  style={{ 
                    maxWidth: '80vw', 
                    maxHeight: '80vh',
                    width: 'auto',
                    height: 'auto'
                  }}
                />
              </Box>
            )}
          </Box>
        </Modal>
      </motion.div>
    </>
  );
}
