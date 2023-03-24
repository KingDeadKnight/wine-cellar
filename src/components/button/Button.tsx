import { MouseEventHandler } from "react";

interface Props {
    label: string;
    onClick?: MouseEventHandler<any>;
    secondary?: boolean;
    submit?: boolean;
}

export function Button ({ label, onClick, secondary, submit }: Props) {
    return (
        <>
            {secondary && (
                <button
                    type={"button"}
                    className={`w-full bg-white text-primary px-2 py-1 hover:bg-gray-100 transition duration-100 border border-secondary`}
                    onClick={onClick}
                >
                    {label}
                </button>
            )}
            {!secondary && (
                <button
                    type={submit ? "submit" : "button"}
                    className={`w-full bg-primary text-white px-2 py-1 hover:bg-secondary transition duration-100 border border-secondary`}
                    onClick={onClick}
                >
                    {label}
                </button>
            )}
        </>
    );
};