import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-client";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

const SignOutButton = () => {

  const queryClient=useQueryClient()

  const navigate = useNavigate();
  const {showToast}=useAppContext()

  const mutation = useMutation(apiClient.logout, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken")
      showToast({ message: "Successfully logout", type: "SUCCESS" });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const signout=async()=>{
    mutation.mutate()
  }
  return (
    <button
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100"
      onClick={signout}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;