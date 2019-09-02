import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        if (error) {
            this.setState({error: true})
        }
    }

    render() {
        return this.state.error ? <div>此组件无法渲染</div> : this.props.children
    }
}

class Text extends Component {
    render() {
        // 故意报错
        // return <div>{null.toString()}</div>
        return <div>测试ErrorBoundary（错误边界）</div>
    }
}


export default class ErrorBoundaryExample extends Component {
    render() {
        return <ErrorBoundary>
            <Text/>
        </ErrorBoundary>
    }
}