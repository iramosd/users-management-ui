import Swal from 'sweetalert2';

export function useSwalCustom() {

    const swalAlert = (message, customTitle = 'An error has ocurred', customIcon = 'warning') => {
        swalButtons.fire({
            title: customTitle,
            text: message,
            icon: customIcon,
        })
    }

    const swalButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn',
            cancelButton: 'btn btn_danger'
        },
        buttonsStyling: false
    });

    const swalConfirm = (modal, callbackFunction) => {
        
        swalButtons.fire({
            title: modal.title,
            text: modal.text,
            icon: modal.icon,
            showCancelButton: true,
            confirmButtonText: modal.confirmButtonText,
            denyButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                callbackFunction();
                swalButtons.fire(
                    modal.successTitle,
                    modal.successText,
                  'success');
            }
        })
    }

    return {
        swalAlert,
        swalConfirm,
        swalButtons
    }
}
