import React,{Component} from 'react';
import SpiceItem from '../components/SpiceItem';
import spicess from '../spices.js';

class AboutSpice extends Component{
    constructor(props){
        super(props);
        this.state = {
            spices : []
        }
    }
    componentDidMount(){
        var sp = (function(){
            return spicess()
        })();
        this.setState({
            spices : sp
        })
    }
    render(){
        window.sp = this.state.spices;
        return (
            <div className="row">
                {
                    this.state.spices.map(function(item,index){
                        return (
                            <SpiceItem
                                key={index}
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                titleEng={item.titleEng}
                                titleDiscription={item.titleDiscription}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default AboutSpice;