import React, {Component} from 'react';
import spicess from '../spices';
import './SpiceInfo.css';


class SpiceInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            spice : {}
        }
    }
    componentDidMount(){
        const id = this.props.history.location.pathname.slice(-2);
        var sp = (function(){
            return spicess()
        })();
        for(var i = 0; i < sp.length;i++){
            if(sp[i].id === id){
                this.setState({
                    spice: sp[i]
                })
            }
        }

        var body = document.querySelector('body');
        body.scrollTop = body.scrollHeight;

    }
    render(){
        const item = this.state.spice;
        const integritty = item.integritty;
        const cooking = item.cooking;

        const list =  document.querySelector('.integrittyList');
        for(var i in integritty){
            const li = document.createElement('li');
            li.innerHTML = integritty[i];
            list.appendChild(li)
        }

        const listCooking =  document.querySelector('.cookingList');
        for(var i in cooking){
            const li = document.createElement('li');
            li.innerHTML = cooking[i];
            listCooking.appendChild(li)
        }

        return(
            <div className="Info">
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={process.env.PUBLIC_URL + `/img/${item.img}`} className="spiceInfoImg img-responsive center-block" alt="foto"/>
                        </div>
                        <div className="col-md-8 SpiceInfoDiscription">
                            <p className="SpiceInfoTitle"><span>{item.title}</span> (<i> {item.titleEng} </i>)</p>
                            <p className="SpiceInfoTitleDiscription">{item.titleDiscription}</p>
                        </div>
                    </div>
                    <div className="clearFix"></div>
                </div>
                <hr/>
                <div style={item.homeland ? {display: 'block'} : {display: 'none'}}>
                    <h4 className="SpiceInfoTitle">Родина {item.homelandTitle}</h4>
                    <p>{item.homeland}</p>
                    <hr/>
                </div>
                <div style={item.inCook ? {display: 'block'} : {display: 'none'}}>
                    <h4 className="SpiceInfoTitle">{item.title} в кулинарии</h4>
                    <p>{item.inCook}</p>
                    <hr/>
                </div>
                <div style={item.inMedicine ? {display: 'block'} : {display: 'none'}}>
                    <h4 className="SpiceInfoTitle">{item.title} в медицине</h4>
                    <p>{item.inMedicine}</p>
                    <hr/>
                </div>
                <div style={item.recept ? {display: 'block'} : {display: 'none'}}>
                    <h4 className="SpiceInfoTitle">Рецепт "{item.recept}"</h4>
                    <h4><b>Ингредиенты:</b></h4>
                    <ul className="integrittyList"></ul>
                </div>
                <div style={item.recept ? {display: 'block'} : {display: 'none'}}>
                    <h4><b>Приготовление:</b></h4>
                    <ul className="cookingList"></ul>
                </div>
            </div>
        )
    }
}


export default SpiceInfo;