import {Ellipse} from '@/components/atoms';
import './_drawer.scss';

export function Drawer(){
    return (
        <div className='drawer'>
            <span className='title'>Étagère 1</span>
            <div className='drawer-container'>
                <Ellipse bgColor='#9B1A30'/>
                <Ellipse bgColor='#FAE7C0'/>
                <Ellipse bgColor='#D18080'/>
                <Ellipse bgColor='#D4B98A'/>
                <Ellipse bgColor='#C6BBFF'/>
                <Ellipse bgColor='#F0F0F0' iconName='plus'/>
            </div>
        </div>
    );
}