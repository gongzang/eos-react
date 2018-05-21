import React from 'react';
import '../styles/home.css';
import {get} from '../utils/request';

class Home extends React.Component {

    componentWillMount(){
        get('/testMenu')
        .then((res) => {
            alert(res);
            if (res.length === 1 ) {
              return;
            }
        });
    }

    render() {
        return (
            <div>
                <div className="nav-left wrap-menu">

                </div>
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
                        <p className="breadcrumb" id="breadcrumb">后台账号管理</p>
                    </div>
                    <div className="row content">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;