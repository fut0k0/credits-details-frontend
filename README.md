# Flatiron School React Redux Portfolio Project

This application was built for Flatiron School's React Redux portfolio project. This repository is the front end. The back end is [here](http://github.com/fut0k0/credits-details-backend).

## Requirements

Some basic requirements for the project included:

* React single page application
* Redux to manage state
* Rails API for data persistence
* react-router with 3 routes
* async actions

## Details

The front end was made with `create-react-app` using:

* react 16.12.0
* react-redux 7.1.3
* react-router-dom 5.1.2
* redux 4.0.5
* redux-thunk 2.3.0

## Installation & Use

Download this repository. Run `npm install`. Make sure the [back end](http://github.com/fut0k0/credits-details-backend) is up and running, then run `npm start`. This front end should be on localhost port 3001. If port 3001 is unavailable, update `config/initializers/cors.rb` on the back end with the appropriate port.

### Note

Logging in with username "abc" / password "abc" will load an account with data that makes things more useful and interesting (to get an idea of how the application works).
