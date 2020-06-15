import React, { Component } from "react";
import { Table } from "reactstrap";
import styles from "../../views/Report/Report.css";
import { Form } from "react-bootstrap";
import axios from "axios";


class TableForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   logo: "",
    //   logoTitle:"",
    //   programTitle:"",
    //   location:"",
    //   program: "",
    //   doc: "",
    //   phoneNum:""
    // };
    this.fileChange = this.fileChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  fileChange(e) {
    const { name, value } = e.target;
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        [name]: value,
      });
    };
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]:value})
  }

  render() {
    return (
      <div className="something">
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Danh Mục</th>
              <th>Điền Thông Tin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="center" scope="row">
                1
              </th>
              <td>Logo</td>
              <td>
                <div onSubmit={this.onFormSubmit}>
                  <input className="file-input"
                    type="file"
                    name= {this.props.logo}
                    onChange={(e) => this.fileChange(e)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th className="center" scope="row">
                2
              </th>
              <td>Logo title</td>
              <td className= "title-input">
                <Form.Group className="form-input" >
                  <Form.Control 
                    size="sm"
                    type="text"
                    placeholder="Small text"
                    onChange= {this.handleChange}
                    name = {this.props.logoTitle}
                  />
                </Form.Group>
              </td>
            </tr>
            <tr>
              <th className="center" scope="row">
                3
              </th>
              <td>Tên Chương Trình</td>
              <td className= "title-input">
                <Form.Group className="form-input" >
                  <Form.Control 
                    size="sm"
                    type="text"
                    placeholder="Small text"
                    onChange = {this.handleChange}
                    name = {this.props.programTitle}
                  />
                </Form.Group>
              </td>
            </tr>
            <tr>
              <th className="center" scope="row">
                4
              </th>
              <td>Thời gian và Địa điểm</td>
              <td className= "title-input">
                <Form.Group className="form-input" >
                  <Form.Control 
                    size="sm"
                    type="text"
                    placeholder="Small text"
                    onChange = {this.handleChange}
                    name = {this.props}
                  />
                </Form.Group>
              </td>
            </tr>
            <tr>
              <th className="center" scope="row">
                5
              </th>
              <td>Chương trình</td>
              <td>
                <div onSubmit={this.onFormSubmit}>
                  <input className="file-input"
                    type="file"
                    name="program"
                    onChange={(e) => this.fileChange(e)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th className="center" scope="row">
                6
              </th>
              <td>Tài liệu</td>
              <td>
                <div onSubmit={this.onFormSubmit}>
                  <input className="file-input"
                    type="file"
                    name="doc"
                    onChange={(e) => this.fileChange(e)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th className="center" scope="row">
                7
              </th>
              <td>Số điện thoại</td>
              <td className= "title-input">
                <Form.Group className= "form-input" >
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Small text"
                    onChange = {this.handleChange}
                    name = {this.props.phoneNum}
                  />
                </Form.Group>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableForm;
