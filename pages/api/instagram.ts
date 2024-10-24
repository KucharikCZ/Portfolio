import axios from "axios";
import type {NextApiRequest, NextApiResponse} from "next";
import NodeCache from "node-cache";

const cache = new NodeCache({
    stdTTL:300
}); //5minut
const cacheKey = "Instagram";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === "GET"){
        try{
            const cached = cache.get(cacheKey);

            if(cached){
                res.status(200).json({
                    details:{
                        status: "success",
                        statusCode: 200,
                        cached: true
                    },
                    posts: cached
                });
            }else{
                const respon = await axios.get("https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=IGQWRNNWdmV3BpOFVBWlNOa2wyMG92M1pSUGIwUjYzNUQxZAV9xQlJvLXVDY3JlWlMzOV9rUHdZAZAVc3d1ZAucXVuQmI1NDUwVmM1S0FtYnBWd1RsWTRGbkRNeDdJRlRaTERZAY2pUWEh5clU3UDRNVFloV0FqWVdyZADQZD");
    
                if(respon.status === 200){
                    cache.set(cacheKey, respon.data.data);
                    
                    res.status(200).json({
                        details:{
                            status: "success",
                            statusCode: 200,
                            cached: false
                        },
                        posts: respon.data.data
                    });
                }
            }
        }catch(e){
            console.log(e);
            res.status(500).json({
                details:{
                    status: "internal server error",
                    statusCode: 500,
                    message: "Nepodařilo se získat příspěvky z instagram api..."
                }
            });
        }
    }
}