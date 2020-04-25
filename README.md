MyReads project for Udacity's [React Developer Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

## Instructions

`git clone https://github.com/LCSmith87/MyReads && cd MyReads`

`npm install && npm start`

## About

MyReads is a library app for cataloging books that I've read, am currently reading, and books I want to read.

Udacity requires code to follow the following guidelines


### Udacity Style Guides

[HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)

[CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)

[JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

[Git Style Guide](https://udacity.github.io/git-styleguide/)

### Project Rubric

#### Application Setup

- [x] Requires only `npm install` and `npm start` to get installed and launched
- [x] An updated README that describes the project and has instructions for installing and launching

##### Main Page

- [x] Main page shows 3 shelves for books: currently reading, want to read, and read. Each book shown on the correct shelf along with its title and all of its authors
- [x] The main page shows a control that allows users to move books between the shelves and the functionality moves with the book
- [x] Information persists between pages or on refresh

##### Search Page

- [x] The search page has a search input field which shows the matched books on the page along with title/authors
- [x] Search results are not shown when there is no text in the search input box
- [x] Invalid queries also don't show search results
- [x] Works correctly regardless of the author or thumbnail missing
- [x] Multiple word searches work
- [x] Books are on the proper shelves
- [x] Move bookshelf functionality works and persists from home->search and search->home

#### Routing

- [x] The main page contains a link to the search page that is functional and displays the url in the address bar
- [x] The search page contains a link to the home page that is functional and displays the url in the address bar

#### Code Functionality

- [x] Component state is passed down from parent->child with proper React paradigms such as not directly setting state
- [x] Books have the same state on both pages

### Additional Features

TODO: add additional features


## Technology

Built with ReactJS using [react-create-app](https://github.com/facebook/create-react-app)

