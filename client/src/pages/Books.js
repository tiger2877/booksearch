import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    link: "",
    description: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
            <Nav/>
            <div>
                <Jumbotron style={{ backgroundImage: "url(/images/books.jpg)" }}>
                    <Container>
                        <h1>(React) Google Books Search</h1>
                        <h4>Search for and Save Books of Interest</h4>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="md-12">
                        <h4>Saved Books</h4>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                    <Link to={"/books/" + book._id}>
                                    <strong>
                                    {book.title} by {book.author}
                                    </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                </ListItem>
                                 ))}
                            </List>
                        ) : (
                        <h3>No Results to Display</h3>
                        )}
                    </Row>
                </Container>
            </div>
        </div>    
    );
  }
}

export default Books;