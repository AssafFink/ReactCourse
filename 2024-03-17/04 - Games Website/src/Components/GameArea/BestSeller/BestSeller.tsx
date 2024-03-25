import { SyntheticEvent, useState } from "react";
import "./BestSeller.css";

export function BestSeller(): JSX.Element {

    const [bestSeller, setBestSeller] = useState<string>();
    // bestSeller --> our state data.
    // setBestSeller --> a function for chaning the data and rerendering the component.

    function show(): void {
        setBestSeller("Amazing Games LTD"); // 1. Change the data, 2. Rerender the component
    }

    function showEmoji(args: SyntheticEvent) {
        const button = args.target as HTMLButtonElement;
        alert(button.innerText);
    }

    function showIcon(icon: string) {
        alert(icon);
    }

    return (
        <div className="BestSeller">
            <button onClick={show}>Show Best Seller</button>
            <span>Best Seller: {bestSeller}</span>
            <button onClick={showEmoji}>🎲</button>
            <button onClick={showEmoji}>🎯</button>
            <button onClick={showEmoji}>🏓</button>
            <button onClick={() => showIcon("🀄")}>🀄</button>
            <button onClick={() => showIcon("🏏")}>🏏</button>
        </div>
    );
}
