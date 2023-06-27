import React from "react";

type CommentContextType = {
    onChange: (value:string) => void;
}

export const responseContext = React.createContext<CommentContextType>({
    onChange: () => {},
});