import { Button } from "@/components/ui/button"
import Search from "./Search"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
//import { Film } from "lucide-react"

const Navbar = () => {
    const storedUser = localStorage.getItem('userid');
    return(
        <div className="bg-[#101010] text-white h-[10vh] w-[100vw] border border-black flex items-center">
            <p className="ml-[5vw]">A4</p>
            <Search/>
            
            {storedUser ? <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>:<Button className="bg-gold-gradient border border-none ml-auto mr-[2vw]"><Link className="text-black" to='/login'>Sign in</Link></Button>}
            <Button className="bg-gold-gradient text-black border border-none mr-[5vw]">Publish</Button>
        </div>
    )
}

export default Navbar