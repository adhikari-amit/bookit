import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from '../../api-client'
import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type loginForm = {
  email: string;
  password: string;
};


const Login = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>();
  
  const {showToast}=useAppContext()
  const mutation=useMutation(apiClient.login,{
    onSuccess:async()=>{
      showToast({message:"Registration Success",type:"SUCCESS"})
      navigate("/")
   },
   onError:(error:Error)=>{
     showToast({message:error.message,type:"ERROR"})
   }
  })
  const onSubmit=handleSubmit((data)=>{
    mutation.mutate(data)
  })

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="font-bold text-3xl">Login</h2>

      <label
        htmlFor="firstname"
        className="text-grey-700 text-sm font-bold flex-1"
      >
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "Email is required." })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label
        htmlFor="password"
        className="text-grey-700 text-sm font-bold flex-1"
      >
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must be 6 letter or more.",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>

      <span>
        <button
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500"
          type="submit"
        >
          Login
        </button>
      </span>
    </form>
  );
};

export default Login;

