import React,{Component} from 'react';
import './Production.css';
import productions from '../productions.js';

class Production extends Component{
    constructor(props){
        super(props);
        this.state = {
            products : {
                weghtProducts: [],
                seasoning: [],
                pastryAdditives: []
            }
        }
    };

    componentDidMount(){
        var products = (function(){
            return productions()
        })();

       this.setState({
           products:{
               weghtProducts: products[0],
               seasoning: products[1],
               pastryAdditives: products[2]
           }
       })
    }
    render(){
        return(
            <div className="Contacts">
                <div className="tableScroll">
                    <table className="table table-striped">
                        <caption>Весовые товары</caption>
                        <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Ед. изм.</th>
                            <th>Кол-во в упак.</th>
                            <th>Цена за ед.</th>
                            <th>Ставка НДС</th>
                            <th>Сумма НДС</th>
                            <th>Всего с НДС</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.weghtProducts.map(function(item,index){
                                return (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.unit}</td>
                                        <td>{item.amountOnPackage}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.rateNds}</td>
                                        <td>{item.amountNds}</td>
                                        <td>{item.allNDS}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <br/>
                <div className="tableScroll">
                    <table className="table table-striped">
                        <caption>Приправы</caption>
                        <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Ед. изм.</th>
                            <th>Кол-во в упак.</th>
                            <th>Цена за ед.</th>
                            <th>Ставка НДС</th>
                            <th>Сумма НДС</th>
                            <th>Всего с НДС</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.seasoning.map(function(item,index){
                                return (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.unit}</td>
                                        <td>{item.amountOnPackage}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.rateNds}</td>
                                        <td>{item.amountNds}</td>
                                        <td>{item.allNDS}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="tableScroll">
                    <table className="table table-striped">
                        <caption>Специи, пряности, кондитерские добавки</caption>
                        <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Ед. изм.</th>
                            <th>Кол-во в упак.</th>
                            <th>Цена за ед.</th>
                            <th>Ставка НДС</th>
                            <th>Сумма НДС</th>
                            <th>Всего с НДС</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.pastryAdditives.map(function(item,index){
                                return (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.unit}</td>
                                        <td>{item.amountOnPackage}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.rateNds}</td>
                                        <td>{item.amountNds}</td>
                                        <td>{item.allNDS}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Production;