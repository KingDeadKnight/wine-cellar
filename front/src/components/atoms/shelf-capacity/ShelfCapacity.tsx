import React from 'react';
import './_shelfcapacity.scss';

interface Props {
    current?: number;
    max: number;
}

export function ShelfCapacity({max, current = 0} : Props) {
    return (
        <div className='drawer-capacity'>
            <span><span className='current'>{current}</span> / {max}</span>
        </div>
    );
}