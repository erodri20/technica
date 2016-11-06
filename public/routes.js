import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import OrganizationSignUp from './components/OrganizationSignUp';
import MemberSignUp from './components/MemberSignUp';
import Login from './components/Login';
import Console from './components/Console';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/organizationsignup" component={OrganizationSignUp}/>
    <Route path="/membersignup" component={MemberSignUp}/>
    <Route path="/console" component={Console}/>

  </Route>
);

export default routes;
