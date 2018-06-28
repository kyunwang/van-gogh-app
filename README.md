<h1 align="center">Van Gogh Multi Media Tour & Dashboard</h1>

<div align="center">
  :chart_with_upwards_trend: :bar_chart: :tada: <img src="https://img.shields.io/badge/vanGogh-v1.0.0-yellow.svg">
</div>
<div align="center">
  <strong>A real-time Markdown renderer for everyone!</strong>
</div>
<br />

![app image](/documents/images/app-home-screen.png)
![dashboard image](/documents/images/home.png)


# Van Gogh Multi-Media Tour/Dashboard

Van Gogh Multi-media Tour and Dashboard is a tour personalising and analytics solution made with SSR Vue/Vuex/Node. This application is a concept prototype made for the Van Gogh Museum in Amsterdam.


# Table of Content
- [Getting started](#getting-started)
- [Goal of the prototype](#goal-of-the-prototype)
- [Features](#features)
- [About the stack](#about-the-stack)
- [Data model](#)
- [Data lifecycle](#)
- [Optimalizations](#optimalizations)
- [Wishlist](#wishlist)

# Getting started
**Before you start:** Make sure you have `node` and `mongodb` installed on your computer

If you want to work on this project, follow these steps:
1. First we clone (fork if you want) the repo.
	Run `git clone https://github.com/VincentKempers/van-gogh-app.git` in your terminal
1. create a file called `vars.env` in the root of your folder
1. Add a `PORT=3000` and `DATABASE=mongodb://localhost:27017/<your-db-name>` in `vars.env
1. Start up the mongo database by running `mongod` in your terminal
1. `cd` to the repo and run `npm install` to install the dependencies

1. Run `npm run dev` to start the application
1. Go to `http://localhost:3000/`
1. Happy coding!

# Goal of the Prototype
The goal of the application is to serve as a concept to verify whether this way of getting insight about the visitors of the museum works or not. This will serve as a possible steppingstone/milestone for the Van Gogh Museum.

# Features
The following are the features of the App and Dashboar side from the prototype.

## App features
- Choose custom theme's for your own tour
- Generate an personal tour (static as for now)
- Listen to the stories behind a piece
- Choose where you start yourself during your tour
- Keeps track of the tour checkpoints

## Dashboard features
- Shows graphs about the amount of visitors divided over all four floors (Floor 1 is connected)
- Shows the details from each floor (Floor 1 only for the prototype)
- Shows the details from each painting (One only for the prototype)

# About the stack
Our stack consists of the following main dependencies.

- [Vue][vue]
- [VueX][vuex]
- [Vue Router][vue-router]
- [Mongoose][mongoose] (MongoDB)
- [Chart.js][chart.js]
- [Socket.io][socket.io]

We have chosen to work with Vue for the following reason:
- We had an interest in learning Vue
- Vue is quick to start with
- The learning curve is relativly low

And our reason for choosing to make the app SSR (Server Side Rendered)
- SSR rendered applications are quicker
- There are more options to improve performance
- The application can be made to work without javascript support


# Data model

```JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Painting = new Schema({
	name: {
		type: String,
		isRequired: 'The name of the painting needs to be assinged',
	},
	location: {
		type: Number,
		isRequired: 'The floor/location of the painting needs to be defined',
	},
	painting_no: String,
	origins: String,
	description: String,
});

module.exports = mongoose.model('Painting', Painting);


```

# Data lifecycle
![](/documents/images/datacycle1.jpg)

# Visual flow

# Optimalizations
The following optimalizations have been/are to be implemented:
- [x] Lazyloading images
- [x] Gzipping
- [x] Js compression
- [ ] Service worker
- [ ] Font subsetting
- [ ] Fonts async loading
- [-] Code-splitting

# Our Prototype application
[Here it is.](https://github.com/VincentKempers/van-gogh-project)

# Wishlist
What we would like to have done if we had more time.

- [x] Create an overview page of the selected themes for the user
- [ ] Make all actions available when there is no javascript (Partly done)


...

# License
Code [GPLv3](LICENSE)

Audio files and Art images copyright Van Gogh Museum



[vue]: https://vuejs.org/
[vuex]: https://vuex.vuejs.org/
[vue-router]: https://router.vuejs.org/
[mongoose]: http://mongoosejs.com/
[socket.io]: https://socket.io/
[chart.js]: https://www.chartjs.org/