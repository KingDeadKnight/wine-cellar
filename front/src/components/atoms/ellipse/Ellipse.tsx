import classnames from 'clsx'
import {Icon} from '../icon';
import './_ellipse.scss';

interface Props {
    bgColor?: string;
    className?: string;
    iconName?: string;
}

export function Ellipse({ className, iconName, bgColor = '#f0f0f0' }: Props) {
    return (
        <div className={classnames('ellipse', !!className && className, iconName && 'ellipse-icon' )} style={{backgroundColor: bgColor}}>
            {iconName &&
                <Icon iconName={iconName}/>
            }
        </div>
    );
}