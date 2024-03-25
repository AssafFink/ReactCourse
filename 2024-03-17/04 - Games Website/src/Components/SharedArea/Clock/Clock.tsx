import { useEffect, useState } from "react";
import "./Clock.css";

export function Clock(): JSX.Element {

    const [time, setTime] = useState<string>();

    useEffect(() => {

        const timerId = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
            console.log(now.toLocaleTimeString());
        }, 1000);

        // Return a function which will be invoked when component destory (Unmount):
        return () => {
            clearInterval(timerId);
        };

    }, []); // [] --> Dependencies

    return (
        <div className="Clock">
            <span>{time}</span>
        </div>
    );
}
