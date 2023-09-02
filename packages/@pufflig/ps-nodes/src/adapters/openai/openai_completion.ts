import { nodes } from "@pufflig/ps-nodes-config";
import { ModelValue, Node, ParamValueMap } from "@pufflig/ps-types";
import { Configuration, OpenAIApi } from "openai";

export const openaiCompletionNodeType = "adapter/openai_completion" as const;

export interface OpenAICompletionInput {
  api_key: string;
  prompt: string;
  model: ModelValue;
}

export interface OpenAICompletionOutput extends ParamValueMap {
  completion: string;
}

export const execute = async (input: OpenAICompletionInput) => {
  const { prompt, model, api_key } = input;
  const { modelId, parameters } = model;

  const configuration = new Configuration({ apiKey: api_key });
  const openai = new OpenAIApi(configuration);

  const params = { ...parameters, model: modelId };
  const completion = await openai.createCompletion({ prompt, ...params });

  const completionText = completion.data.choices[0].text || "";

  return {
    completion: completionText,
  };
};

export const openaiCompletion: Node<OpenAICompletionInput, OpenAICompletionOutput> = {
  ...nodes[openaiCompletionNodeType],
  execute,
};
