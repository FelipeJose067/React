export type ButtonTypes = {
    titulo: string;
    subtitulo?: string;
    classname?: string;
    tipo: "primario" | "secundario" | "sucesso" | "perigo",
    funcao: ()=> void
}


