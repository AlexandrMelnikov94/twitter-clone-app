import Moment from "react-moment";
import {DotsHorizontalIcon} from "@heroicons/react/outline";

function Comment({id, comment}) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-100">
      <img src={comment?.userImg}
           alt=""
           className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="">
            <div className="inline-block group">
              <h4 className="text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span className="text-[#6e767d] ml-1.5 text-sm sm:text-[15px]">
                @{comment?.tag}
              </span>
              <span className="text-[#6e767d]">{" "}·{" "}</span>
            </div>
            <span className="text-[#6e767d] hover:underline text-sm sm:text-[15px]">
                <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
              </span>
            <p className="mt-0.5 max-w-lg text-[15px] sm:text-base">
              {comment?.comment}
            </p>
          </div>
          <div className="icon group flex-shrink-0">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment