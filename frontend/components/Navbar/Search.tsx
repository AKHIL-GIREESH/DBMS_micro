import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

const Search = () => {
    return(
        <>
            <Input className="w-[40vw] h-[40%] ml-[3vw] border border-light rounded-e-none" placeholder="Search..."></Input>
            <Button className="bg-black border h-[40%] border-light rounded-s-none border-s-0" ><SearchIcon/></Button>
        </>
        
    )
}

export default Search