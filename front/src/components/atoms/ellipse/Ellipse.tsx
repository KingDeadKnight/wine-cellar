import {ReactNode} from "react";

interface Props {
    bgColor?: string;
    children?: ReactNode;
    className?: string;
}

export function Ellipse ({ bgColor = "#f0f0f0", className = "", children }: Props) {
    return (
        <div className={`${className} ellipse`} style={{backgroundColor: bgColor}}>
            {children != undefined && children}
        </div>
    );
}