import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import validator from "validator";


const Register = () => {

    const userFiltersSchema = z.object({
        name: z.string()
          .min(3, "Nome deve conter mais que 2 caracteres")
          .toLowerCase()
          .regex(/^[A-Za-z\s]+$/, "O nome deve conter apenas letras e espaços"),
        email: z.string()
          .email("Email invalido"),
        password: z.string()
          .min(6, "A senha deve ter pelo menos 6 caracteres"),
        tel: z.string()
          .regex(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "O nome deve conter apenas Numeros")
          .min(10, { message: 'Must be a valid mobile number' })
          .max(14, { message: 'Must be a valid mobile number' }).refine(validator.isMobilePhone),
      })
    
    
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userFiltersSchema)
      })
    
      const [user, setUser] = useState('')
    
      const submitForm = (data) => {
        console.log('po');
        console.log(data);
    
        setUser(data)
      }

    return (
        <form onSubmit={handleSubmit(submitForm)}
        className="bg-zinc-900 p-12 flex flex-col items-center justify-center rounded-3xl">
        <h1 className="pb-16 text-4xl font-bold">Register</h1>
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
            <label>Telefone</label>
            <input
              {...register('tel')}
              className="border border-zinc-400 bg-transparent p-2 rounded"
              type="tel"
              placeholder="(xx) xxxxx-xxxx" />
            {errors.tel && <span className="text-red-500">{errors.tel.message}</span>}
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



          <button
            className="border border-zinc-400 bg-transparent transition duration-400 ease-out w-20 self-center rounded-lg p-2 font-bold hover:border-zinc-900  hover:bg-zinc-200 hover:text-zinc-700"
            type="submit">Submit</button>

        <div className="flex flex-wrap gap-5 text-center items-center justify-center">

        <div>
            <p>Nome</p>
        <p className=" h-full text-wrap">{JSON.stringify(user.name)}</p>
        </div>
        <div>
            <p>Email</p>
        <p className=" h-full text-wrap">{JSON.stringify(user.email)}</p>
        </div>

        <div>
            <p>Telefone</p>
        <p className=" h-full text-wrap">{JSON.stringify(user.tel)}</p>
        </div>

        <div>
            <p>Senha</p>
        <p className=" h-full text-wrap">{JSON.stringify(user.password)}</p>
        </div>
        </div>

        </div>

      </form>

    )
}

export default Register