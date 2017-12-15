import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class Todolist extends Component {
    render() {
        const todos = this.props.todos.map((item) => {
            return (
                <Todo {...item} />
            );
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

function MapStateToProps(state){
    return{
        todos: state.todoList
    };
}

export default connect(MapStateToProps)(Todolist);