"use client";
import React from "react";
import { StickyScroll } from "./sticky";


const content = [
    {
        title: "Sobre mim",
        description:
            "Formado em Psicanálise pela Centro de Estudos em Terapia e Psicanálise (CETEP) e doutorando em Psicanálise, saúde e sociedade pela Universidade Veiga de Almeida (UVA). Atua como psicanalista clínico no formato online, atendendo centenas de pessoas ao redor do Brasil e brasileiros que moram em Portugal. É considerado um dos maiores psicanalistas do país a se especializar no tratamento de ansiedade, síndrome de Burnout e depressão. Venceu a categoria de melhores do ano na categoria psicanalista em 2025 em Rio das Ostras/RJ e foi profissional destaque do Sudeste e destaque do ano pela MG produções. Também atua como professor nos municípios de Rio das Ostras/RJ e Casimiro de Abreu/RJ. Possui diversos capítulos de livros publicados e artigos científicos publicados em revistas acadêmicas.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white hidden md:flex lg:flex">
                <img
                    src="/images/thalles-2.jpeg"
                    width={360}
                    height={640}
                    className="rounded-lg shadow-lg w-full max-w-[360px] aspect-[9/16] object-cover mx-auto"
                    style={{
                        aspectRatio: '9/16',
                        maxWidth: '360px',
                        height: 'auto'
                    }}
                    alt="Sobre mim (Thalles Azevedo)"
                />
            </div>
        ),
    },
    {
        title: "Uma visão geral da psicanálise lacaniana",
        description:
            "A psicanálise é um campo de investigação que estuda os efeitos do inconsciente nos processos psíquicos e suas reverberações na vida cotidiana. Essa abordagem busca resgatar tais processos a partir da experiência singular de cada sujeito com sua história pessoal e como esta se manifesta em seus atos. Ela trabalha com elementos que frequentemente escapam à nossa percepção imediata, mas que fundamentam o mal-estar que experimentamos. Esse desconforto surge a partir de múltiplas fontes entrelaçadas: dos conflitos que nos antecedem e que continuamos a elaborar através das relações com os outros e de nossas vivências compartilhadas; dos valores e condicionamentos assimilados no seio da comunidade que nos acolheu e nos deseja; e, por fim, das tensões geradas pelo choque entre nossas subjetividades e as expectativas impostas pelo tecido social.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/images/psicanalise.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Uma visão geral da psicanálise"
                />
            </div>
        ),
    },
    {
        title: "Sobre quais processos a psicanálise lacaniana atuaria?",
        description: "O campo de intervenção da psicanálise lacaniana se dá no campo dos processos de sofrimento psíquico. O que normalmente reconhecemos sob os nomes de depressão, luto, ansiedade, distúrbios, compulsão, fobias etc. são, em nós, o resultado das dinâmicas de relações nas quais estamos implicados – relações que formam uma trama complexa de sentidos que assumimos e que dão a tônica aos nossos sintomas. A psicanálise lacaniana, portanto, se apresenta como uma alternativa que buscaria possibilitar a transformação do sofrimento psíquico por meio da fala e da interpretação dos processos subjacentes ao relato do paciente, facilitando a construção de novas questões. Essas, por sua vez, podem possibilitar a reformulação dos modos pelos quais nos reconhecemos, nossa história e nossos outros. Todo o processo garante o sigilo e o cuidado como pilares fundamentais do acompanhamento.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/images/approach.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Sobre quais processos a psicanálise lacaniana atuaria?"
                />
            </div>
        ),
    },
];
export function ContentSection() {
    return (
        <div className="w-full">
            <StickyScroll content={content}/>
        </div>
    );
}
