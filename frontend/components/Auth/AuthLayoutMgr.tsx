import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useMutation } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import {mgrLoginCall} from "../../api/mgrlogin"
import {mgrSignUp} from "../../api/mgrSignUp"
import { Loader2 } from "lucide-react"

const AuthLayoutMgr = ({login}:{login:boolean}) => {

    const navi = useNavigate()

    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })

    const [signData,setSignData] = useState({
        email:"",
        password:"",
        name:"",
        location:""
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {value,name} = e.target
        if(login){
            setLoginData((prev) => ({...prev,[name]:value}))
        }else{
            setSignData((prev) => ({...prev,[name]:value}))
        }
    }

    const {mutate:signUpMutate,isLoading} = useMutation({
        mutationFn: async () => {
            let newUser;
            if(login){
                console.log("hi")
                newUser = await mgrLoginCall(loginData)
            }else{
                newUser = await mgrSignUp(signData)
            }
            console.log("newMgr",newUser)
            localStorage.setItem('mgr', JSON.stringify(newUser))
            navi(`/mgr/${newUser.id}`, { replace: true });
        }
    })

    const signFunc = () => {
        signUpMutate()
    }


    return(
        <>
            <div className="flex border border-black w-[60vw] h-[50vh] text-white rounded-s-md">
                <div className="bg-black w-[50%] pl-5 pr-5 h-[100%] flex flex-col items-center justify-center">
                {login?null:<><Input name="name" placeholder="name" className="border border-light  bg-light" value={signData.name} onChange={(e) => handleChange(e)}/><br/>
                <Input name="location" placeholder="location" className="border border-light  bg-light"/><br/></>}
                    <Input name="email" placeholder="email" className="border border-light bg-light" value={login?loginData.email:signData.email} onChange={(e) => handleChange(e)}/><br/>
                    <Input name="password" placeholder="password" className="border border-light  bg-light" value={login?loginData.password:signData.password} onChange={(e) => handleChange(e)}/><br/><br/>
                    {isLoading?<Button className="bg-white text-black font-bold"disabled>Loading
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>:<Button className="bg-white text-black font-bold" onClick={signFunc}>{login?"LOGIN":"SIGN UP"}</Button>}
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