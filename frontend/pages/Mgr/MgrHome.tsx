import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const MgrHome = () => {
    // State variables for inputs
    const [screenName, setScreenName] = useState("");
    const [numSeats, setNumSeats] = useState("");

    const handleSave = () => {
        // Logic to handle saving the new screen
        console.log("Screen Name:", screenName);
        console.log("Number of Seats:", numSeats);
        // Add any API calls or validation here
    };

    return (
        <div className="w-[100vw] h-[100vh] text-center bg-black">
            <h1 className="font-extrabold text-white">DASHBOARD</h1>
            
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
                        <Button type="submit" onClick={handleSave}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default MgrHome;