export const StickyProvider: React.Provider<any>;
export default useSticky;
import React from "react";
declare function useSticky({ id, heightMap }: {
    id: any;
    heightMap: any;
}): {
    css: {
        zIndex: any;
        position: string;
    };
};
