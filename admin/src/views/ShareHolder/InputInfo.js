import React, { Component } from "react";
import styles from "../../views/Report/Report.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { Form, Button } from "react-bootstrap";
import { Table } from "reactstrap";
import client from "../../api";
import Resizer from "react-image-file-resizer";

class InputInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "",
      logoTitle: "",
      programTitle: "",
      location: "",
      program: "",
      doc: "",
      phoneNum: "",
    };
    this.fileChange = this.fileChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.save = this.save.bind(this);
    // this.handleClick = this.handleClick.bind(this)
  }

  save = (e) => {
    e.preventDefault();
    client
      .post("/api/form", {
        logo: this.state.logo,
        logoTitle: this.state.logoTitle,
        programTitle: this.state.programTitle,
        location: this.state.location,
        program: this.state.program,
        doc: this.state.doc,
        phoneNum: this.state.phoneNum,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  fileChange(e) {
    const { name, value } = e.target;
    let files = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        [name]: value,
      });
    };
  }

  handleChangeFile = (evt) => {
    var self = this;
    const { name } = evt.target;
    var reader = new FileReader();
    var file = evt.target.files[0];

    reader.onload = function (upload) {
      self.setState({
        [name]: upload.target.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // handleClick = (e) => {
  //   e.preventDefault()
  //   console.log("asdasda")
  //   client.get("/api/shareholders").then((response) => {
  //     let updated = response.data[response.data.length - 1];
  //     this.setState({
  //       id: updated.id,
  //       name:"",
  //       dob:"",
  //       town: "",
  //       address:"",
  //     });
  //     console.log("asdasd")
  //     console.log(this.state.id)
  //     });
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="./InputInfo.js">
            Set up
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <a className="navbar-brand1" href="./Dashboard.js" >
            {" "}
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <br />
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
                    <input
                      className="file-input"
                      type="file"
                      name="logo"
                      onChange={this.handleChangeFile}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="center" scope="row">
                  2
                </th>
                <td>Logo title</td>
                <td className="title-input">
                  <Form.Group className="form-input">
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Small text"
                      onChange={this.handleChange}
                      name="logoTitle"
                    />
                  </Form.Group>
                </td>
              </tr>
              <tr>
                <th className="center" scope="row">
                  3
                </th>
                <td>Tên Chương Trình</td>
                <td className="title-input">
                  <Form.Group className="form-input">
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Small text"
                      onChange={this.handleChange}
                      name="programTitle"
                    />
                  </Form.Group>
                </td>
              </tr>
              <tr>
                <th className="center" scope="row">
                  4
                </th>
                <td>Thời gian và Địa điểm</td>
                <td className="title-input">
                  <Form.Group className="form-input">
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Small text"
                      onChange={this.handleChange}
                      name="location"
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
                    <input
                      className="file-input"
                      type="file"
                      name="program"
                      // onChange={(e) => this.fileChange(e)}
                      onChange={this.handleChangeFile}
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
                    <input
                      className="file-input"
                      type="file"
                      name="doc"
                      // onChange={(e) => this.fileChange(e)}
                      onChange={this.handleChangeFile}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="center" scope="row">
                  7
                </th>
                <td>Số điện thoại</td>
                <td className="title-input">
                  <Form.Group className="form-input">
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Small text"
                      onChange={this.handleChange}
                      name="phoneNum"
                    />
                  </Form.Group>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="tiep-theo">
          <Button variant="light" size="lg" onClick={this.save}>
            Lưu
          </Button>
        </div>
      </div>
    );
  }
}

export default InputInfo;
