import { default_completion_model, completion_models } from "@pufflig/ps-models";
import { NodeConfig } from "@pufflig/ps-types";

export const llmCompletionNodeType = "adapter/llm_completion" as const;

export const llmCompletionConfig: NodeConfig = {
  name: "Instruction",
  description: "Generate a completion using an LLM.",
  status: "experimental",
  tags: ["adapter", "text"],
  globals: [],
  execution: {
    inputs: [
      {
        id: "exec:input",
      },
    ],
    outputs: [
      {
        id: "exec:output",
        name: "Completed",
      },
    ],
  },
  outputs: [
    {
      id: "completion",
      name: "Completion",
      description: "Text generated by the LLM.",
      type: "text",
      defaultValue: "",
    },
  ],
  inputs: [
    {
      id: "prompt",
      name: "Prompt",
      description: "The prompt to send to the LLM.",
      type: "text",
      defaultValue: "",
    },
    {
      id: "model",
      name: "Model",
      description: "The model to use",
      type: "model",
      definition: completion_models,
      defaultValue: {
        modelId: default_completion_model,
        parameters: {},
      },
    },
  ],
};
