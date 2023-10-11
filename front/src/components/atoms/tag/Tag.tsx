import {ReactNode} from 'react';
import './_tag.scss';

interface Props {
    label?: string;
    children?: ReactNode;
}

export function Tag({label, children} : Props) {
    return (
        <div className='tag'>
            {!children && label}
            {children && children}
        </div>
    );
}