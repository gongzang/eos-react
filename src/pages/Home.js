import React from 'react';
import '../styles/home.css';
import { get } from '../utils/request';
import WrapMenu from '../components/menu/WrapMenu';
import * as ItemsActions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Route, Switch } from 'react-router-dom';

import AddPage from './emp/Add';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        var shelf = this;
        get('/testMenu')
            .then((res) => {
                shelf.props.setMenu(res);
            });
    }

    render() {
        const { menu: { activeItem }, match } = this.props;
        return (
            <div className='home-page'>
                {console.log(this.props)}
                <WrapMenu {...this.props}>

                </WrapMenu>
                <div className='right-div'>
                    <div className="row border-bottom">
                        <span className="logoTit">EOS</span><span className="logoSim">易才云平台</span>
                        <div className="navbar-right">
                            <span className="m-r-sm">你好，<span>系统管理员</span>！
                                欢迎登录
                            </span>
                            <a href="/eos-admin/logout">
                                <i className="fa fa-sign-out"></i>
                                登出
                            </a>
                        </div>
                    </div>
                    <div className="row white-bg border-bottom page-heading">
                        <p className="breadcrumb" id="breadcrumb">{activeItem.name}</p>
                    </div>
                    <div className="row content">
                        <Switch>
                            {/* <Route exact path={props.match.path} component={BrowseUsersPage} /> */}
                            <Route path={`${match.path}/emp/add`} component={AddPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {

        menu: state.menu //这里的state比较简单，可以很复杂
    };
}
//这里把方法也转为props，以供组件使用
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ItemsActions, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);