import React from 'react';
import '../styles/login.css';
import { get, post } from '../utils/request';
import formProvider from '../utils/formProvider';
import FormItem from '../components/FormItem';

class Login extends React.Component {

    constructor() {
        super();
        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
        const { formValid, form: { account, password } } = this.props;
        if (!formValid) {
            alert('请输入账号或密码');
            return;
        }
        post('/login', {
            account: account.value,
            password: password.value
        })
            .then((res) => {
                if (res) {
                    this.props.history.push('/app');
                } else {
                    alert('登录失败，账号或密码错误');
                }
            })
    }

    render() {
        const { form: { account, password }, onFormChange } = this.props;
        return (
            <div className="loginscreen">
                <div>
                    <p className="logo-name"><img src="../static/img/logo.png" /></p>
                    <p className="logWhat">易才云平台</p>
                </div>

                <p className="logWhat mTB0">What we do is 看得见的服务</p>
                <p className="logWhat mTB0">
                    What you see
			        </p>


                <form className="loginForm" onSubmit={this.login}>
                    <FormItem label="" valid={account.valid} error={account.error}>
                        <input type="text"
                            name="account"
                            value={account.value}
                            onChange={e => onFormChange(e)}
                            className="form-control"
                            placeholder="用户名" />
                    </FormItem>
                    <FormItem label="" valid={password.valid} error={password.error}>
                        <input type="password"
                            name="password"
                            className="form-control"
                            value={password.value}
                            onChange={e => onFormChange(e)}
                            className="form-control"
                            placeholder="密码" />
                    </FormItem>
                    <input type="checkbox" name="rememberMe" value="true" />记住我
                        <button type="submit" className="loginEnter">登 录</button>

                </form>
                <div className='text-center'>
                    <a href="#">
                        <small>
                            忘记密码
                            </small>
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="text-muted text-center">
                        <small>
                            无法登录
                                </small>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-muted text-center">
                        <small>
                            第一次使用系统
                            </small>
                    </span>
                </div>
                <p className="copyright">
                    <small>Copyright ©2017 CTG. All Rights Reserved.</small>
                </p>
                <p className="mT35">
                    <small>为了获取最佳的浏览体验，建议您选用以下浏览器Chrome60及以上、Firefox53及以上、IE10及以上</small>
                </p>
            </div>
        );
    }
}

Login = formProvider({
    account: {
        defaultValue: '',
        rules: [
            {
                pattern(value) {
                    return value.length > 0;
                },
                error: '请输入账号'
            }
        ]
    },
    password: {
        defaultValue: '',
        rules: [
            {
                pattern(value) {
                    return value.length > 0;
                },
                error: '请输入密码'
            }
        ]
    }
})(Login);

export default Login;