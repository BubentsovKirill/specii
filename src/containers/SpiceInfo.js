import React, {Component} from 'react';
import spicess from '../spices';

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
    }
    render(){
        const item = this.state.spice;
        return(
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + `/img/${item.img}`} className="spiceImg" alt="foto"/>
                    <div className="SpiceItemDiscription">
                        <p className="SpiceItemTitle"><span>{item.title}</span> ({item.titleEng})</p>
                        <p className="SpiceItemTitleDiscription">{item.titleDiscription}</p>
                    </div>
                    <div className="clearFix"></div>
                </div>
                <hr/>
                <div>
                    <h4>Родина {item.homelandTitle}</h4>
                    <p>{item.homeland}</p>
                </div>
                <hr/>
                <div>
                    <h4>{item.title} в кулинарии</h4>
                    <p>{item.inCook}</p>
                </div>
                <hr/>
                <div>
                    <h4>{item.title} в медицине</h4>
                    <p>{item.inMedicine}</p>
                </div>
                <hr/>
                <div>
                    <h4>Рецепт "{item.recept}"</h4>
                    <h5>Ингредиенты:</h5>
                    <ul>
                        {
                            item.integritty.forEach((item, index) => {
                                <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


export default SpiceInfo;