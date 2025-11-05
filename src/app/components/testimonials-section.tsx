"use client";
import React, { useState, useEffect } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

interface Testimonial {
  id: number;
  name: string;
  image: string;
}

// Lista de depoimentos baseada nas imagens disponíveis
const testimonials: Testimonial[] = [
  { id: 2, name: "Juliane", image: "/images/depo-2.jpeg" },
  { id: 3, name: "Ale Campos", image: "/images/depo-3.jpeg" },
  { id: 1, name: "Barcellos Lary", image: "/images/depo-1.jpeg" },
  { id: 7, name: "Anderson", image: "/images/depo-7.jpeg" },
  { id: 9, name: "Rodrigues", image: "/images/depo-9.jpeg" },
  { id: 5, name: "Alessandra", image: "/images/depo-5.jpeg" },
  { id: 8, name: "Guilherme", image: "/images/depo-8.jpeg" },
  { id: 6, name: "Ale M Campos", image: "/images/depo-6.jpeg" },
  { id: 10, name: "Tabella", image: "/images/depo-10.jpeg" },
  { id: 4, name: "Ale Campos", image: "/images/depo-4.jpeg" },
];

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);

  // Timer para fechar o modal automaticamente
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (selectedTestimonial && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (selectedTestimonial && timeLeft === 0) {
      setSelectedTestimonial(null);
    }

    return () => clearTimeout(timer);
  }, [selectedTestimonial, timeLeft]);

  const handleOpenModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setTimeLeft(10);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
    setTimeLeft(0);
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
      className="relative w-full py-14 bg-[#f5f5f5]"
    >
      <Box className="container mx-auto px-6">
        <Box className="w-full flex justify-center items-center text-center mb-12">
          <h2 className="relative z-20 font-bold text-4xl sm:text-5xl md:text-5xl lg:text-5xl">
            Depoimentos de <span style={{color: '#297270'}}>Pacientes</span>
          </h2>
        </Box>

        <Box className="text-center mb-8">
          <Typography variant={"body1"} className="text-gray-900">
          Veja o que alguns dos meus pacientes compartilharam sobre o processo terapêutico
          </Typography>
        </Box>
        <Box className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => handleOpenModal(testimonial)}
            >
              <Box
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(45deg, #297270, #4a9bc1)',
                  border: '3px solid #fff',
                }}
              >
                {testimonial.name.charAt(0).toUpperCase()}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Modal para exibir o depoimento */}
      <Modal
        open={!!selectedTestimonial}
        onClose={handleCloseModal}
        aria-labelledby="testimonial-modal"
        className="flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
        >
          {selectedTestimonial && (
            <>
              {/* Header com timer e botão fechar */}
              <Box className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4 flex justify-between items-center">
                <Box className="flex items-center gap-2">
                  <Box
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background: 'linear-gradient(45deg, #297270, #4a9bc1)',
                    }}
                  >
                    {selectedTestimonial.name.charAt(0).toUpperCase()}
                  </Box>
                  <Typography variant="body2" className="text-white font-medium">
                    {selectedTestimonial.name}
                  </Typography>
                </Box>
                
                <Box className="flex items-center gap-2">
                  {/* Barra de progresso do timer */}
                  <Box className="w-12 h-1 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: "100%" }}
                      animate={{ width: `${(timeLeft / 10) * 100}%` }}
                      transition={{ duration: 1, ease: "linear" }}
                    />
                  </Box>
                  
                  <button
                    onClick={handleCloseModal}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </Box>
              </Box>

              {/* Imagem do depoimento */}
              <Box className="relative">
                <Image
                  src={selectedTestimonial.image}
                  alt={`Depoimento de ${selectedTestimonial.name}`}
                  width={500}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </Box>
            </>
          )}
        </motion.div>
      </Modal>
    </motion.div>
  );
}