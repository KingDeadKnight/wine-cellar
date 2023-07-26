import React from 'react';
import './_shelfcapacity.scss';
import {Tag} from "@/components/atoms/tag/Tag";

interface Props {
    current?: number;
    max: number;
}

export function ShelfCapacity({max, current = 0} : Props) {
    return (
        <Tag>
            <span><span className='current'>{current}</span> / {max}</span>
        </Tag>
    );
}