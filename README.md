# Drill Credits & Details

This application was built for Flatiron School's React Redux portfolio project. This repository is the front end. The back end is [here](http://github.com/fut0k0/credits-details-backend).

## Project Requirements

Some basic requirements for the project included:

* React single page application
* Redux to manage state
* Rails API for data persistence
* react-router with 3 routes
* async actions

## Packages & Versions

The front end was made with `create-react-app` using:

* react 16.12.0
* react-redux 7.1.3
* react-router-dom 5.1.2
* redux 4.0.5
* redux-thunk 2.3.0

## Installation

Download this repository. Run `npm install`. Make sure the [back end](http://github.com/fut0k0/credits-details-backend) is up and running, then run `npm start`. This front end should be running on localhost port 3001. If port 3001 is unavailable, update `config/initializers/cors.rb` on the back end with the appropriate port.

## Intent & Use

The intent of this application is to view an album collection by custom combinations of credits and details. Drill into a collection by artist, producer, mixer, etc. Look for commonalities and quickly find and group albums that meet certain criteria. View large collections in unique ways.

For example, how many David Bowie albums do I have? Which Grunge records from 1991 do I have? Which Rock albums were produced by Tony Visconti? Of those, which ones did Tony Visconti also mix? Are any of those Morrissey albums?

To use the application, simply create an account. The info page has directions and guidelines.

### Note

Log in with username "abc" / password "abc" to access an account with a small album collection already built. This allows for an idea of how the application works without having to build an album collection from scratch.
