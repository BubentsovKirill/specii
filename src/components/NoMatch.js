import React from 'react';
import {Link} from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="NoMatch">
            <p className="text-center">Ошибка "404" - этой страницы не существует.</p>
            <br/>
            <p className="text-center">
                <Link to="/" className="text-center">Вернуться на главную страницу</Link>
            </p>
        </div>
    )
}

export default NoMatch;