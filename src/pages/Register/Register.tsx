import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from '../../api-client'

export type RegisterFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
};

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation=useMutation(apiClient.register,{
    onSuccess:async()=>{
       console.log("Registration Success")
    },
    onError:(error:Error)=>{
       console.log(error.message)
    }
  })

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data)
  });


  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold"> Create an Account</h2>

      <div className="flex flex-col md:flex-row gap-5">
        <label
          htmlFor="firstname"
          className="text-grey-700 text-sm font-bold flex-1"
        >
          First Name
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("firstname", { required: "Firstname is required." })}
          />
          {errors.firstname && (
            <span className="text-red-500">{errors.firstname.message}</span>
          )}
        </label>
        <label
          htmlFor="lasttname"
          className="text-grey-700 text-sm font-bold flex-1"
        >
          Last Name
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastname", { required: "Lastname is required" })}
          />
          {errors.lastname && (
            <span className="text-red-500">{errors.lastname.message}</span>
          )}
        </label>
      </div>
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

      <label
        htmlFor="password"
        className="text-grey-700 text-sm font-bold flex-1"
      >
        Confirm Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmpassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your password do not match";
              }
            },
          })}
        />
        {errors.confirmpassword && (
          <span className="text-red-500">{errors.confirmpassword.message}</span>
        )}
      </label>

      <span>
        <button
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500"
          type="submit"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
