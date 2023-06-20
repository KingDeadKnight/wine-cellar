import {Ellipse, Icon} from "@/components/atoms";

interface Props {
    bgColor: string;
    iconName?: string;
}

export function IconEllipse ({ bgColor, iconName }: Props) {
    return (
        <Ellipse className={'ellipse-icon'} bgColor={bgColor}>
            {iconName && <Icon iconName={iconName}/>}
        </Ellipse>
    );
}