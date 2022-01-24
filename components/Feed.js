import {SparklesIcon} from "@heroicons/react/outline";
import Input from "./Input";
import {useEffect, useState} from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { useSession } from "next-auth/react";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );


  return (
    <div className="flex-grow border-l border-r border-gray-200 max-w-2xl sm:ml-[73px]
     xl:ml-[370px]">
      <div className="bg-white flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b
       border-gray-100 opacity-[.98]">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center
        justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5"/>
        </div>
      </div>

      <Input/>
      <div className="pb-72">
        {posts.map(post => (
          <Post key={post.id} id={post.id} post={post.data()}/>
        ))}
      </div>
    </div>
  )
}

export default Feed