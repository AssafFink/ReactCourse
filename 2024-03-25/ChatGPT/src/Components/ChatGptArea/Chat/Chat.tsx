import { useForm } from "react-hook-form";
import { ChatModel } from "../../../Models/ChatModel";
import { chatGptService } from "../../../Services/ChatGptService";
import { promptEngineering } from "../../../Services/PromptEngineering";
import "./Chat.css";
import { useState } from "react";

export function Chat(): JSX.Element {

    const {register, handleSubmit} = useForm<ChatModel>();
    const [completion, setCompletion] = useState<string>();

    function send(chat: ChatModel) {
        const prompt = promptEngineering.getPrompt(chat.tech, chat.num);
        alert(prompt);
        chatGptService.getCompletion(prompt)
            .then(completion => setCompletion(completion))
            .catch(err => alert(err.message));
    }

    return (
        <div className="Chat">

			<form onSubmit={handleSubmit(send)}>
                
                <label>Job Interview Subject:</label>
                <input type="text" {...register("tech")} />

                <label>Number of Questions: </label>
                <input type="number" min="1" max="20" {...register("num")} />

                <button>Get Questions</button>

            </form>

            <div>
                {completion}
            </div>
        </div>
    );
}
