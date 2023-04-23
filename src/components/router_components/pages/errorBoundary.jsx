import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // можем отобразить error.massage
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo); // подробная информация
        // можем вызвать дополнительные действия
    }

    render() {
        if (this.state.hasError) {
            return <h2>Что-то пошло не так... </h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;