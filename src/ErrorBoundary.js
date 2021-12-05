import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    //log this error to Sentry, Azure Monitor , New Relics , TrackJS or in this case console
    console.log("ErrorBoundary caught an error ", error, info);
    setTimeout(() => this.setState({ redirect: true }), 1000);
  }
  // componentDidUpdate(){
  //     console.log("this function will never be called for the first time");
  //     if(this.state.hasError){
  //         setTimeout(()=>this.setState({redirect:true}),1000);
  //     }
  // }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.<Link to="/">Click here!</Link> to go back
          to the home page.
        </h2>
      );
    } else {
      return this.props.children; //children of the <ErrorBOundary>
    }
  }
}

export default ErrorBoundary;
