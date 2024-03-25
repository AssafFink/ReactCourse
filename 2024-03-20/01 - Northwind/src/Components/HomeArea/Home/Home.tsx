import "./Home.css";
import imageSource from "../../../Assets/Images/home.png";
import { useEffect } from "react";
import { useTitle } from "../../../Utils/UseTitle";

export function Home(): JSX.Element {

    useTitle("Northwind | Home"); // Custom Hook.

    return (
        <div className="Home">
            <img src={imageSource} />
        </div>
    );
}
