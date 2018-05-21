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
        const { menu } = this.state;
        return (
            <ul>
                {
                    menu.map(item => {
                        return (
                            <li>
                                <h2>{item.name}</h2>
                                {
                                    menu.subMenu && menu.subMenu.length > 0 && (
                                        <ul>
                                            {
                                                menu.subMenu.map(subItem => {
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
                }
            </ul>
        );
    }
}

export default WrapMenu;