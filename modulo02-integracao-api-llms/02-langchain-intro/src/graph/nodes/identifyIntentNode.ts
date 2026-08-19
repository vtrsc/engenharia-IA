import { type GraphState } from "./graph.ts";

export function identifyIntent(state: GraphState): GraphState {
    const message = state.messages.at(-1);

    console.log("MESSAGE:", message);
    console.log("CONTENT:", message?.content);

    const input = message?.content?.toString() ?? "";

    console.log("INPUT:", JSON.stringify(input));

    const inputLower = input.toLowerCase();

    console.log("INPUT LOWER:", JSON.stringify(inputLower));

    let command: GraphState['command'] = 'unknown';

    if (inputLower.includes('upper')) {
        command = 'uppercase';
    } else if (inputLower.includes('lower')) {
        command = 'lowercase';
    }

    console.log("COMMAND:", command);

    return {
        ...state,
        command,
        output: input
    };
}