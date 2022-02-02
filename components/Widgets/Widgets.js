import {SearchIcon} from "@heroicons/react/outline";

function Widgets() {
  return (

    <div className="hidden lg:inline ml-8 xl:w-[450] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 z-50 w-11/12
       xl:w9/12">
        <div className="flex items-center bg-gray-100 p-3 w-[250px] rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50"/>
          <input
            type="text"
            className="bg-transparent
            placeholder-gray-500 outline-none absolute inset-0 pl-11 pr-4 border
            border-transparent w-full"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  )
}

export default Widgets;