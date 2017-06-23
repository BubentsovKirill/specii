import React from 'react';
import {Link} from 'react-router-dom';
import './SpiceItem.css';

const SpiceItem = ({title, titleEng, titleDiscription, id, img}) => {
    return(
        <div className="col-md-6">
            <div className=" SpiceItem">
                <img src={process.env.PUBLIC_URL + `/img/${img}`} className="spiceImg" alt="img"/>
                <div className="SpiceItemDiscription">
                    <p className="SpiceItemTitle"><span>{title}</span> ({titleEng})</p>
                    <p className="SpiceItemTitleDiscription">{titleDiscription.substring(0,180) + '...'}</p>
                    <Link to={`/about-spice/${id}`} className="readMore">Подробнее</Link>
                </div>
                <div className="clearFix"></div>
            </div>
        </div>

    )
}

export default SpiceItem;