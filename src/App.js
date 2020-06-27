import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Nav from './nav/nav'
import Login from './login/Login'
import Reg from './reg/Reg'
import Erro from './erro/Erro'

//跳转路由
import CityList from './citylist/CityList'
import MyMap from './mymap/MyMap'
// import CityList from './citylist/CityList'

import store from './store'
import { Provider } from 'react-redux'
export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <HashRouter >
          <Switch>
            <Route exact path='/' component={Nav}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/reg' component={Reg}></Route>
            <Route path='/citylist' component={CityList}></Route>
            <Route path='/mymap' component={MyMap}></Route>
            {/* <Route path='/citylist' component={CityList}></Route> */}
            <Route component={Erro}></Route>
          </Switch>
        </HashRouter>
      </Provider>

    )
  }
}

