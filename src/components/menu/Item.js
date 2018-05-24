import React from 'react';
import { NavLink } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item, match, openItem,activeItem,handleItemClick } = this.props;
        return (
            <NavLink className={`${item === activeItem ? 'landing_link' : ''} ${item === openItem ? 'open' : ''}`} to={{ pathname: match.path + (item.url ? item.url : '') }}  onClick={()=>handleItemClick(item)}>
                {item.name}
                {
                    item.submenu && item.submenu.length > 0 && (
                        <span className='arrow'></span>
                    )
                }
            </NavLink>
        );
    }
}
export default Item;