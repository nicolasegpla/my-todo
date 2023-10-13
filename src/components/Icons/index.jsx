import React from 'react';
import { ReactComponent as Check } from './check-lg.svg'
import { ReactComponent as Delete } from './x-circle.svg'


const iconTypes = {
    'check': (color) => <Check className='icon-svg-check' fill={color} />,
    'delete': (color) => <Delete className='icon-svg-delete' fill={color} />
}
function Icons({ type, color, onClick }) {

    return (
        <span onClick={onClick} className="span">
            {iconTypes[type](color)}
        </span>
    )
}

export { Icons }