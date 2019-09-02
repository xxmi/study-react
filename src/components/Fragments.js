import React, {Component, Fragment} from 'react';

class List extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.todos.map((item) => (<li key={item}>{item}</li>))
                }
            </Fragment>
        );
    }
}

// Fragment 可以用 <> 代替了，更简洁形象
class List2 extends Component {
    render() {
        return (
            <>
                {
                    this.props.todos.map((item) => (<li key={item}>{item}</li>))
                }
            </>
        );
    }
}


export default class Todos extends Component {
    state = {
        todos: ['a', 'b', 'c']
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <List todos={this.state.todos}/>
                </ul>
                <ul>
                    <List2 todos={this.state.todos}/>
                </ul>
            </div>
        );
    }
}