import { Button } from "@/components/ui/button"
import Search from "./Search"

const Navbar = () => {
    return(
        <div className="bg-[#1e1e1e] text-white h-[10vh] w-[100%] border border-black flex items-center">
            <p className="ml-[5vw]">Navbar</p>
            <Search/>
            <Button className="bg-gold-gradient text-black border border-none ml-auto mr-[2vw]">Sign in</Button>
            <Button className="bg-gold-gradient text-black border border-none mr-[5vw]">Publish</Button>
        </div>
    )
}

export default Navbar