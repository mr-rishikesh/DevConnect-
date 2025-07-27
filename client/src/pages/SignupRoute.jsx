import { useAuthStore } from "../store/useAuthStore";
import SignUp from "./SignUp";
import VerifyOtp from "./VerifyOpt";




function SignupRoute() {
     const {navigateToOtp} = useAuthStore();
     console.log(navigateToOtp + "in the singuproute")
    return navigateToOtp ? <VerifyOtp /> : <SignUp />;
}

export default SignupRoute