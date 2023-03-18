import React, { Component } from "react";

export default class AddNumber extends Component {
    state = { size: 0 }
    render() {
        return (
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={(() => {
                    // this.props.onClick(this.state.size)
                    this.props.onClick(this.state.size)
                }).bind(this)} />
                <input type="text" value={this.state.size} onChange={((e) => {
                    this.setState({ size: Number(e.target.value) })
                }).bind(this)} />
            </div>
        );
    }
}