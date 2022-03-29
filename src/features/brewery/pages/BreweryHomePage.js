import React from 'react';
import PropsTypes from 'prop-types';
import { BreweryService } from '../../../services';
import { Row, Col, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBeer} from "@fortawesome/free-solid-svg-icons";

class BreweryHomePage extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    breweries: []
  }
}

componentDidMount() {
  this.getBreweries();
}

getBreweries = () => {
    BreweryService.GetBreweries('breweries').then(data => {
      this.setState({
        breweries: data
      })
      console.log(data)
    },
    (error) => {
      console.log(error(error.toString()))
    }
  );
}

handleNavigate = (id) => {
  // console.log(this.props.history)
  this.props.history.push(`/details/${id}`);
}

  render() {
    return (
      <div className="app-page-container mt-5">
        <h1>Erik's Brewery App</h1>
          {
            this.state.breweries.map((brewery) => (
              <div className="brew-card card-align">
                <Row gutter={[16, 16]} className="p-3 ml-4" style={{ width: '95%' }}>
                    <Col span={24}>
                        <FontAwesomeIcon
                            className="beer float-right"
                            icon={faBeer}
                            size="3x"
                        />
                        <div
                            className="card-title"
                        >
                            <div className="d-flex">
                                <span>{brewery.name}</span>
                            </div>
                        </div>
                        <div>
                            {brewery.website_url ? <a href={brewery.website_url} target="_blank">{brewery.website_url}</a> : 'No URL'}
                        </div>
                    </Col>
                    <Col span={24}>
                        <hr />
                        <div className="d-inline-flex">
                            <div>
                                <div className="sub-title">
                                    Type
                                </div>
                                <p className="ml-0">
                                    {brewery.brewery_type ? brewery.brewery_type : 'No Type'}
                                </p>
                            </div>
                            <div className="ml-4">
                              <span className="sub-title">
                                  Address
                              </span>
                                <p>{`${brewery.street ? `${brewery.street}, ` : ''} ${brewery.city}, ${brewery.state}, ${brewery.postal_code}`}</p>
                            </div>
                        </div>
                        <div className="float-right">
                            <Button className="primary-btn" onClick={() => this.handleNavigate(brewery.id)}>
                                View Details
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            ))
          }
      </div>
    )
  }
}

BreweryHomePage.propsTypes = {
  history: PropsTypes.shape
}

BreweryHomePage.defaultProps = {
  history: {}
}

export default BreweryHomePage;
