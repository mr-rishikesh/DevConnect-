import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Loader2 } from "lucide-react";


function VerifyOtp() {
    const {verifyotp , isVerifyingOtp} = useAuthStore();
   
   let newotp = "";
    const handleVerifyOtp  = async (e) => {
      e.preventDefault();
      
        for (let i of otp) {
              newotp += i;
        }
       // console.log(newotp)

       await verifyotp(newotp);
       console.log("Cookies:", document.cookie);



    }
    const handleResendOtp  = () => {
        
    }
 const [otp , setOtp] = useState(["", "", "", "", "", ""])
  const handleOtpChange = (e, index) => {
  const value = e.target.value;

  if (!/^\d*$/.test(value)) return; // Allow only digits

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  // Move focus to the next input
  if (value && index < 5) {
    document.getElementById(`code-${index + 2}`)?.focus();
  }
};

   


  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            CareTrackr
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Verify OTP
              </h1>
             <form onSubmit={handleVerifyOtp}>
  <div className="flex mb-2 space-x-2 justify-center">
    {[...Array(6)].map((_, i) => (
      <input
        key={i}
        id={`code-${i + 1}`}
        type="text"
        maxLength="1"
        className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg"
        value={otp[i]}
        onChange={(e) => handleOtpChange(e, i)}
        required
      />
    ))}
  </div>

  <p className="text-sm text-gray-500 mb-4 text-center">
    Please enter the 6-digit code sent via email.
  </p>

  <div className="flex items-center justify-between mb-4">
    <button
      type="button"
      onClick={handleResendOtp}
      className="text-sm font-medium text-primary-600 hover:underline"
    >
      Resend OTP
    </button>
  </div>

  <button
    type="submit"
    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  >
                   {isVerifyingOtp ? (
                        <>
                        <Loader2 className="size-5 animate-spin" />
                        <span>Loading...</span>
                        </>
                    ) : (
                        "Verify"
                    )}
  </button>
</form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VerifyOtp