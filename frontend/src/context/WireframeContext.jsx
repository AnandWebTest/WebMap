'use client';
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const WireframeContext = createContext();

export const WireframeProvider = ({children}) => {
    
    const [selWireframe, setSelWireframe] = useState(null);

    return <WireframeContext.Provider value={{}}>
        {children}
    </WireframeContext.Provider>
}

const useWireframeContext = () => useContext(WireframeContext);
export default useWireframeContext;