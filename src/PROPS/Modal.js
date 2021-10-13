import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { productDetail } = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{ flexDirection: 'column' }}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="row">
                                <div className="col-2">
                                    <img src={productDetail.image} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-5">
                                    <h5 className="modal-title" id="exampleModalLabel">{productDetail.name}</h5>
                                    <p className="modal-title" id="exampleModalLabel">{productDetail.price}$</p>

                                </div>
                            </div>
                        </div>
                        <div className="modal-body" style={{ textAlign: 'left' }}>
                            <h5 className="modal-title" id="exampleModalLabel">{productDetail.description}</h5>
                            <h5 className="modal-title" id="exampleModalLabel">{productDetail.shortDescription}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
