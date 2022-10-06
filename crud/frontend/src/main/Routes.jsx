import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

import React from 'react'

export default function Routes(props) {
  return (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/users' component={UserCrud}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Switch>
  )
}
