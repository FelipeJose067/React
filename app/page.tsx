"use client"

import Button from "./button"



export default function Home() {

    function helloWorld(nome:string){
    alert(`Olá ${nome}, Seja Bem Vindo ao Site !`)
    }
  
    return (
        <>
            <Button funcao={() => helloWorld ("primario")} tipo="primario" titulo="Salvar"/>
            <Button funcao={() => helloWorld ("secundario")} tipo="secundario" titulo="Salvar"/>
            <Button funcao={() => helloWorld ("sucesso")} tipo="sucesso" titulo="Salvar"/>
            <Button funcao={() => helloWorld ("perigo")} tipo="perigo" titulo="Salvar"/>
        </>
    )
}