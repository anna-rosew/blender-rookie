import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export default function Flow() {
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}