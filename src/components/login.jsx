const Login = () => {
    return (
        <>

            <form
                className="bg-zinc-900 p-12 flex flex-col items-center justify-center rounded-3xl">
                <h1 className="pb-16 text-4xl font-bold">Login</h1>
                <div className="flex flex-col gap-5 w-80">

                    <div className="flex flex-col gap-1">
                        <label>Email</label>
                        <input

                            className="border border-zinc-400 bg-transparent p-2 rounded"
                            type="email"
                            placeholder="Digite seu Email" />

                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Senha</label>
                        <input

                            className="border border-zinc-400 bg-transparent p-2 rounded"
                            type="password"
                            placeholder="Digite sua Senha" />

                    </div>

                    <button
                        className="border border-zinc-400 bg-transparent transition duration-400 ease-out w-20 self-center rounded-lg p-2 font-bold hover:border-zinc-900  hover:bg-zinc-200 hover:text-zinc-700"
                        >Login</button>

                </div>
                <div className="gap-2 flex mt-6">
                    <input type="checkbox" />
                    <label className="text-zinc-400">Remember my password</label>
                </div>

                <a className="text-purple-600 mt-3">I forgot my password</a>


            </form>

        </>
    )
}

export default Login