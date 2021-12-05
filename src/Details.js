import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  // constructor(){
  //     super();
  //     this.state = { loading: true, showModal: false }
  // }

  toggleModal = function(){
    this.setState({ showModal: !this.state.showModal });
  }
  adopt = function(){ (window.location = "http://bit.ly/pet-adopt")};

  state = { loading: true, showModal: false }; //a va;id syntax for above constructor code

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    ); //match.params from router matching link

    const json = await res.json();

    // this.setState({
    //     loading: false,
    //     name:json.pets[0].name,
    //     breed:json.pets.breed
    //     //and so on
    // })

    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }


  // errobj={'new error object':'yes'}
  // throw Error(errobj)

  render() {
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    if (this.state.loading) {
      <h2>Loading...</h2>;
    }
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal}-{breed}-{city}-{state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
