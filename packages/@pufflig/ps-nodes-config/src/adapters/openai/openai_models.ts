import { ModelDefinition } from "@pufflig/ps-types";

export const chatModels: ModelDefinition = {
  "gpt-3.5-turbo": {
    modelId: "gpt-3.5-turbo",
    parameters: [
      {
        id: "temperature",
        type: "number",
        name: "Temperature",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 0.4,
        description:
          "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive. Higher temperature results in more random completions.",
      },
      {
        id: "max_tokens",
        type: "number",
        name: "Maximum Length",
        max: 2048,
        min: 1,
        step: 20,
        defaultValue: 124,
        description: "The maximum number of tokens to generate.",
      },
      {
        id: "top_p",
        type: "number",
        name: "Top P",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 1,
        description:
          "Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.",
      },
      {
        id: "frequency_penalty",
        type: "number",
        name: "Frequency penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description:
          "How much to penalize new tokens based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim.",
      },
      {
        id: "presence_penalty",
        type: "number",
        name: "Presence penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description: "How much to penalize new tokens based on whether they appear in the text so far.",
      },
    ],
  },
  "gpt-3.5-turbo-16k": {
    modelId: "gpt-3.5-turbo-16k",
    parameters: [
      {
        id: "temperature",
        type: "number",
        name: "Temperature",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 0.4,
        description:
          "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive. Higher temperature results in more random completions.",
      },
      {
        id: "max_tokens",
        type: "number",
        name: "Maximum Length",
        max: 16384,
        min: 1,
        step: 20,
        defaultValue: 2048,
        description: "The maximum number of tokens to generate.",
      },
      {
        id: "top_p",
        type: "number",
        name: "Top P",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 1,
        description:
          "Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.",
      },
      {
        id: "frequency_penalty",
        type: "number",
        name: "Frequency penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description:
          "How much to penalize new tokens based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim.",
      },
      {
        id: "presence_penalty",
        type: "number",
        name: "Presence penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description: "How much to penalize new tokens based on whether they appear in the text so far.",
      },
    ],
  },
  "gpt-4": {
    modelId: "gpt-4",
    parameters: [
      {
        id: "temperature",
        type: "number",
        name: "Temperature",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 0.4,
        description:
          "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive. Higher temperature results in more random completions.",
      },
      {
        id: "max_tokens",
        type: "number",
        name: "Maximum Length",
        max: 8192,
        min: 1,
        step: 20,
        defaultValue: 2048,
        description: "The maximum number of tokens to generate.",
      },
      {
        id: "top_p",
        type: "number",
        name: "Top P",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 1,
        description:
          "Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.",
      },
      {
        id: "frequency_penalty",
        type: "number",
        name: "Frequency penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description:
          "How much to penalize new tokens based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim.",
      },
      {
        id: "presence_penalty",
        type: "number",
        name: "Presence penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description: "How much to penalize new tokens based on whether they appear in the text so far.",
      },
    ],
  },
  "gpt-4-32k": {
    modelId: "gpt-4-32k",
    parameters: [
      {
        id: "temperature",
        type: "number",
        name: "Temperature",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 0.4,
        description:
          "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive. Higher temperature results in more random completions.",
      },
      {
        id: "max_tokens",
        type: "number",
        name: "Maximum Length",
        max: 32768,
        min: 1,
        step: 20,
        defaultValue: 2048,
        description: "The maximum number of tokens to generate.",
      },
      {
        id: "top_p",
        type: "number",
        name: "Top P",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 1,
        description:
          "Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.",
      },
      {
        id: "frequency_penalty",
        type: "number",
        name: "Frequency penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description:
          "How much to penalize new tokens based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim.",
      },
      {
        id: "presence_penalty",
        type: "number",
        name: "Presence penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description: "How much to penalize new tokens based on whether they appear in the text so far.",
      },
    ],
  },
};

export const completionModels: ModelDefinition = {
  "text-ada-001": {
    modelId: "text-ada-001",
    parameters: [
      {
        id: "temperature",
        type: "number",
        name: "Temperature",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 0.4,
        description:
          "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive. Higher temperature results in more random completions.",
      },
      {
        id: "max_tokens",
        type: "number",
        name: "Maximum Length",
        max: 2048,
        min: 1,
        step: 20,
        defaultValue: 124,
        description: "The maximum number of tokens to generate.",
      },
      {
        id: "top_p",
        type: "number",
        name: "Top P",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 1,
        description:
          "Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.",
      },
      {
        id: "frequency_penalty",
        type: "number",
        name: "Frequency penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description:
          "How much to penalize new tokens based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim.",
      },
      {
        id: "presence_penalty",
        type: "number",
        name: "Presence penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description: "How much to penalize new tokens based on whether they appear in the text so far.",
      },
    ],
  },
  "text-babbage-001": {
    modelId: "text-babbage-001",
    parameters: [
      {
        id: "temperature",
        type: "number",
        name: "Temperature",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 0.4,
        description:
          "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive. Higher temperature results in more random completions.",
      },
      {
        id: "max_tokens",
        type: "number",
        name: "Maximum Length",
        max: 2048,
        min: 1,
        step: 20,
        defaultValue: 124,
        description: "The maximum number of tokens to generate.",
      },
      {
        id: "top_p",
        type: "number",
        name: "Top P",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 1,
        description:
          "Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.",
      },
      {
        id: "frequency_penalty",
        type: "number",
        name: "Frequency penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description:
          "How much to penalize new tokens based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim.",
      },
      {
        id: "presence_penalty",
        type: "number",
        name: "Presence penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description: "How much to penalize new tokens based on whether they appear in the text so far.",
      },
    ],
  },
  "text-curie-001": {
    modelId: "text-curie-001",
    parameters: [
      {
        id: "temperature",
        type: "number",
        name: "Temperature",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 0.4,
        description:
          "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive. Higher temperature results in more random completions.",
      },
      {
        id: "max_tokens",
        type: "number",
        name: "Maximum Length",
        max: 2048,
        min: 1,
        step: 20,
        defaultValue: 124,
        description: "The maximum number of tokens to generate.",
      },
      {
        id: "top_p",
        type: "number",
        name: "Top P",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 1,
        description:
          "Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.",
      },
      {
        id: "frequency_penalty",
        type: "number",
        name: "Frequency penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description:
          "How much to penalize new tokens based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim.",
      },
      {
        id: "presence_penalty",
        type: "number",
        name: "Presence penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description: "How much to penalize new tokens based on whether they appear in the text so far.",
      },
    ],
  },
  "text-davinci-003": {
    modelId: "text-davinci-003",
    parameters: [
      {
        id: "temperature",
        type: "number",
        name: "Temperature",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 0.4,
        description:
          "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive. Higher temperature results in more random completions.",
      },
      {
        id: "max_tokens",
        type: "number",
        name: "Maximum Length",
        max: 2048,
        min: 1,
        step: 20,
        defaultValue: 124,
        description: "The maximum number of tokens to generate.",
      },
      {
        id: "top_p",
        type: "number",
        name: "Top P",
        max: 1,
        min: 0,
        step: 0.1,
        defaultValue: 1,
        description:
          "Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.",
      },
      {
        id: "frequency_penalty",
        type: "number",
        name: "Frequency penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description:
          "How much to penalize new tokens based on their existing frequency in the text so far. Decreases the model's likelihood to repeat the same line verbatim.",
      },
      {
        id: "presence_penalty",
        type: "number",
        name: "Presence penalty",
        max: 2,
        min: 0,
        step: 0.01,
        defaultValue: 0,
        description: "How much to penalize new tokens based on whether they appear in the text so far.",
      },
    ],
  },
};

export const embeddingModels: ModelDefinition = {
  "text-embedding-ada-002": {
    modelId: "text-embedding-ada-002",
    parameters: [],
  },
};

export type OpenAICompletionModels = keyof typeof completionModels;
export type OpenAIChatModels = keyof typeof chatModels;
export type OpenAIEmbeddingModels = keyof typeof embeddingModels;