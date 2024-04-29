import React from 'react'

const nodeTypes = {
  BlockNode: ({ data, isConnectable, id }) => {
    // console.log(data);
    return (
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <HoverCard.Dropdown style={{ pointerEvents: 'none' }}>
            <h6>styles</h6>
            {Object.keys(data.styles).map((styleName) => (
              <p>
                {styleName} : {data.styles[styleName]}
              </p>
            ))}
            <h6>Classes</h6>
            {data.classes}
            {/* {data.classes.split(' ').map((className) => (
              <p>
              {className}
              </p>
            ))} */}
            <h6>Ids</h6>
            {data.ids}
            {/* {data.id.split(' ').map((idName) => (
              <p>
              {idName}
              </p>
            ))} */}

          </HoverCard.Dropdown>

          <p className={DomClasses.nodeTagName}>{data.label}</p>
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
        </HoverCard.Target>
      </HoverCard>
    );
  },
};

const WireFrameEditor = () => {
  return (
    <div>WireFrameEditor</div>
  )
}

export default WireFrameEditor;