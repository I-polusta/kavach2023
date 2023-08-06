// import React, { useCallback } from 'react';
// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
// } from 'reactflow';

// import 'reactflow/dist/style.css';

// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

// export default function BlockChainPage() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//       >
//         <Controls />
//         <MiniMap />
//         <Background variant="dots" gap={12} size={1} />
//       </ReactFlow>
//     </div>
//   );
// }

// import React from 'react';
// import ReactFlow from 'reactflow';

// const initialElements = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'Transaction' },
//     position: { x: 250, y: 5 },
//   },
//   {
//     id: '2',
//     type: 'default',
//     data: { label: 'Block' },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: '3',
//     type: 'output',
//     data: { label: 'Confirmation' },
//     position: { x: 250, y: 200 },
//   },
//   {
//     id: 'e1-2',
//     source: '1',
//     target: '2',
//     label: 'included in',
//   },
//   {
//     id: 'e2-3',
//     source: '2',
//     target: '3',
//     label: 'confirmed by',
//   },
// ];

// const BlockChainPage = () => {
//   return (
//     <div style={{ height: 300, width: 300 }}>
//       <ReactFlow elements={initialElements} />
//     </div>
//   );
// };

// export default BlockChainPage;


import React, { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Transaction' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'default',
    data: { label: 'Block' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Confirmation' },
    position: { x: 250, y: 200 },
  },
];

export default function BlockChainPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
