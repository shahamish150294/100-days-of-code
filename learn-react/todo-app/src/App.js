/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

/*
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}
*/
import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


class App extends Component {
    constructor() {
        super()
        this.state = {
            loading : false,
            character: {}
        }    
    }
    
    componentDidMount() {
        this.setState({loading:true})
        fetch("https://my-json-server.typicode.com/aman-leap/swapi/people/1")
            .then(response => response.json())
            .then(data => {
                  console.log(data)
                this.setState({
                  loading: false,
                  character : data
                })
            })
    }
    
    render() {
        return (
            <div>

                { this.state.loading ? "Loading..." : this.state.character.name}
            </div>
        )
    }
}

export default App