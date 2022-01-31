import React, { useState, Component } from "react";
import axios from "axios";
import "./Offer.css";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
export default class Form extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    sent: false,
  };
  // Handle Input
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleLastname = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  // End Handle Input
  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("Message not Sent");
      });
  };

  //Form Reseting Initial Data
  resetForm = () => {
    this.setState({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <h2 className="text-center tit text-bold text-warning mt-5">
          Offer your job
        </h2>
        <div className="container cont">
          <form onSubmit={this.formSubmit}>
            {/* Single Item */}
            <div className="singleItem">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id=""
                className="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleName}
              />
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="singleItem">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                name="lastname"
                id=""
                className="lastname"
                placeholder="lastname"
                value={this.state.lastname}
                onChange={this.handleLastname}
              />
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="singleItem">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                className="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleEmail}
                required
              />
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="textArea singleItem">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleMessage}
              ></textarea>
            </div>
            {/* End Single Item */}
            <div className={this.state.sent ? "msg msgAppear" : "msg"}>
              Message has been sent
            </div>
            <div className="btn bt">
              <button className="btt" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
