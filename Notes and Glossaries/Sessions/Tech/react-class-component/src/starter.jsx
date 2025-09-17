import { Component } from 'react';

class App extends Component {
  // object (data) setstate()
  state = { 
    title : "react basics" ,
    count : 0 , 
    users : []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(body => this.setState({users : body}))
  }

  changetitle = () => {
    this.setState({
      title : "react advanced"
    })
  }
  increment = () => {
    this.setState({
      count : this.state.count + 1
    })
  }
  decrement = () => {
    if(this.state.count > 0) {
      this.setState({
      count : this.state.count - 1
    })
    }
  }
   
  render() { 
    return (
      <>
          <button onClick={this.changetitle}>chane title</button>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
          <h1> {this.state.title} </h1>
          <h2>counter : {this.state.count}</h2>

          <div className="container my-5">
               {
                this.state.users.length > 0 &&
                <ul>
                     {
                  this.state.users.map((user) => (
                  <li key={user.id}> {user.username} </li>
                   ))
                }
                </ul>
               }
          </div>
      </>
    );
  }
}
 
export default App;