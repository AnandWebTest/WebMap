'use client';
import React, { useCallback, useEffect } from 'react'
import ReactFlow, {
  Controls,
  Handle,
  MiniMap,
  Position,
  useEdgesState,
  useNodesState,
} from "reactflow";

const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const nodeTypes = {
  BlockNode: ({ isConnectable, id }) => {
    // console.log(data);
    return (
      <div width={280} className='shadow-lg'>

        jsgdjhs
        <Handle
          type="target"
          position={Position.Top}
          id={id + "handle1"}
          style={{ top: 0, background: "#555" }}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id={id + "handle2"}
          style={{ bottom: 0, background: "#555" }}
          isConnectable={isConnectable}
        />
      </div>
    );
  },
};

const WireFrameEditor = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);


  useEffect(() => {
    setNodes([
      {
        id: "6",
        type: "BlockNode",
        data: { nodeName: "document", id: "x1" },
        position: { x: -200, y: 400 },
        sourcePosition: "right",
      },
    ]);

    setEdges([
      {
        id: "num1i-num1",
        source: "1",
        target: "2",
        sourceHandle: "num1i",
        animated: true,
        style: { stroke: "#fff" },
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );

  return (
    <div>
      <ReactFlow
        style={{ width: '100%', height: '100vh', backgroundColor: initBgColor}}
        // className={classes.react_flow}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"

      >
        {/* <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "selectorNode") return bgColor;
            if (n.type === "output") return "#ff0072";
          }}
          nodeColor={(n) => {
            if (n.type === "selectorNode") return bgColor;
            return "#fff";
          }}
        /> */}
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default WireFrameEditor;