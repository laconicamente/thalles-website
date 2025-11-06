"use client";
import React, { useRef, useState } from "react";
import { Box, Typography, Modal, IconButton, List, ListItem, ListItemIcon, ListItemText, Button, Divider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "motion/react"; 

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Lista completa de PDFs organizados por categoria
  const academicProductions = {
    artigos: [
      "43073-Texto do Artigo-163741-1-10-20201223.pdf",
      "CA_222-Analise-epistemologica-da-ciencia-em-construcao-Thalles.pdf",
      "O_fenomeno_da_precarizacao_do_trabalho_docente_em_.pdf",
      "REVISTA UNIG.pdf",
      "Revista Educação Pública - A importância das tecnologias digitais na Educação e seus desafios.pdf",
      "Revista Educação Pública - A pedagogia engajada e a práxis da transformação do mundo – um ensaio sobre a educação libertadora.pdf",
      "Revista Educação Pública - Escola sem Partido e o mito da escola neutra_ a importância do sentido político da educação.pdf",
      "Revista Educação Pública - Fracasso escolar e desigualdade social_ uma perspectiva crítica e emancipatória.pdf",
      "Revista Educação Pública - O fracasso escolar e a importância da Orientação Educacional – um diálogo necessário.pdf",
      "Revista Educação Pública - O labor docente e a alienação do trabalho.pdf",
      "Revista Educação Pública - Reflexões sobre a escola em ciclos no Brasil – uma análise crítica.pdf",
      "alexandre_assis,+texto+8+OK.pdf",
      "rscmin,+1+MILITARIZAÇÃO+DA+EDUCAÇÃO+PÚBLICA+NO+BRASIL.pdf"
    ],
    capitulos: [
      "“Remédios Eu tomo vários.” Adoecimento e medicalização docente no interior do Estado do Rio de Janeiro.pdf",
      "ADOECIMENTO E MEDICALIZAÇÃO DE PROFESSORES.pdf",
      "capitulo-humanas-scientia-86- THALLES AZEVEDO.pdf",
      "O MEDIADOR ESCOLAR NO PROCESSO DE INCLUSÃO- THALLES AZEVEDO.pdf",
      "TEM MEDO DE QUE- ENFRENTA- THALLES AZEVEDO.pdf",
      "THALLES AZEVEDO- CONEXÕES ACADÊMICAS.pdf",
      "THALLES AZEVEDO- FAROL.pdf",
      "THALLES EDUCAR É UM ATO DE AMOR.pdf",
      "A IMPORTÂNCIA DO ENSINO DE ESPANHOL NAS ESCOLAS BRASILEIRAS.pdf",
      "A ação dos Organismos Internacionais na Educação e seu desdobramento no Trabalho docente.pdf",
      "ADOECIMENTO DOCENTE E PRECARIZAÇÃO DO TRABALHO DOS PROFESSORES DE EDUCAÇÃO FÍSICA DO SEGUNDO SEGMENTO DO ENSINO FUNDAMENTAL.pdf",
      "As reformas econômico-sociais do governo de Michel Temer e do governo Bolsonaro e como elas impactaram na educação e no trabalho docente.pdf",
      "EXPRESSÕES DE VALORIZAÇÃO DOS DIREITOS HUMANOS NA REDE SOCIAL FACEBOOK.pdf",
      "Fraturas expostas pela pandemia escritos e experiências em educação..pdf",
      "Refletindo sobre o Fracasso Escolar Abordagem Centrada em Alunos Multirrepetentes de Santo Antônio de PáduaRJ.pdf",
      "Reflexões a respeito do pensamento decolonial nos estudos históricos brasileiros..pdf",
      "Sociedade enlutada Lutas e lutos de uma sociedade na busca por educação.pdf",
      "Vida e morte na pandemia Não sairemos da mesma forma que entramos.pdf",
    ]
  };

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

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDownloadPDF = (category: string, filename: string) => {
    const url = `/books/${category}/${filename}`;
    window.open(url, '_blank');
  };

  const formatFileName = (filename: string) => {
    // Remove a extensão .pdf e limita o tamanho do nome
    return filename.replace('.pdf', '').substring(0, 80) + (filename.length > 80 ? '...' : '');
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
      className="relative w-full md:pt-14 bg-[#0c302f]"
    >
      <Box className="container mx-auto px-6" sx={{ minHeight: '8rem', position: 'relative' }}>
        {/* Conteúdo principal */}
        <Box className="max-w-6xl mx-auto relative sm:mt-6 md:top-[-4rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative md:top-[-4rem] top-[-2rem]">
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
              className="w-full md:mt-16"
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
                Formado em Psicanálise pela Centro de Estudos em Terapia e Psicanálise (CETEP) e doutorando em Psicanálise, saúde e sociedade pela Universidade Veiga de Almeida (UVA). Atua como psicanalista clínico no formato online, atendendo centenas de pessoas ao redor do Brasil e brasileiros que moram em Portugal. Possui um trabalho diferenciado ao se especializar em tratamento de ansiedade, síndrome de Burnout e depressão. Venceu a categoria de melhores do ano na categoria psicanalista em 2025 em Rio das Ostras/RJ e foi profissional destaque do Sudeste e destaque do ano pela MG produções. Também atua como professor nos municípios de Rio das Ostras/RJ e Casimiro de Abreu/RJ. Possui diversos capítulos de livros publicados e artigos científicos publicados em revistas acadêmicas.
              </Typography>
              <Box className="mt-6">
                <button onClick={handleOpenModal} style={{ cursor: 'pointer', fontSize: '11pt' }} className="px-12 py-3 rounded-full bg-[#fff] font-bold text-[#0c302f] tracking-widest uppercase transform hover:scale-105 hover:bg-[#fff] transition-colors duration-200">
                  Produções acadêmicas
                </button>
              </Box>
            </motion.div>
          </div>
        </Box>
      </Box>

      {/* Modal */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg"
          style={{ width: '90vw', height: '90vh'}}>
          <Box className="relative h-full flex flex-col">
          <IconButton
              onClick={handleCloseModal}
              className="z-10 rounded-lg"
              style={{ position: 'absolute', top: '1rem', right: '1rem', width: '2rem', height: '2rem', background: '#fff', color: '#333' }}
            >
              <CloseIcon />
            </IconButton>

            <Box className="p-6 pb-4">
              <Typography variant="h5" fontWeight="bold" className="mb-2" style={{ color: '#297270' }}>
                Produções Acadêmicas
              </Typography>
            </Box>

            <Box className="flex-1 overflow-y-auto px-6 pb-6">

              <Box className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {academicProductions.artigos.map((filename, index) => (
                  <ListItem
                    key={index}
                    className="border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                    onClick={() => handleDownloadPDF('artigos', filename)}
                    style={{ marginBottom: '8px', padding: '12px' }}
                  >
                    <ListItemIcon>
                      <PictureAsPdfIcon style={{ color: '#d32f2f' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={formatFileName(filename)}
                      style={{ marginRight: '8px' }}
                      primaryTypographyProps={{
                        fontSize: '0.9rem',
                        lineHeight: '1.3'
                      }}
                      className="overflow-hidden"
                    />
                    <IconButton
                      edge="end"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadPDF('artigos', filename);
                      }}
                      style={{ color: '#297270' }}
                    >
                      <DownloadIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </Box>
              <Box className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {academicProductions.capitulos.map((filename, index) => (
                  <ListItem
                    key={index}
                    className="border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                    onClick={() => handleDownloadPDF('capitulos', filename)}
                    style={{ marginBottom: '8px', padding: '12px' }}
                  >
                    <ListItemIcon>
                      <PictureAsPdfIcon style={{ color: '#d32f2f' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={formatFileName(filename)}
                      style={{ marginRight: '8px' }}
                      primaryTypographyProps={{
                        fontSize: '0.9rem',
                        lineHeight: '1.3'
                      }}
                    />
                    <IconButton
                      edge="end"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadPDF('capitulos', filename);
                      }}
                      style={{ color: '#297270' }}
                    >
                      <DownloadIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </motion.div>
  );
}