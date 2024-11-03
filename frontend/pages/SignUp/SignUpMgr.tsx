import AuthLayoutMgr from "../../components/Auth/AuthLayoutMgr"

const SignUp = () => {
    return(
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-light">
        <h1 className="font-extrabold text-white">SignUp</h1><br/>
        <AuthLayoutMgr login={false}/>
    </div>
    )    
}

export default SignUp