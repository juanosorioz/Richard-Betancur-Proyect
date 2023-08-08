import { useForm } from "react-hook-form"

function LoginPage() {

  const { register, handleSubmit, formState: { errors }} = useForm()

  const onSubmited = handleSubmit(async (data) =>{
    console.log(data);
  })
  return (
    <div div className='bg-zinc-800 max-w-md p-10 rounded-md'>

        <form onSubmit={onSubmited}>
        <input type="email" {...register("email", {required:true})} placeholder='email' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>

        {
          errors.email && <p className='text-red-500'>Email is Required</p>
        }

        <input type="password" {...register("password", {required:true})} placeholder='password' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>

        {
          errors.password && <p className='text-red-500'>Password is Required</p>
        }
        <button type="submit" className="bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
