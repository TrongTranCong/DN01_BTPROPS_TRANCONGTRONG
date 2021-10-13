//ShoeList là con của ShoesCar
import React, { Component } from 'react'
import ShoesItem from './ShoesItem';

export default class ShoesList extends Component {

    renderShoesList = () => {
        let {arrShoes,xemChiTiet} = this.props;
        let content = arrShoes.map((shoes, index) => {
            return <div className="col-4 py-3" key={index}>
                <ShoesItem sp={shoes} xem={xemChiTiet}/>
            </div>
        })
        return content;
    }
    render() {
        return (
            <div className="row">
                {this.renderShoesList()}
            </div>
        )
    }
}
