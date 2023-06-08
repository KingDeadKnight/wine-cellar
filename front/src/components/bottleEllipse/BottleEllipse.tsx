import {ReactNode} from "react";

interface Props {
    bgColor: string;
    children: ReactNode;
}

export function BottleEllipse ({ bgColor, children }: Props) {
    return (
        <div className="ellipse" style={{backgroundColor: bgColor}}>
            {children != undefined && children}
        </div>
    );
}