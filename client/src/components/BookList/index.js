import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from "../Button";

class BookList extends React.Component {
    render() {
        return (
            <Col size="md-12">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col size="xs-8 sm-9">
                                <h3>{this.props.title}</h3>
                                <p>Author:{this.props.authors ? this.props.authors.join(', ') : 'N/A'}</p>
                            </Col>
                            <Col size="xs-4 sm-2">
                                <a href={this.props.link ? this.props.link : '#'} role="button" className="badge badge-info">
                                View
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xs-4 sm-2">
                                <img src={this.props.image ? this.props.image : ""} alt={this.props.title} />
                            </Col>
                            <Col size="xs-8 sm-9">
                                {this.props.description ? this.props.description : 'N/A'}
                                <br />
                                <Button role="button" className="btn btn-danger btn-sm" onClick={() => this.props.onSelect()}>
                                Save
                                </Button>   
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default BookList;