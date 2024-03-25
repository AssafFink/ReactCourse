import { Chat } from "../../ChatGptArea/Chat/Chat";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">

			<h1>Chat GPT for Programming Job Interviews</h1>
            <hr />

            <Chat />

        </div>
    );
}
