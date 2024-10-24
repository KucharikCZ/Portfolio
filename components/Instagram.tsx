import {useState, useEffect} from "react";
import axios from "axios";
import AlertMsg from "./Alert";
import { convertDate } from "@/utils/date";

type InstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
  like_count: string;
}

export default function InstagramFeed(){
  const [data, setData] = useState<InstagramPost[]>([]);

  useEffect(() => {
    async function getInstagramFeed(){
      try{
        const res = await axios.get("/api/instagram");
  
        if(res.status === 200){
          setData(res.data.posts);
        }else{
          AlertMsg("error", res.data.details.message);
        }
      }catch(e){
        console.error(e);
        AlertMsg("error", "Nepodařilo se získat příspěvky z Instagramu!");
      }
  }

  getInstagramFeed();
  },[]);
  
  return(
    <div className="flex flex-wrap justify-center gap-6 mt-9">
      {data.map(post => (
        <div key={post.id} className="w-[400px] p-4 bg-secondary shadow-standard rounded-standard transition ease-in-out duration-[.35s] hover:-translate-y-2">
          <img src={post.media_url} alt="Příspěvek z Instagramu" className="w-full rounded-standard"/>
          
          <div className="mt-4">
            <p className="text-center text-slate-800 mb-4">{post.caption}</p>
            <p>{post.like_count} ❤️</p>
            <p className="text-center bg-amber-400/30 text-amber-400 py-2 px-6 font-semibold rounded-standard">{convertDate(post.timestamp)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}