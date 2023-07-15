import Wreper from "@/app/components/Wreper";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return(
    <div>
        <Wreper>
     <div> <SignUp />;</div>
    </Wreper>
    </div>
  
  ) 
}

