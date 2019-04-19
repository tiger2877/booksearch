const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "JavaScript and JQuery: Interactive Front-End Web Development",
    author: "Jon Duckett",
    description:
      "Provides information on how to make more interactive, engaging, and usable Web pages with JavaScript and jQuery, covering core programming concepts in both and such techniques as animation, form validation, and interactive galleries.",
    link: "http://books.google.ca/books?id=LpctBAAAQBAJ&dq=javascript&hl=&source=gbs_api",
    image: "http://books.google.com/books/content?id=LpctBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
 
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    description:
      "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
    link: "https://play.google.com/store/books/details?id=PXa2bby0oQ0C&source=gbs_api",
    image: "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  
  },
  {
    title: "JavaScript",
    author: "David Flanagan",
    description:
      "A guide for experienced programmers demonstrates the core JavaScript language, offers examples of common tasks, and contains an extensive reference to JavaScript commands, objects, methods, and properties.",
    link: "http://books.google.ca/books?id=vJGlu9t9LNYC&dq=javascript&hl=&source=gbs_api",
    image: "http://books.google.com/books/content?id=vJGlu9t9LNYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",

  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    description:
      "JavaScript is at the heart of almost every modern Web application, whether it's Google Apps, Twitter, or the newest browser-based game. Though it's simple for beginners to pick up and play with, JavaScript is not a toy—it's a flexible and complex language that can be used to build full-scale applications. Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs. As you follow along with examples like an artificial life simulation and a version of the classic game Sokoban, you'll learn to: –Understand the essential elements of programming: syntax, control, and data –Use object-oriented and functional programming techniques to organize and clarify your programs –Script the browser and make basic Web applications –Work with tools like regular expressions and XMLHttpRequest objects And since programming is an art that's best learned by doing, all example code is available online in an interactive sandbox for you to experiment with. With Eloquent JavaScript as your guide, you can tweak, expand, and modify the author's code, or throw it away and build your own creations from scratch. Before you know it, you'll be fluent in the language of the Web.",
    link: "https://play.google.com/store/books/details?id=UAYvDwAAQBAJ&source=gbs_api",
    image: "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
   
  },
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    description:
      "Like it or not, JavaScript is everywhere these days—from browser to server to mobile—and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position. Speaking JavaScript helps you approach the language with four standalone sections. First, a quick-start guide teaches you just enough of the language to help you be productive right away. More experienced JavaScript programmers will find a complete and easy-to-read reference that covers each language feature in depth. Complete contents include: JavaScript quick start: Familiar with object-oriented programming? This part helps you learn JavaScript quickly and properly. JavaScript in depth: Learn details of ECMAScript 5, from syntax, variables, functions, and object-oriented programming to regular expressions and JSON with lots of examples. Pick a topic and jump in. Background: Understand JavaScript’s history and its relationship with other programming languages. Tips, tools, and libraries: Survey existing style guides, best practices, advanced techniques, module systems, package managers, build tools, and learning resources.",
    link: "https://play.google.com/store/books/details?id=qU3rAgAAQBAJ&source=gbs_api",
    image: "http://books.google.com/books/content?id=qU3rAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
 
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
