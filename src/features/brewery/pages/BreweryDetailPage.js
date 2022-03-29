import React from 'react';
import PropsTypes from 'prop-types';
import { BreweryService } from '../../../services';

class BreweryDetailPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      brewery: {}
    }
  }

  componentDidMount() {
    this.getBrewery();
  }

  getBrewery = () => {
      const id = this.props.match.url.split('/')[2];
      BreweryService.GetBrewery(id).then(data => {
        this.setState({
          brewery: data
        })
        console.log(data)
      },
      (error) => {
        console.log(error(error.toString()))
      }
    );
  }


  render() {
    return (
      <div className="app-page-container mt-5">
        <h1>Erik's Brewery Detail Page</h1>
        <h1>{this.state.brewery ? this.state.brewery.name : null}</h1> //Name, Address, URL, Brewry Type, Contact, Phone #
      </div>
    )
  }
}

BreweryDetailPage.propsTypes = {
  match: PropsTypes.shape
}

BreweryDetailPage.defaultProps = {
  match: {}
}

export default BreweryDetailPage;
