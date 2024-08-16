import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod'

function App() {
  
    const userFiltersSchema = z.object({
      name: z.string().min(3, "Nome deve conter mais que 2 caracteres"),
      email: z.string().email("Email invalido"),
      password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
    })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userFiltersSchema)
  })

  const [user,setUser] = useState('')

  const submitForm = (data) => {
    console.log(data);
    
    setUser(data)
  }


  return (
    <main className="h-screen flex items-center justify-center flex-col">

      <form onSubmit={handleSubmit(submitForm)} className="bg-zinc-950 p-12 flex flex-col items-center justify-center rounded-3xl">
        <h1 className="pb-16 text-4xl font-bold">Login</h1>
        <div className="flex flex-col gap-5 w-80">
          <div className="flex flex-col gap-1">
            <label>Nome</label>
            <input
              {...register('name')}
              className="border border-zinc-400 bg-transparent p-2 rounded"
              type="name"
              placeholder="Digite seu Nome"
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              {...register('email')}
              className="border border-zinc-400 bg-transparent p-2 rounded"
              type="email"
              placeholder="Digite seu Email" />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <label>Senha</label>
            <input
              {...register('password')}
              className="border border-zinc-400 bg-transparent p-2 rounded"
              type="password"
              placeholder="Digite sua Senha" />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <button className="border border-zinc-400 bg-transparent transition duration-400 ease-out w-20 self-center rounded-lg p-2 font-bold hover:border-zinc-900  hover:bg-zinc-200 hover:text-zinc-700" type="submit">Submit</button>
        </div>
      </form>
      <p className="p-10">{JSON.stringify(user)}</p>
    </main>
  )
}

export default App
