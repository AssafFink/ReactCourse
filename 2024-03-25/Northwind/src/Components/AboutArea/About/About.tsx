import { TotalCategories } from "../../CategoryArea/TotalCategories/TotalCategories";
import { Tune } from "../Tune/Tune";
import "./About.css";

export default function About(): JSX.Element {
    return (
        <div className="About">

			<Tune />

            <TotalCategories />
            
        </div>
    );
}
