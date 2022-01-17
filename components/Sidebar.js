import Image from "next/image";
import SidebarLink from "./SidebarLink";
import {HomeIcon} from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed ">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimationBird p-0 xl:ml-24">
        {/*<Image src="https://rb.gy/ogau5a" width={30} height={30}/>*/}
        <Image src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/172px-Twitter_bird_logo_2012.svg.png"
               width={30}
               height={25}/>
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home"
                     Icon={HomeIcon}
                     active/>
        <SidebarLink text="Explore"
                     Icon={HashtagIcon}/>
        <SidebarLink text="Notifications"
                     Icon={BellIcon}/>
        <SidebarLink text="Messages"
                     Icon={InboxIcon}/>
        <SidebarLink text="Bookmarks"
                     Icon={BookmarkIcon}/>
        <SidebarLink text="Lists"
                     Icon={ClipboardListIcon}/>
        <SidebarLink text="Profile"
                     Icon={UserIcon}/>
        <SidebarLink text="More"
                     Icon={DotsCircleHorizontalIcon}/>
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1D9BF0] text-white
       rounded-full w-56 h-[52px] text-lg font-bold shadow-md
       hover:bg-[#1a8cd8]">Tweet
      </button>
      <div className="flex items-center justify-center mt-[100px] hoverAnimation xl:ml-auto xl:-mr-5">
        <img src="https://yt3.ggpht.com/yti/APfAmoFlXWaR3khH4L4y1GK0sZDCEsfKJQjH2a3nA0IkTg=s88-c-k-c0x00ffffff-no-rj-mo"
             alt=""
             className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Sasha </h4>
          <p className="text-[#6e767d]">@SashaMelnikov</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  )
}

export default Sidebar