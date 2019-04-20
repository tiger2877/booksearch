import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from "../Button";

class BookList extends React.Component {
    render() {
        return (
            <Col sm={12} className="card-wrapper">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col size="xs-8">
                                <h3>{this.props.title}</h3>
                                <p>Author:{this.props.authors ? this.props.authors.join(', ') : 'N/A'}</p>
                            </Col>
                            <Col size="xs-4">
                                <a href={this.props.link ? this.props.link : '#'} role="button" className="badge badge-info">
                                View
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xs-4">
                                <img src={this.props.image ? this.props.image : ""} alt={this.props.title} />
                            </Col>
                            <Col size="xs-8">
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