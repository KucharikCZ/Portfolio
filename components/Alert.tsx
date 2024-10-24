import Swal,{SweetAlertIcon} from "sweetalert2";
import "animate.css";

export default function AlertMsg(type:SweetAlertIcon,message:string){
    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showClass: {
            popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp"
        }
    });

    Toast.fire({
        icon: type,
        title: message
    });
}