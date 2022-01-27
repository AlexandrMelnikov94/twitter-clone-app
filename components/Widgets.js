import {SearchIcon} from "@heroicons/react/outline";
import { Timeline, Follow } from 'react-twitter-widgets';


function Widgets() {
  return (

    <div className="hidden lg:inline ml-8 xl:w-[450] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 z-50 w-11/12
       xl:w9/12">
        <div className="flex items-center bg-gray-100 p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50"/>
          <input
            type="text"
            className="bg-transparent
            placeholder-gray-500 outline-none absolute inset-0 pl-11 pr-4 border
            border-transparent w-full focus:border-[#1d9bf0] rounded-full
            focus:bg-white focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="space-y-3 pt-2 bg-gray-100 rounded-xl w-11/12 xl:w9/12">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'TwitterDev'
          }}
          options={{
            // backgroundColor: 'yellow',
            // backgroundColor: 'black',
            height: '85vh'
          }}
        />
        <Follow

        />
      </div>
    </div>
  )
}

export default Widgets;