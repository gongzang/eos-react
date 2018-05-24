import React from 'react';

function menuProvider(menuData) {
    return function (Comp) {

        const initialMenuState = {
            openItem:{},
            activeItem:{}
        };

        class MenuComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = initialMenuState;

                this.handleItemClick = this.handleItemClick.bind(this);
            }

            handleItemClick(item) {

                const { openItem,activeItem } = this.state;
                let newOpenItem = openItem;
                if (item.submenu && item.submenu.length > 0) {
                    if(item != openItem){
                        newOpenItem = item;
                    } else {
                        newOpenItem = {};
                    }
                    this.setState({
                        openItem: newOpenItem
                    });
                } else {
                    if(item != activeItem){
                        this.setState({
                            activeItem: item
                        });
                        this.props.setActiveItem(item);
                    }
                }
            }

            render() {
                const { openItem,activeItem } = this.state;
                return (
                    <Comp
                        {...this.props}
                        openItem={openItem}
                        activeItem={activeItem}
                        handleItemClick={this.handleItemClick}
                    />
                );
            }
        }

        return MenuComponent;
    }
}

export default menuProvider;