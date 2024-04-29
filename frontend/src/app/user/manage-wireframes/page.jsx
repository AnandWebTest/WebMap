import React, { useEffect, useState } from 'react'

const ManageWireframes = () => {

    const [wireframeList, setWireframeList] = useState([]);

    const fetchWireframes = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/wireframe/getall`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWireframeList(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
      fetchWireframes();
    }, [])
    

  return (
    <div>ManageWireframes</div>
  )
}

export default ManageWireframes;