import './_icons.scss';

interface Props {
    iconName: string;
}

export function Icon({iconName} : Props) {
    return (
        <i className={`icon icon-${iconName}`} aria-hidden={'true'}></i>
    );
}