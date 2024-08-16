import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";

function App() {

  const [ativo,setAtivo] = useState(true)


  const trocar = () => {

    const ativado = !ativo

    setAtivo(ativado)

  }




  return (
    <main className="h-screen flex items-center justify-evenly overflow-hidden">

      <button onClick={trocar} className="absolute top-4 self-center z-10 text-zinc-50">Trocar</button>

      <div  className={`transition-transform duration-500 ease-in-out ${ativo ? "translate-x-0" : "-translate-x-full"} absolute w-full`}>
        <Login/>
      </div>

    
      <div className={`transition-transform duration-500 ease-in-out ${!ativo ? "translate-x-0 " : "translate-x-full"} absolute w-full`}>
        <Register/>
      </div>

    </main>
  )
}

export default App
