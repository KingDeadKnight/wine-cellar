import classnames from 'classnames'
import {Icon} from '@/components/atoms';
import './_ellipse.scss';

interface Props {
    bgColor?: string;
    className?: string;
    iconName?: string;
}

export function Ellipse ({ bgColor = '#f0f0f0', className, iconName }: Props) {
    return (
        <div className={classnames('ellipse', !!className && className, iconName && 'ellipse-icon' )} style={{backgroundColor: bgColor}}>
            {iconName &&
                <Icon iconName={iconName}/>
            }
        </div>
    );
}