import axios from "axios";
import { appConfig } from "../Utils/AppConfig";

class ChatGptService {

    public async getCompletion(prompt: string): Promise<string> {

        const body = {
            model: "gpt-3.5-turbo",
            max_tokens: 2000,
            messages: [
                { role: "system", content: "You are a professional programmer" }, // personality
                { role: "user", content: prompt }
            ]
        };

        const options = {
            headers: {
                "Authorization": "Bearer " + appConfig.apiKey
            }
        };

        const response = await axios.post(appConfig.chatGptUrl, body, options);

        const completion = response.data.choices[0].message.content;

        return completion;
    }

}

export const chatGptService = new ChatGptService();
