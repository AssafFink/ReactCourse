import "./Home.css";
import imageSource from "../../../Assets/Images/home.png";

export function Home(): JSX.Element {
    return (
        <div className="Home">
			<img src={imageSource} />
        </div>
    );
}
