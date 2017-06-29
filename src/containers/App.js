import React, { Component } from 'react';
import $ from 'jquery';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Contacts from '../components/Contacts';
import AboutSpice from './AboutSpice';
import Production from './Production';
import SpiceInfo from './SpiceInfo';
import NoMatch from '../components/NoMatch';
import './App.css';

class App extends Component {
  componentWillMount(){
      $(document).ready(function() {
          var sideslider = $('[data-toggle=collapse-side]');
          var sel = sideslider.attr('data-target');
          var sel2 = sideslider.attr('data-target-2');
          sideslider.click(function(event){
              $(sel).toggleClass('in');
              $(sel2).toggleClass('out');
          });

          var sideCollapse = $('.side-collapse');
          var link = $('.nav li a');
          var container = $('.side-collapse-container')
          link.on('click', function(){
              if(!sideCollapse.hasClass('in')){
                  sideCollapse.addClass('in');
                  container.removeClass('out');
              }
          })
      });
  }
  render() {
    return (
      <div className="App">
          <Header/>
          <div className="container side-collapse-container childComponents">
              <div className="titleImgBLock">
                  <img src={process.env.PUBLIC_URL + `/img/header.gif`} alt="title" className="img-responsive center-block titleImg"/>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <Switch>
                          <Route exact path="/" component={Home}/>
                          <Route path="/production" component={Production}/>
                          <Route exact path="/about-spice" component={AboutSpice}/>
                          <Route path="/about-spice/:id" component={SpiceInfo}/>
                          <Route path="/contacts" component={Contacts}/>
                          <Route component={NoMatch}/>
                      </Switch>
                  </div>
              </div>
          </div>
          <div className="devider"></div>
          <div className="navbar-fixed-bottom row-fluid navbar-inverse">
              <div className="container footer">
                  <div className="row">
                      <p className="text-center">ООО "Серебряный Мост" 1993 - 2017</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
