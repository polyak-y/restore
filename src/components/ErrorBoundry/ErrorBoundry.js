import React, {Component} from 'react'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'


class ErrorBoundry extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() { //срабатывает когда в компонентах ниже по иерархии будет ошибка 
    this.setState({
      hasError: true
    })
  }

  render() {
    return (
      <>
        {
          this.setState.hasError
            ? <ErrorIndicator />
            : this.props.children
        }
      </>
    )    
  }
}

export default ErrorBoundry