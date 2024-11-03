import { Review } from "Types/Movie"

const ReviewCard = ({review,rating,username}:Review) => {
    return(
        <div className="bg-black text-white border border-light p-4 rounded-md text-start w-[48%]">
            <p className="font-semibold text-xl">{username}</p>
            <p className="font-light">{review}</p>
        </div>
    )
}

export default ReviewCard