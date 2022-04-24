
import { Notyf } from "notyf";

class Notify {
    notification = new Notyf({ duration: 2000, position: { x: "center", y: "bottom", }, dismissible: true, ripple: true });

    success(message) {
        this.notification.success(message);
    }

    error(message) {
        this.notification.error(message);
    }
}

const notify = new Notify();

export default notify;