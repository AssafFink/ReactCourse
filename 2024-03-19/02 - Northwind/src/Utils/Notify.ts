import { Notyf } from "notyf";

class Notify {

    private notyf = new Notyf({
        duration: 4000,
        position: { x: "center", y: "top" },
        dismissible: true
    });

    public success(msg: string): void {
        this.notyf.success(msg);
    }

    public error(err: any): void {
        const msg = this.extractMessage(err);
        this.notyf.error(msg);
    }

    private extractMessage(err: any): string {

        // On string error:
        if(typeof err === "string") return err;

        // On axios error:
        if(typeof err?.response?.data === "string") return err.response.data;

        // On JavaScript error: 
        if(typeof err?.message === "string") return err.message;

        // Unknown error: 
        return "Some error, please try again."; // JIC
    }
}

export const notify = new Notify();
