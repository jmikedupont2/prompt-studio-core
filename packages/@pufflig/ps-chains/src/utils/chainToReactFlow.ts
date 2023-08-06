import { Edge, Node } from "reactflow";
import { Chain } from "../types";

interface ReactFlowData {
  nodes: Node[];
  edges: Edge[];
}

/**
 * convert a chain to be used in react flow
 * @param chain
 */
export const chainToReactFlow = (chain: Chain): ReactFlowData => {
  const nodes: Node[] = chain.definition.nodes.map((node) => {
    const nodeData: Node = {
      id: node.id,
      type: node.type,
      position: chain.state[node.id].editor.position || { x: 0, y: 0 },
      data: {
        label: node.name,
        description: node.description,
        inputs: node.inputs,
        outputs: node.outputs,
        parameters: node.parameters,
      },
    };
    return nodeData;
  });

  const edges: Edge[] = chain.definition.edges.map((edge) => {
    const edgeData: Edge = {
      id: edge.id,
      source: edge.source,
      target: edge.target,
      sourceHandle: edge.source_handle,
      targetHandle: edge.target_handle,
    };
    return edgeData;
  });

  return {
    nodes,
    edges,
  };
};
