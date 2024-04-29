'use client';
import React, { useCallback } from 'react';
import ReactFlow, {
    useNodesState, useEdgesState, addEdge, MiniMap,
    Controls,
    Background,
    Handle,
    Position,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' }, type: "BlockNode", isConnectable: true },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' }, type: "BlockNode", isConnectable: true },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = {
    BlockNode: ({ isConnectable, id }) => {
        // console.log(data);
        return (
            <div width={800} className='shadow-lg'>
                <div className='w-full bg-white p-5 rounded-lg border-2 border-red-700'>
                    <h2>Wireframe Block</h2>
                </div>
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

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (

        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#888' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}