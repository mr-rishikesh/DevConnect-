import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";




function SignIn() {
    const [formData, setFormData] = useState({ email: "", password: "" })
    const { isSigningIn, signin, isforgetPasswordPage } = useAuthStore();
    const validateForgetPassword = () => {

        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        return true;

    }

    const handleForgerPass = () => {
        const success = validateForgetPassword();

        if (success === true) {
            forgetPassowrd(formData)

        }
    }




    const validateForm = () => {

        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password) return toast.error("Password is required");

        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

        console.log("reacher bootmo")

        return true;
    }

    const handleSubmit = async () => {
        const success = validateForm();

        if (success === true) {

            await signin(formData);

        }
    }

    return <>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 flex flex-col space-y-6 sm:p-8">
                        <div className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome Back!
                            <span className="font-normal flex justify-center items-center text-center text-xs leading-tight tracking-tight text-gray-300 md:text-sm">
                                Sign in to continue exploring the community
                            </span>
                        </div>

                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                                    name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>


                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex gap-3 items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer" required="" />
                                        <label htmlFor="remember" className="!text-gray-100 cursor-pointer">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm text-primary-600 hover:underline text-blue-400">Forgot password?</a>
                            </div>
                            <button
                                type="submit"
                                disabled={isSigningIn}
                                onClick={handleSubmit}
                                className="w-full bg-blue-600 hover:bg-blue-500 transition-all text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center gap-2"
                            >
                                {isSigningIn ? (
                                    <>
                                        <Loader2 className="size-5 animate-spin" />
                                        <span>Loading...</span>
                                    </>
                                ) : (
                                    "Sign In"
                                )}
                            </button>

                            <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                                Don&apos;t have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="text-blue-400 font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default SignIn