import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import TagInput from "../components/TagInput";
function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    githubUrl : "",
    password: "",
   
  });
  const { signup, navigateToOtp, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!formData.githubUrl.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
   
   
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    console.log("reacher bootmo");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    const success = validateForm();
    if (success === true) await signup(formData);
    console.log(navigateToOtp + "lets see ");
  };

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up to your account
              </h1>
              <div class="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="FullName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                    }}
                    name="fullName"
                    id="fullName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                        
               

                {/* <TagInput /> */}
                <div>
                  <label
                    for="city"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Github Url
                  </label>
                  <input
                    type="githubUrl"
                    onChange={(e) => {
                      setFormData({ ...formData, githubUrl: e.target.value });
                    }}
                    name="githubUrl"
                    id="githubUrl"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Github Url "
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Create Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                    }}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>



                <button
                  type="button"
                  disabled={isSigningUp}
                  onClick={handleSubmit}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center gap-2"
                >
                  {isSigningUp ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      <span>Loading...</span>
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Login to account{" "}
                  <Link
                    to="/signin"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
