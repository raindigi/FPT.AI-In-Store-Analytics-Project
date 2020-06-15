import React, { Component, useState, useEffect } from "react";
import client from "../../api";
import Cards from "./CardUI";
import ReactPaginate from "react-paginate";
import styles from "../../views/Report/Report.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dataset: [],
      object1: [],
      array_slicing : [],
      offset: 0,
      data: [],
      perPage: 4,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedData() {
    client.get("/api/shareholders").then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((pd) => (
        <div>
            <Cards state = {pd}/>
        </div>
      ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),

        postData,
      });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData()
      }
    );
  };

  componentDidMount() {
    client.get("/api/shareholders").then((response) => {
      //   let updated = response.data[response.data.length - 1];
      //   console.log(updated);
      //   this.setState({
      //     id: updated.id,
      //     name: updated.name,
      //     dob: updated.dob,
      //     home: updated.home,
      //     address: updated.address,
      //     image_face: updated.image_face,
      //   });
      this.setState({
        dataset: response.data,
      });
    });
    this.receivedData()
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div>
        {/* <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              {this.state.dataset.forEach((i) => {
                this.state.object1.push(<Cards state={i} />);
              })}

              <div>{this.state.object1}</div>
            </div>
            <div className="col-md-4">
              <Cards state={this.state} />
            </div>
            <div className="col-md-4">
              <Cards state={this.state} />
            </div>{" "}
          </div>
        </div> */}

        
        <div className="grid">
        {this.state.postData}
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default Dashboard;
