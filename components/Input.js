import {useState} from "react";

function Input() {
  const [input, setInput] = useState("");

  return (
    <div className={`border-b border-grey-100 p-3 flex space-x-3 overflow-y-scroll truncate`}>
      <img src="https://yt3.ggpht.com/yti/APfAmoFlXWaR3khH4L4y1GK0sZDCEsfKJQjH2a3nA0IkTg=s88-c-k-c0x00ffffff-no-rj-mo"
           alt=""
           className="h-11 w-11 rounded-full cursor-pointer"/>
      <div className="w-full divide-y divide-gray-100">
        <div className={``}>
          <textarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-lg tracking-wind w-full
            min-h-[50px] truncate"/>
        </div>
      </div>
    </div>

  )
}

export default Input