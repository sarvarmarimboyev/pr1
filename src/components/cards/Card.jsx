import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};
  }

  render() {
    let add = () => {
      this.setState({ count: this.state.count + 1 });
    };

    let remove = () => {
      this.setState({ count: this.state.count - 1 });
    };
    console.log(this.props);

  
    return (
      <div className="main" style={{ margin: "2% 20%" }}>
        <div
          className="wrap"
          style={{
            display: "flex",
            padding: "10px",
            justifyContent: "space-around",
            border: "1px solid #fff",
            borderRadius: "10px",
            boxShadow: "0px 0px 20px grey",
            alignItems: "center",
          }}
        >
          <img src={this.props.img} />
          <div className="details">
            <h3>{this.props.detail.title || "No title"}</h3>
            <span>{this.props.detail.desc}</span>
          </div>
          <div className="controllers">
            <div
              className="asosiy"
              style={{ display: "grid", gridAutoRows: "1fr 1fr" }}
            >
              <button onClick={add}>+</button>

              <button onClick={remove}>-</button>
            </div>
          </div>{" "}
          <h1>Count:{this.state.count}</h1>
          <span className="price">${this.props.price || 0}</span>
          <button className="delete" >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
