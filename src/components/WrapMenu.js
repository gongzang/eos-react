import React from 'react';
import '../styles/components/wrap-menu.css';

class WrapMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { menu: { menuList, activeItem, openItem }, setOpenItem, setActiveItem } = this.props;
        return (
            <ul className="nav-left wrap-menu">
                {
                    menuList && menuList.length > 0 && (
                        menuList.map(item => {
                            return (
                                <li className={`${activeItem && item.name === activeItem.name ? 'active' : ''} ${openItem && item.name === openItem.name ? 'open' : ''}`}>
                                    <a onClick={() => (item.submenu && item.submenu.length > 0 ? setOpenItem(item) : setActiveItem(item))}>
                                        {item.name}
                                        {
                                            item.submenu && item.submenu.length > 0 && (
                                                <span className='arrow'></span>
                                            )
                                        }
                                    </a>
                                    {
                                        item.submenu && item.submenu.length > 0 && (
                                            <ul className={`sub-menu length${item.submenu.length} ${openItem && item.name === openItem.name ? 'in' : ''}`}>
                                                {
                                                    item.submenu.map(subItem => {
                                                        return (
                                                            <li className={`${activeItem && subItem.name === activeItem.name ? 'active' : ''}`}>
                                                                <a onClick={() => setActiveItem(subItem)}>{subItem.name}</a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                    }
                                </li>
                            )
                        })
                    )
                }
            </ul>
        );
    }
}

export default WrapMenu;