import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import Todo from '../components/Todo.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }]
        };
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }
    removeTodo(id) {
       console.log("it is not easy");
       const remainder = this.state.data.filter(todo => todo.id !== id);
       this.setState({ data: remainder });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="My awesome list of things to do" taskNumber={this.state.data.length} />
             
              <TodoList tasks= {this.state.data} remove= {this.removeTodo}/>
            </div>
        );
    }
}
 /*  <TodoList tasks= {this.state.data} remove={() => this.removeTodo(this.state.data[1].id)}/> */
export default App