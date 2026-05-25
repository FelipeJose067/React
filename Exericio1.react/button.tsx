import { ButtonTypes } from "@/PaginasSalvas/Exercicio Aula 2/tipos";

export default function Button ({titulo, subtitulo, classname, tipo, funcao}: ButtonTypes){
    let html 
    switch (tipo) {
        case "primario":
            html = <button onClick={funcao} className="bg-blue-500 rounded" >{titulo}</button>
            break;
        case "secundario":
            html = <button onClick={funcao} className="bg-gray-500 rounded" >{titulo}</button>
            break
        case "sucesso":
             html =<button onClick={funcao} className="bg-red-500 rounded" >{titulo}</button>
            break
        case "perigo":
             html = <button onClick={funcao} className="bg-gray-500 rounded" >{titulo}</button>
            break
        default:
            break;
        }
    return(
        <>
        {html}
        </>
       
    )
}