import { useState, useEffect } from "react";

export function useScrollDirection(){
    const [direcaoScroll, setdirecaoScroll] = useState("up");

    useEffect(() => {
        let ultimaPosicaoScroll = window.scrollY;

        const escutarScroll = () => {
            const posicaoAtualScroll = window.scrollY;

            if(Math.abs(posicaoAtualScroll - ultimaPosicaoScroll) < 5) return;

            const novaDirecao = posicaoAtualScroll > ultimaPosicaoScroll ? "cima" : "baixo";
            setdirecaoScroll(novaDirecao);

            ultimaPosicaoScroll = posicaoAtualScroll;
        };

        window.addEventListener("scroll", escutarScroll);
        return () => window.removeEventListener("scroll", escutarScroll);
    }, []);

    return direcaoScroll; //retorna "cima" ou "baixo"
}