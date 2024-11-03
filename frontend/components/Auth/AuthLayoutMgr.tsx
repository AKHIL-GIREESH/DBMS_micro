import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const AuthLayoutMgr = ({login}:{login:boolean}) => {
    return(
        <>
            <div className="flex border border-black w-[60vw] h-[50vh] text-white rounded-s-md">
                <div className="bg-black w-[50%] pl-5 pr-5 h-[100%] flex flex-col items-center justify-center">
                    <Input className="border border-light bg-light"/><br/>
                    <Input className="border border-light  bg-light"/><br/>
                    {login?null:<><Input className="border border-light  bg-light"/><br/></>}<br/>
                    <Button className="bg-white text-black font-bold">{login?"LOGIN":"SIGN UP"}</Button>
                </div>
                <div className="border border-black w-[30vw] flex flex-col items-center justify-center bg-white text-black rounded-s-2xl rounded-e-md text-center">
                    <h2 className="font-bold text-3xl mb-2">{!login?"Login":"Become Partners"}</h2>
                    <p>{!login?"Already a partner? Click on the link below to login!":"Wonna be Partners? Click on the link below to get started!"}</p><br/>
                    <Button><Link to={`/${login?"signupMgr":"loginmgr"}`} className="text-white">{!login?"LOGIN":"SIGN UP"}</Link></Button>
                </div>
            </div>
        </>
    )
}

export default AuthLayoutMgr