import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header role="banner" className="navbar navbar-fixed-top navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <button data-toggle="collapse-side" data-target=".side-collapse" data-target-2=".side-collapse-container" type="button" className="navbar-toggle pull-left">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
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
    )
};

export default Header