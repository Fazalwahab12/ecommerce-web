import Wreper from "@/app/components/Wreper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <div>
        <Wreper>
     <div> <SignIn />;</div>
    </Wreper>
    </div>
  ) 
}