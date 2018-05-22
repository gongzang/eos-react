import React from 'react';
import '../styles/home.css';

class WrapMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: this.props.menu
        };
    }
    render() {
        const { menu } = this.props;
        return (
            <ul className="nav-left wrap-menu">
                {
                    menu && menu.length > 0 && (
                        menu.map(item => {
                            return (
                                <li>
                                    <h2>{item.name}</h2>
                                    {
                                        item.submenu && item.submenu.length > 0 && (
                                            <ul>
                                                {
                                                    item.submenu.map(subItem => {
                                                        return (
                                                            <li>
                                                                <h2>{subItem.name}</h2>
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