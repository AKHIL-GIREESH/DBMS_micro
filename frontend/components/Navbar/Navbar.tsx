import { Button } from "@/components/ui/button"
import Search from "./Search"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="bg-[#101010] text-white h-[10vh] w-[100vw] border border-black flex items-center">
            <p className="ml-[5vw]">Logo</p>
            <Search/>
            <Button className="bg-gold-gradient border border-none ml-auto mr-[2vw]"><Link className="text-black" to='/login'>Sign in</Link></Button>
            <Button className="bg-gold-gradient text-black border border-none mr-[5vw]">Publish</Button>
        </div>
    )
}

export default Navbar