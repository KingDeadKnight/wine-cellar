import './_button.scss';
import classnames from "clsx";
import {Icon} from "@/components/atoms";

interface Props {
    variant?: 'primary' | 'secondary',
    label?: string,
    iconName?: string
}

export function Button({variant = 'primary', label, iconName} : Props) {
    return (
        <div className={classnames('button', `button-${variant}`, iconName && 'icon')}>
            {!!label && label}
            {iconName && <Icon iconName={iconName} />}
        </div>
    );
}