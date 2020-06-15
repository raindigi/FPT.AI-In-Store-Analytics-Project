import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css";

class Cards extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="card text-center">
                <div className = "overflow">
                    <img src = {this.props.state.image_root} alt="" className="card-img-top"  height="200" width="50"/>
                </div>
                <div className= "card-body text-dark">
                    <h4 className="card-title">Chứng Minh Thư</h4>
                    <p className= "card-text">
                        Số: {this.props.state.id}
                    </p>
                    <p className= "card-text">
                        Họ Tên: {this.props.state.name}
                    </p>
                    <p className= "card-text">
                        Ngày Sinh: {this.props.state.dob}
                    </p>
                    <p className= "card-text">
                        Địa Chỉ: {this.props.state.address}
                    </p>
                    <p className= "card-text">
                        Quê Quán: {this.props.state.home}
                    </p>

                </div>
            </div>
        )
    }
}

export default Cards