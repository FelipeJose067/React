"use client"

export default function Home() {
    return (
        <>

            <h1 className="bg-blue-600 text-white text-center p-2" >Minha Página com Componentes</h1>

            <header className="flex intems-center gap-4 justify-center p-5">
                <div className="border-none p-6 rounded shadow-lg w-60 h-60">
                    <h2 className="text-2x1 font-bold mb-2 ">
                        Componente 1
                    </h2>
                    <p className="text-gray-400 text-xs">
                        Esse é o conteudo do primeiro card

                    </p>

                </div>
                <div className="border-none p-6 rounded shadow-lg w-60 h-60">
                    <h2 className="text-2x1 font-bold mb-2 ">
                        Componente 2
                    </h2>
                    <p className="text-gray-400 text-xs">
                        Outro cartão com conteudo diferente
                    </p>
                </div>
                <div className="border-none p-6 rounded shadow-lg w-60 h-60">
                    <h2 className="text-2x1 font-bold mb-2 ">
                        Componente 3
                    </h2>
                    <p className="text-gray-400 text-xs">
                        você pode adicionar quantos quiser !
                    </p>
                </div>
            </header>

             <footer className="bg-gray-300  text-white text-center bottom-0 absolute w-full">
                &copy; Felipe J - {new Date().getFullYear()}
            </footer>
        </>

    )
    
}
