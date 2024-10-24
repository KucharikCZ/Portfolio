import Swal,{SweetAlertIcon} from "sweetalert2";

export default function AlertMsg(type:SweetAlertIcon,message:string){
    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });

    Toast.fire({
        icon: type,
        title: message
    });
}