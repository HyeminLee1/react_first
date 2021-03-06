import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import {  OnlineProfile, 
          CourseRegister, 
          SchoolStatus, 
          Join, 
          Login, 
          Home, 
          Navigation, 
          Header, 
          NavigationForJavaScript } from 'components/index'
import { HomePage } from 'pages/index';
import styled from 'styled-components';
import Basic from './modern-javascript/chap-01-basic/Basic';
import ArrowFunction from './modern-javascript/chap-02-arrow-function/ArrowFunction';
import Arguments from './modern-javascript/chap-03-arguments/Arguments';
import TemplateLiteral from './modern-javascript/chap-04-template-literal/TemplateLiteral'
import LiteralMethod from './modern-javascript/chap-05-literal-method/LiteralMethod'
import Destructuring from './modern-javascript/chap-06-destructuring/Destructuring'
import Loop from './modern-javascript/chap-07-loop/Loop'
import ArrayMethod from './modern-javascript/chap-08-array-method/ArrayMethod'
import Spread from './modern-javascript/chap-09-spread-operator-rest-parameter/SpreadOperatorRestParameter'
import Class  from './modern-javascript/chap-12-class/Class'
import Promise from './modern-javascript/chap-13-promise/Promise'
import Generator from './modern-javascript/chap-14-generator/Generator'
import Proxy from './modern-javascript/chap-15-proxy/Proxy'
import SetMap from './modern-javascript/chap-16-set-map/SetMap'
import Array from './modern-javascript/chap-17-array/Array'
import Es2017 from './modern-javascript/chap-18-es2017/Es2017'
import AsyncAwait from './modern-javascript/chap-19-async-await/AsyncAwait'
import Es2018 from './modern-javascript/chap-20-es2018/Es2018'
import Es2019 from './modern-javascript/chap-21-es2019/Es2019'
import Es2020 from './modern-javascript/chap-22-es2020/Es2020'
import TypeScript from './modern-javascript/chap-23-typescript/TypeScript'
import ObjectLiteral from './modern-javascript/chap-10-object-literal/ObjectLiteral'


const App =() => (<Layout><Header /><Navigation /><NavigationForJavaScript />
  <Switch>
  <Route  exact path= '/' component = {HomePage}/>
  <Redirect  from = '/home' to = {'/'}/>
  <Route  exact path= '/course-register' component = {CourseRegister}/>  
  <Route  exact path= '/online-profile' component = {OnlineProfile}/>
  <Route exact path= '/login' component = {Login} />
  <Route  exact path= '/join' component = {Join}/>
  <Route  exact path= '/school-status' component = {SchoolStatus}/>
  <Route exact path='/basic' component={Basic}/>
  <Route exact path = '/arrow-function' component = {ArrowFunction}/>
  <Route exact path = '/arguments' component={Arguments} />
  <Route exact path = '/template-literal' component={TemplateLiteral} />
  <Route exact path = '/literal-method' component={LiteralMethod} />
  <Route exact path = '/destructuring' component={Destructuring} />
  <Route exact path = '/loop' component={Loop} />
  <Route exact path = '/array-method' component={ArrayMethod} />
  <Route exact path = '/spread-operator-rest-parameter' component={Spread} />
  <Route exact path = '/object-literal' component={ObjectLiteral} />
  <Route exact path = '/symbol' component={Symbol} />
  <Route exact path = '/class' component={Class} />
  <Route exact path = '/promise' component={Promise} />
  <Route exact path = '/generator' component={Generator} />
  <Route exact path = '/proxy' component={Proxy} />
  <Route exact path = '/set-map' component={SetMap} />
  <Route exact path = '/array' component={Array} />
  <Route exact path = '/es2017' component={Es2017} />
  <Route exact path = '/async-await' component={AsyncAwait} />
  <Route exact path = '/es2018' component={Es2018} />
  <Route exact path = '/es2019' component={Es2019} />
  <Route exact path = 'es2020/' component={Es2020} />
  <Route exact path = '/typescript' component={TypeScript} />
  </Switch></Layout>
);

const Layout = styled.div`
margin: 0 auto
display: flex;
width: 100%;
flex-flow: row wrap;
`

export default App;
 