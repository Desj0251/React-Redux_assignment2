import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
                <button className="todo" onClick={this.props.toggleStatus}>{this.props.status ? "✅" : "❎"}</button>
                {this.props.text}
            </li>
        );
    }
}

function MapDispatchToProps(dispatch, ownProps) {
    return {
        toggleStatus : () => dispatch(actions.toggleStatus(ownProps.id))
    };
}
export default connect(undefined, MapDispatchToProps)(Todo);