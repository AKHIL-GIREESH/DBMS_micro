import AuthLayoutMgr from "../../components/Auth/AuthLayoutMgr"

const LoginMgr = () => {
    return(
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-light">
        <h1 className="font-extrabold text-white">LOGIN</h1><br/>
        <AuthLayoutMgr login={true}/>
    </div>
    )    
}

export default LoginMgr