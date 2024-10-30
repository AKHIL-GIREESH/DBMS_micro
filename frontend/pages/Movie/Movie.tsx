import { useParams } from "react-router"
import Titanic from "../../src/assets/everyNightInMyDreams.jpg"
import { Button } from "@/components/ui/button"

const Movie = () => {
    const {id} = useParams()
    return(
        <div className=" text-center ml-12 mr-12">
            <div className="h-[50vh] w-[100%] ml-6 border border-black flex">
                <img src={Titanic} className="h-[100%]"/>
                <div className="mt-[5vh] border border-black ml-10">
                    <h1 className="font-extrabold">MOVIE {id}</h1>
                    <p>6.9<b>·</b>10</p>
                    <Button>Book Tickets</Button>
                </div>
            </div>
            <br/>
            <div className="flex flex-col items-center justify-center border border-black">
                <h1 className="font-extrabold">
                    TRAILER
                </h1>
                <br/>
                
                <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/watch?v=wjZofJX0v4M`}
                allowFullScreen
                title="YouTube video"
                ></iframe>
                <br/>
                <br/>
                <p className="font-medium">Lorem ipsum dolor sit amet. In nulla dolorem quo beatae quasi in rerum sapiente hic eligendi facilis qui amet ipsam et molestiae distinctio! Eum quia assumenda qui numquam debitis sed perferendis quas quo expedita consequatur eos quia asperiores.

Eum veniam natus et ipsum officiis vel accusamus tenetur eum odio delectus? Aut repellendus quia et officia voluptatem est eveniet laborum. Et dolore possimus qui officiis Quis aut omnis facilis aut cumque tempore aut quam architecto et eaque blanditiis hic dolores vitae.</p>
            </div>
            <br/>
            <div>
                <h1 className="font-extrabold">
                    REVIEWS
                </h1>
                <br/>
            </div>
        </div>
    )
}

export default Movie