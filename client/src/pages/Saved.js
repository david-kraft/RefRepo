import React, { Component } from "react";
import Card from "../components/Card";
import Ref from "../components/Ref";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    refs: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedRefs()
      .then(res =>
        this.setState({
          refs: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleRefDelete = id => {
    API.deleteRef(id).then(res => this.getSavedRefs());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card title="Saved Refs">
              {this.state.refs.length ? (
                <List>
                  {this.state.refs.map(ref => (
                    <Ref
                      key={ref._id}
                      relationship={ref.relationship}
                      dateMet={ref.dateMet}
                      prefix={ref.prefix}
                      firstName={ref.firstName}
                      lastName={ref.lastName}
                      pronouns={ref.pronouns}
                      email={ref.email}
                      phone={ref.phone}
                      lastContacted={ref.lastContacted}
                      prefAddr={ref.prefAddr}
                      twitters={ref.twitters}
                      linkedIn={ref.linkedIn}
                      facebook={ref.facebook}
                      location={ref.location}
                      workHistory={ref.workHistory}
                      traits={ref.traits}
                      stories={ref.stories}
                      network={ref.network}
              
                      Button={() => (
                        <button
                          onClick={() => this.handleRefDelete(ref._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
