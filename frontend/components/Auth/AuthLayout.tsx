import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const AuthLayout = ({login}:{login:boolean}) => {
    return(
        <>
            <div className="flex border border-black w-[60vw] h-[50vh]">
                <div className="w-[50%] ml-5 mr-5 h-[100%] flex flex-col items-center justify-center">
                    <Input/><br/>
                    <Input/><br/>
                    <Input/><br/><br/>
                    <Button>{login?"Login":"Sign Up"}</Button>
                </div>
                <div className="border border-black flex flex-col items-center justify-center">
                    <h2 className="font-bold text-3xl mb-2">{!login?"Login":"Create an Account"}</h2>
                    <p>{"Don't have an account? Click on the link below to get started!"}</p><br/>
                    <Button className="">{!login?"Login":"Sign Up"}</Button>
                </div>
            </div>
        </>
    )
}

export default AuthLayout