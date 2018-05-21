import React from 'react';
import '../styles/home.css';
import { get } from '../utils/request';

class Home extends React.Component {

    componentWillMount() {
    }

    render() {
        return (
            <div class="middle-box text-center loginscreen animated fadeInDown"
                style="margin-top: -280px; padding-top: 25%;">
                <div>
                    <div>
                        <p class="logo-name"><img src="${ctx}/static/img/logo.png" style="width: 70%;" /></p>
                        <p class="mTn35 logWhat">易才云平台</p>
                    </div>

                    <p class="logWhat">What we do is 看得见的服务</p>
                    <p class="mTn12 logWhat">
                        What you see
			</p>


                    <form id="loginForm" class="mT45" method="post" role="form">
                        <div class="form-group">
                            <input type="text" name="username" class="form-control" placeholder="用户名" required >
				</div>
                            <div class="form-group">
                                <input type="password" name="password" class="form-control" placeholder="密码" required >
				</div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="验证码" required name="captcha"
                                        style="width: 50%;">
                                        <div class="securityCode">
                                            <img src="${ctx}/captcha" height="34" id="vcode">
					</div>
                                        </div>
                                        <div class="form-group">
                                            <input type="checkbox" name="rememberMe" value="true">记住我
					<input type="hidden" name="rememberMe" value="0">
				</div>
                                                <div class="hidden" id="errorMessage">
                                                    <div class=""
                                                        style="padding: 0 .7em; margin-bottom: 0.8em; color: #f00">
                                                        <strong>提示:</strong>用户名或密码错误
					</div>
                                                </div>
                                                <button type="button" onclick="login()"
                                                    class="btn loginEnter block full-width m-b mT35">登 录</button>

                                                <a href="#"><small>忘记密码</small></a>&nbsp;&nbsp;&nbsp;&nbsp; <span
                                                    class="text-muted text-center"><small>无法登录</small></span>&nbsp;&nbsp;&nbsp;&nbsp;
				<span class="text-muted text-center"><small>第一次使用系统</small></span>
			</form>
                                            <p class="mT15">
                                                <small>Copyright ©2017 CTG. All Rights Reserved.</small>
                                            </p>
                                            <p class="mT35" style='color:#9F9FA1'>
                                                <small>为了获取最佳的浏览体验，建议您选用以下浏览器Chrome60及以上、Firefox53及以上、IE10及以上</small>
                                            </p>
                                        </div>
	</div>
                                    );
                                }
                            }
                            
export default Home;