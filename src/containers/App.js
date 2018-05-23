import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import ImmutableRenderMixin from 'react-immutable-render-mixin';
import * as ItemsActions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const actions = this.props.actions;
    return (
      <Router props={this.props}>
        <div>
          <Switch>
            <Route path="/app" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
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
  //使用bindActionCreators来绑定dispatch和函数
  //这是switchLamp看起来是一个函数，其实是一个对象，
  //包含了actions里定义的所有函数
  //组件中的函数就会自动dispatch到actions中和对应的函数想匹配，dispatch以后redux就接管了后续的逻辑操作
  return bindActionCreators(ItemsActions, dispatch);

}

// App.mixins = [ImmutableRenderMixin]
// App.propTypes = {
//   menu: PropTypes.Object
// }
export default connect(mapStateToProps, mapDispatchToProps)(App);
