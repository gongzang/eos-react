import React from 'react';
import '../styles/home.css';
import {get} from '../utils/request';

class Home extends React.Component {

    componentWillMount(){
        get('http://localhost:3030/testMenu')
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
                <div class="nav-left wrap-menu">

                </div>
                <dev className='right-div'>
                    <div className="row border-bottom">
                        <span class="logoTit">EOS</span><span class="logoSim">易才云平台</span>
                        <div class="navbar-right">
                            <span class="m-r-sm">你好，<span>系统管理员</span>！
                                欢迎登录
                            </span>
                            <a href="/eos-admin/logout">
                                <i class="fa fa-sign-out"></i>
                                登出
                            </a>
                        </div>
                    </div>
                    <div class="row white-bg border-bottom page-heading">
                        <p class="breadcrumb" id="breadcrumb">后台账号管理</p>
                    </div>
                    <div className="row content">
                    </div>
                </dev>
            </div>
        );
    }
}

export default Home;