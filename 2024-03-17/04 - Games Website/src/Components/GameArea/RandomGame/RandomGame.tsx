import "./RandomGame.css";
import src1 from "../../../Assets/Images/game1.jpg";
import src2 from "../../../Assets/Images/game2.jpg";
import src3 from "../../../Assets/Images/game3.jpg";
import src4 from "../../../Assets/Images/game4.jpg";
import src5 from "../../../Assets/Images/game5.jpg";
import { useEffect, useState } from "react";

export function RandomGame(): JSX.Element {

    const arr = [src1, src2, src3, src4, src5];
    const [index, setIndex] = useState<number>(0); // 0 --> initial value.

    useEffect(() => {
        const timerId = setInterval(() => {
            const index = Math.floor(Math.random() * arr.length);
            setIndex(index);
        }, 3000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="RandomGame">
            <img src={arr[index]} />
        </div>
    );
}
