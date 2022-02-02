import Image from "next/image";
import { signIn } from "next-auth/react";


function Login({providers}) {
  return (<div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/172px-Twitter_bird_logo_2012.svg.png"
        width={170}
        height={150}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden
              relative group cursor-pointer border-2 font-medium
              border-[#1d9bf0] text-[#1d9bf0] text-white"
                    onClick={() => signIn(provider.id, {callbackUrl: "/"})}
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1d9bf0] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"/>
              <span className="relative text-[#1d9bf0] transition duration-300 group-hover:text-white ease">Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Login;