<h1 align="center">Van Gogh Multi Media Tour & Dashboard</h1>

<div align="center">
  :chart_with_upwards_trend: :bar_chart: :tada: <img src="https://img.shields.io/badge/vanGogh-v1.0.0-yellow.svg">
</div>
<div align="center">
  <strong>van Gogh museum complete package for data analyzation</strong>
</div>
<br />

![app image](/documents/images/app-home-screen.png)
![dashboard image](/documents/images/home.png)


# Van Gogh Multi-Media Tour/Dashboard

Van Gogh Multi-media Tour and Dashboard is a tour personalising and analytics solution made with SSR Vue/Vuex/Node. This application is a concept prototype made for the Van Gogh Museum in Amsterdam.

The prototype can be found [here live][live]


# Table of Content
- [Getting started](#getting-started)
- [Goal of the prototype](#goal-of-the-prototype)
- [Features](#features)
- [Our stack](#about-the-stack)
- [Data model](#)
- [Data lifecycle](#)
- [Optimalizations](#optimalizations)
- [Wishlist](#wishlist)
- [Kevin's ReadMe](#kevins-readme)

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

# Our stack
Our stack consists of the following main dependencies.

- [Vue][vue]
- [VueX][vuex]
- [Vue Router][vue-router]
- [Mongoose][mongoose] (MongoDB)
- [Chart.js][chart.js]
- [Socket.io][socket.io]



# Data model
We setup the model based on the tours instead of the paintings or works. If there was more time we could add this in the near future.
```JS
const Tour = new Schema({
	device_id: {
		type: String,
		isRequired: 'device needs an id',
	},
	current_way_point: {
		type: Number,
		default: 0, // 0 means pausing or walking / not at a tour item
	},
	current_floor: Number,
	start_tour_time: Date,
	end_tour_time: Date,
	date: {
		type: Date,
		default: helpers.getCurrentDate(),
	},
	cancelled: {
		type: Boolean,
		default: false,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	tour: [
		{
			id: {
				type: Number,
				isRequired: 'Device needs an id',
			},
			start_time: Date,
			end_time: Date,
			type_tour: String,
			painting: String,
			painting_no: String,
			imageUrl: String,
			floor: Number,
			origins: String,
			description: String,
			visited: {
				type: Boolean,
				default: false,
			},
			theme: {
				type: String,
				isRequired: 'A tour has to be assigned',
			},
			audio: [
				{
					title: String,
					audio_url: String,
				},
			],
		},
	],
});

module.exports = mongoose.model('Tour', Tour);

```

# Data lifecycle
![](/documents/images/datacycle1.jpg)


# Optimalizations
The following optimalizations have been/are to be implemented:
- [x] Lazyloading images
- [x] Gzipping
- [x] Js compression
- [ ] Service worker
- [ ] Font subsetting
- [ ] Fonts async loading
- [ ] Code-splitting

# Our Prototype application
[Here it is.](https://github.com/VincentKempers/van-gogh-project)

# Wishlist
What we would like to have done if we had more time.

- [x] Create an overview page of the selected themes for the user
- [ ] Make all actions available when there is no javascript (Partly done)


...


# Kevin's readme

# Table of Content
- [Learning goals](#learning-goals)
- [What I have worked on](#what-i-have-worked-on)
- [The competences](#the-competences)
- [The result](#the-result)
- [Conclusion](#consulsion)



# Learning goals
At the start of the project I have set a few goals I would like to tackle.

- Improve design and ux skills
- Try using techniques to improve performance
- Use something new
- Have a look into the world of analytics

With design I have struggled before and am steadily improving when I am minding it. I want to experiment with design somewhat to put up a good to look at and to work with product.

Performance matters is a course three week course we had had before. But as the pace was quick and many concepts flew by me. I wanted to try and implemment some of the concepts in this project.

As a techie I am always curious about tech. That is why I want to take the opportunity to try out something new.

How would you catch analytic data apart from using third-party products? Well that was the question I asked myself after reading the briefing of this project. That is why I would like to try out how I could create a simple implementation myself.

# What I have worked on
So which part of the application am I responsible for? In my case my time was mostly invested in the back-end and the tour application, whereas I sometimes jumped in making the dashboard.

<details>
	<summary>Here are the app sketches</summary>
	
![](/documents/images/app_dassketch1.jpg)
![](/documents/images/app_dassketch2.jpg)
![](/documents/images/app_sketch3.jpg)
</details>

These are the sketches made for the app front-end design. Most of the layout did went through and some of the design has been altered while in the making.

![](/documents/images/selection_screen.png)

![](/documents/images/painting_audio.png)

The main pages I have worked on in the app are:
- Theme selection
- Theme selection overview
- Audioscreen

In the first week I have also made half of the pages for the prototype to show to the clients, which you can find [here](https://github.com/VincentKempers/van-gogh-first-prototype)

For the current prototype I had to set up webpack which I have never done before. It took some time and looking around and finally ended up well. The webpack in this project consists of three files, a base, server and client one. The base is the basis for both the server and the client configurations.

After discussing with Vincent I also wrote and refined the model a few times before freezing that code for the prototype.

```
	// Super simple server counter which is not saved in the database
	const tourCounter = {
		activeTour: 0,
		paintings: {},
	};
```

I found out about referencing documents a bit before setting the model up. However as they are references and could not be used as a template as far as I knew.

The base of socket connection and setup for the calls I have also made to be used in both the app and dashboard.

```
function exitAudio(tourId, paintingId) {
	Tour.findOneAndUpdate(
		{ _id: tourId, 'tour.painting_no': paintingId },
		{
			current_way_point: 0, // 0 means walking or somewhere else
			$set: { 'tour.$.end_time': getCurrentDate() },
		}
	).then(tour => {
		const count = decrementCount(tourCounter.paintings[paintingId]);
		tourCounter.paintings[paintingId] = count;

		const piece = tour.tour.filter(painting => painting.painting_no === paintingId);
		io.to('Dashboard').emit('exitAudio', piece[0], count, paintingId);
	});
}
```

Before the sockets were u and connected I have made an api to test the database and passing of data first. The api is also used to get data from the database to display on the dashboard.

![](/documents/images/dashboard_floor.png)

I have not worked on the styling of the dashboard, but did work on displaying the information received through the sockets. Vincent had set a base which was a static made graph. With the static graph I have connected the sockets with and let it update based on the received data. I have also worked on making the device detailpage. And created a date and data generator for 3 of the 4 floors which aren't connected to the sockets for this prototype.

<details>
	<summary>Dashboard sketches here</summary>

![](/documents/images/dashboardketch1.png)
![](/documents/images/dashboardketch2.png)
</details>



# The competences
The competences are actions I have done which are closely related to the courses I have taken in the minor.

## Sending and receiving data real-time (Real-time web)
One of the harder things I have done is making use of sockets. I find it very hard to get an overhead of it without thoroughly thinking data traversing through. Making the choice whether to make calls to the database in a socket call for example a choice I had to make.

```
function sendPosition(tourId, paintingId, locatedFloor) {
	Tour.findOneAndUpdate(
		{
			_id: tourId,
			'tour.painting_no': paintingId,
		},
		{
			current_way_point: paintingId,
			current_floor: locatedFloor,
			$set: {
				'tour.$.start_time': getCurrentDate(),
				'tour.$.visited': true,
			},
		}
	).then(tour => {
		if (tourCounter.paintings[paintingId] === undefined) {
			tourCounter.paintings[paintingId] = 0;
		}

		const count = incrementCount(tourCounter.paintings[paintingId]);
		tourCounter.paintings[paintingId] = count;
		console.log('enter', count);
		const piece = tour.tour.filter(painting => painting.painting_no === paintingId);

		io.to('Dashboard').emit('sendPosition', piece[0], count, paintingId);
	});
}
```

## Trying something new (Vue) (Wafs)
Wafs was about creating a web app from scratch using vanilla javascript and micro libs. It's goal was to create modular code which with Vue components was possible. Trying Vue out I get exposed to new concepts and understand better hoe code can be modularized.

## Server-side rendering and performance optimalizations (Performance matters)
One of the benefits of server-side rendering(SSR) is the shorter load time compared to most client-side apps. Also by combining Vue with SSR the app can also work without javascript. There are also more ways to optimalize SSR applications like gzipping. I have tried out a few optimalization techniques, but would have liked to try out more like a service worker for example.

## Audits for accessibility (Web design/CSSTR)
Based on the audits made with Google Lighthouse and a plugin called aXe I have upped the Accessibility scroe from 70 to almost 100, namely 94. Because of a bug of the audit system getting the full marks is not possible. By adding aria labels for example the score can go up. And making all the routes as tabbable as possible (app side).

## Simple feature detect (Browser tech)
Sadly enough I have not gotten the opportunity to use feature detection a lot but did get one in. That would be lazy loading images with `IntersectionObserver`.

```
if (window.IntersectionObserver) {
	this.observer = new IntersectionObserver(entries => {
		const image = entries[0];
	
		if (image.isIntersecting) {
			this.intersected = true;
			this.observer.disconnect();
		}
	});

	this.observer.observe(this.$el);
} else {
	this.intersected = true;
}
```

# The result
*[My PR's can be found here][myPr]*

If I were to say whether I am satisfied with the prototype I would be hesistant, because much more could be build and showed. But nevertheless I am still proud of the prototype because I have challanged myself immensely making two applications in a sense, while changing concepts twice during the project.

The collaboration with Vincent was also a good experience. We could discuss and fill the gaps we each had. But of course we could not fill all of them. For example, before we ended up at the current concept, we were still hesistant to implement it until we received a push.

Because of time constrains we also couldn't finalize and implement style the dashboard really nicely. Nor could we make use of all the feedback we have gotten about the app and dashboard. This was a huge disappointment but as said before for what could be done within the limited time we had after switching concepts, I am still proud of the results.

![](/documents/images/app-home-screen.png)
![](/documents/images/dashboard_overview.png)

# Conclusion
In the limited time we had we have done a lot and switched up a lot too. For these 5 weeks I had a few learning goals:
- Improve design and ux skills
- Try using techniques to improve performance
- Use something new
- Have a look into the world of analytics

Which I have not all met. During these weeks I have used Vue which was new to me and notices similarieties and differences with React, which I have used before. I think I now have a solid base for Vue, albeit there is still plenty room for improvement. Another goal was to try to use analytics without third-party tools to learn about the implementation of analytics which I have done. My goal to use performance techniques and improve design and ux skills was not met. I did play get the opportunity to play with design and improve performance a bit, but I do not consider it enough.

As for implementing matter from the minor courses. None really have received a focus. For each of the courses I and Vincent have used concepts and techniques from and integrated it withing the prototype. As for now I can say for sure that I have learned and tried out a lot.

# License
Code [GPLv3](LICENSE) - Vincent Kempers & Kang Yun Wang (Powered by Pineapple World)

Audio files and Art images copyright Van Gogh Museum

[vue]: https://vuejs.org/
[vuex]: https://vuex.vuejs.org/
[vue-router]: https://router.vuejs.org/
[mongoose]: http://mongoosejs.com/
[socket.io]: https://socket.io/
[chart.js]: https://www.chartjs.org/


[myPr]: https://github.com/VincentKempers/van-gogh-app/pulls?q=is%3Apr+author%3Akyunwang+is%3Aclosed
[live]: https://vgm-tour.herokuapp.com