
import toast from "react-hot-toast"
import { axiosInstance } from "../lib/axios"
import { create } from "zustand"

export const useAuthStore = create((set, get) => ({
    authUser: null,
    allUsers: null,
    isSigningUp: false,
    navigateToOtp: false,
    email: "",
    isCheckingAuth: false,
    isSigningIn: false,
    isforgetPasswordPage: false,
    isVerifyingOtp: false,


    forgetPassowrd: async (data) => {

    },

    signin: async (data) => {


        try {
            set({ isSigningIn: true })



            const res = await axiosInstance.post("/auth/signin", data);
            console.log(res + "res of signin");
            toast.success("Sucessfully SignIn")
            const { checkAuth } = get();
            await checkAuth();


        } catch (error) {
            console.log(error);
            toast.error("SignIn failed")
        } finally {
            set({ isSigningIn: false })

        }

    },




    checkAuth: async () => {
        try {
            set({ isCheckingAuth: true })

            const res = await axiosInstance.get("/auth/check")
            console.log(res)
            set({ authUser: res.data.authUser });
            set({ allUsers: res.data.allUsers });


        } catch (error) {
            console.log("Error in check auth frontend")
            console.log(error)
        } finally {
            set({ isCheckingAuth: false })
        }

    },

    signup: async (data) => {


        try {
            set({ isSigningUp: true })
            console.log(data)
            const res = await axiosInstance.post("/auth/signup", data);
            toast.success("Successfully SignUp");
            const { checkAuth } = get();
            await checkAuth();




        } catch (error) {
            console.log(error)
            toast.error("Signup Failed , Try to Login")
        }
        finally {
            set({ isSigningUp: false })
        }
    },




}))