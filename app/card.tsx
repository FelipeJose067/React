"use client"

import Card from "./page"

export default function App() {

    function Executar() {
        alert("Seja bem vindo ao sistema Next-Level")
    }

    return (
        <div>

            <Card
                titulo="Sistema Next-Level"
                acao={Executar}
            >
                <p>
                    Aprendendo props e children
                </p>
            </Card>

        </div>
    )
}