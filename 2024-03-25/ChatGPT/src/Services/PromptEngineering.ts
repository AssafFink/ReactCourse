class PromptEngineering {

	public getPrompt(tech: string, num: number): string {
        const prompt = `
            Please write me ${num} job interview questions
            in the field of programming technology,
            and in sub-field of ${tech}.
        `;
        return prompt;
    }
    
}

export const promptEngineering = new PromptEngineering();
