import toast from "react-hot-toast";

export default function AlertMsg(type:string,message:string){
    switch(type){
        case "success":
            toast.success(message);
            return;
        case "error":
            toast.error(message);
            return;
    }
}