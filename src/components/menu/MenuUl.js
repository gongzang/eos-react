import React from 'react';
import Item from './Item';

class MenuUl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match, className,menuList,activeItem,openItem,handleItemClick } = this.props;

        return (

            <nav className={className}>
                {

                    menuList && menuList.map(item => {
                        return (
                            <div>
                                <Item item={item} openItem={openItem} activeItem={activeItem} match={match} handleItemClick={handleItemClick}>
                                </Item>
                                {
                                    item.submenu && item.submenu.length > 0 && (
                                        <MenuUl className={`sub-menu length${item.submenu.length} ${item === openItem ? 'in' : ''}`} 
                                            menuList={item.submenu} 
                                            openItem={openItem} 
                                            activeItem={activeItem}
                                            handleItemClick={handleItemClick}
                                            match={match} 
                                            />
                                    )
                                }
                            </div>
                            )
                                
                    })
                }
            </nav>
        );
    }
}
export default MenuUl;