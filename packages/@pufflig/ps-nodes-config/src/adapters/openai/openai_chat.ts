import { NodeConfig } from "@pufflig/ps-types";
import { chatModels } from "./openai_models";

export const openaiChatConfig: NodeConfig = {
  name: "OpenAI (Chat)",
  description: "OpenAI Chat",
  tags: ["adapter", "chat"],
  parameters: [
    {
      id: "api_key",
      name: "API Key",
      type: "secret",
      description: "The API key for OpenAI",
      defaultValue: "${{SECRET:open_ai/api_key}}",
    },
  ],
  outputs: [
    {
      id: "message",
      name: "Message",
      description: "A message from OpenAI",
      type: "message",
      defaultValue: null,
    },
  ],
  inputs: [
    {
      id: "chat",
      name: "Chat",
      description: "The chat to send to OpenAI",
      type: "chat",
      defaultValue: [],
    },
    {
      id: "model",
      name: "Model",
      description: "The model to use",
      type: "model",
      definition: chatModels,
      defaultValue: {
        modelId: "gpt-3.5-turbo",
        parameters: {},
      },
    },
  ],
};
