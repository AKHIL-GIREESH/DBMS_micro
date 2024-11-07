import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Loader2, Plus } from "lucide-react";
import { useMutation, useQuery } from "react-query";
import {allScreen} from  "../../api/getAllScreens"
import Loading from "../../components/Error/Loading"
import Oops from "../../components/Error/Oops"
import Screens from "../../components/Mgr/Screens"
import {createScreen} from "../../api/createScreen"

const MgrHome = () => {
    const [screenName, setScreenName] = useState("");
    const [numSeats, setNumSeats] = useState("");

    const jsondata = localStorage.getItem('yourKey')
    let id:string = "1";

    if(jsondata){
        const data = JSON.parse(jsondata)
        id = data.id
    }


    const {isError,isFetching,data,refetch} = useQuery({
        queryKey:['getOneMovie','Movies'],
        queryFn: async () => {
            if(id){
                return await allScreen(id)
            }
      }
    })

    const {mutate:addingScreenMutate,isLoading} = useMutation({
        mutationFn: async () => {
            if(id){
                console.log("check")
                let bookingStatus = await createScreen(id,{name:screenName,nums:numSeats})
                if(bookingStatus){
                    refetch()
                }
                
            }
        }
    })

    const handleSave = () => {
        console.log("Screen Name:", screenName);
        console.log("Number of Seats:", numSeats);
        addingScreenMutate()


    };

    if(isFetching){
        return(<div className="bg-light w-[100vw] h-[100vh] text-white text-center">
            <Loading/>
        </div>
        )
        }
          
        if(isError){
            return(<Oops/>)
        }

        console.log(data)

        if(data){
            return (
                <div className="w-[100vw] min-h-[100vh] text-center bg-black">
                    <h1 className="font-extrabold text-white">DASHBOARD</h1><br/>
                    
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">ADD<Plus/></Button>
                        </DialogTrigger>
                        
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add Screen</DialogTitle>
                                <DialogDescription>
                                    Enter the details for the new screen.
                                </DialogDescription>
                            </DialogHeader>
                            
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Eg: Screen 1"
                                        className="col-span-3"
                                        value={screenName}
                                        onChange={(e) => setScreenName(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="seats" className="text-right">No. of Seats</Label>
                                    <Input
                                        id="seats"
                                        placeholder="Eg: 60"
                                        className="col-span-3"
                                        type="number"
                                        value={numSeats}
                                        onChange={(e) => setNumSeats(e.target.value)}
                                    />
                                </div>
                            </div>
                            
                            <DialogFooter>
                                {isLoading?<Button className="hover:text-white" disabled>Loading
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>:<Button type="submit" onClick={handleSave} className="hover:text-white">Save changes</Button>}
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <div className=" flex flex-wrap items-center mt-[15vh] justify-around gap-[5.5vw]">
                        {data.map(({number_of_seats,screen_id,screen_name}:any) => <Screens key={screen_id} id={screen_id} nums={number_of_seats} name={screen_name}/>)}
                    </div>
                </div>
            );
        }
};

export default MgrHome;