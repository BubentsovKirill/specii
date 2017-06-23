import React, { Component } from 'react';
import $ from 'jquery';
import {Link, Route} from 'react-router-dom';
import Home from '../components/Home';
import Contacts from '../components/Contacts';
import AboutSpice from './AboutSpice';
import Production from './Production';
import SpiceInfo from './SpiceInfo';
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
          <header role="banner" className="navbar navbar-fixed-top navbar-inverse">
              <div className="container">
                  <div className="navbar-header">
                      <button data-toggle="collapse-side" data-target=".side-collapse" data-target-2=".side-collapse-container" type="button" className="navbar-toggle pull-left">
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <img src="img/logo.png" className="hidden-lg hidden-md hidden-sm" alt="logo"/>
                  </div>
                  <div className="navbar-inverse side-collapse in">
                      <nav className="navbar-collapse">
                          <ul className="nav navbar-nav">
                              <li><Link to="/">Главная</Link></li>
                              <li><Link to="/production">Продукция</Link></li>
                              <li><Link to="/about-spice">Cпеции</Link></li>
                              <li><Link to="/contacts">Контакты</Link></li>
                              <li><a href="priceList.xls">Прейскурант</a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </header>
          <div className="container side-collapse-container childComponents">
              <div className="titleImgBLock">
                  <img src="img/header.gif" alt="" className="img-responsive center-block titleImg"/>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <Route exact path="/" component={Home}/>
                      <Route path="/production" component={Production}/>
                      <Route exact path="/about-spice" component={AboutSpice}/>
                      <Route path="/about-spice/:id" component={SpiceInfo}/>
                      <Route path="/contacts" component={Contacts}/>
                  </div>
              </div>
          </div>
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
