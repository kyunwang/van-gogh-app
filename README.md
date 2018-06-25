# Van Gogh Multi-Media Tour/Dashboard

Van Gogh Multi-media Tour and Dashboard is a tour personalising and analytics solution made with SSR Vue/Vuex/Node. This application is a concept prototype made for the Van Gogh Museum in Amsterdam.


# Table of Content
- [Getting started](#getting-started)
- [Goal of the prototype](#goal-of-the-prototype)
- [Benefits of the prototype](#benefits-of-the-prototype)
- [Features](#features)
	- [App features](#app-features)
	- [Dashboard features](#dashboard-features)
- [About the stack](#about-the-stack)
	- [Code snippets](#code-snippets)
	- [setup???](#)

- [Planning](#planning)
- [Research](#research)
	- [At Van Gogh](#at-van-gogh)
	- [User scenario](#user-scenario)
	- [At Moco museum](#at-moco-museum)
	- [At Rijksmuseum](#at-rijksmuseum)
- [Sketches](#sketches)
	- [App sketches](#app-sketches)
	- [Dashboard sketches](#dashboard-sketches)

- [Tests](#tests)

- [Data model](#)
- [Data lifecycle](#)
- [Visual flow](#)
- [Optimalizations](#optimalizations)
- [Service Worker](#service-worker)

- [Wishlist](#wishlist)
- [Course requirements](#)
- [Proposals for Van Gogh Museum](#proposals-to-van-gogh-museum)



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

# Benefits of the Prototype
To improve the experience of the visit by getting insight with the collected data
With the insights visitors can be redirected to less congested areas, paintings can be relocated strategecally as well as security. In short Van Gogh can improve the visitors experience by utilizing the collected data.

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

## Code snippets

## Setup
![](/documents/images/webpack_ssr_cycle.jpg)

# Planning

# Research

Our research started with experiencing the current tour of the Van Gogh Museum and we have noted several areas of improvement. We also went to the Moco museum and Rijksmuseum to compare the tours and experience.

## At Van Gogh
The improvement points and the notes are as following:

**Points**
- You do not know where to start
- The Own pace tour's drag navigation is is not handy.
- We expected some guidance in the tour
- We missed some stories about Van Gogh as some items are skipped
- Too many switching from screens when something is not listed in the highlight tour
- The order of the highlight tour seems random
- The flow felt awkward from the exhibition tour
- A lot of time is consumed by searching for an item in the tour

**Notes**
- Locations from the MMT are more congested
- Groups seem te be formed unconsciously
- You always have to tab on *play* as there is no auto play
- Floor 1 seems to be the bussiest and floor 2 the less
- At the time of research a Highlight piece was places right before the starts which caused a heavy congestion.
- Had to search for the exhibition hall (did not have a map)
- The floors are divided in chronological order for storytelling
- The current application does not ahve a overview of all the work in the exhibition hall
- Couldn't find the volume buttons on the device at the start. (no physical button)


## User scenario
*The scenario is in Dutch*

Jenkin Lloyd Jones is hier in Nederland om cultuur te bekijken en heeft besloten om een multi media tour te doen in het Van Gogh Museum. Dit is zijn eerst keer in het Van Gogh Museum. Jenkins heeft wel eens van Van Gogh gehoord en wilt meer weten over zijn werken. Hij heeft gehoord dat hij de natuur werken niet mag missen.

Hij neemt de multi media tour tour en ziet dat hij een tour kan doen. Jenkins kiest voor de thematour en ziet een lijst met thema's waaruit hij kan kiezen en kiest een thema die hem interesseerd. Hij vindt zijn bloemen en merkt dat hij meer thema's kan kiezen. Jenkins begint meer thema's te kiezen zoals Legacy Van Gogh en Wealth of Nature.

Een tour wordt voor hem gegenereerd gebaseerd op zijn keuzes. Zijn startpunt begint in dit geval bij verdieping 1 over de boeren en "Simple life". Jenkins merkt dat het bij de Potato Eaters erg druk is en besluit om een ander stuk te kiezen die de op de kaart is weergeven. Later komt Jenkins terug en ziet dat het minder druk "voor hem" is en pakt de route weer op. Jenkins heeft niet het gevoel dat het zo druk is omdat hij zelf door kan gaan naar een ander stuk.

## At Moco museum
At the time of visit Moco museum had the following exhibitions going on:
- Banksy Laugh now
- Icy & Sot – A Moment of Clarity

These are the following point notes at Moco museum:
- The tour was an audio only tour
- Not all pieces had audio
- The audio felt somewhat monotone, without vigor
- The halls and corridors were small and congested
- All people with an audio tour gathered somewhat to the audio points
- There are sign indicating what kind of pieces are in a room

## At Rijksmuseum
Rijksmuseum is a huge museum featuring works from all over the world. The tour was walked with the app from Rijksmuseum which can be found in the app/play store. The app provides tours and a map.

These are the notes we made while visiting:
- The tour highlight your location (area on the floor only)
- There is enough room for many groups in the museum
- The tours provided are linear
- Tour progression hand manual
- The audio sound is somewhat enthousiastic
- Not all of the content provides value
- The accurate location is hard to get from the map.
- Searching is disturbing
- The highlight tour skips an enormous amount of pieces (e.g. shows 3 itmes from a totla of 20-40)
- You are more invested in the app/device than the piece
- The "see more" option takes awat the focus
- The audio icon around the piece to indicate the availability of audio is subtile and easily overlooked.
- Observation: The device provided by Rijsmuseum and Van Gogh museum are the same
- Mosly tourists seem to be using the tour(s)
- We reckon that the tour users are not regulars
- There is no story being told

**About the map**
- Indicates where you are (roughly)
- Provides visual cue's where you should go to
- Current area is highlighted
- The pieces are hard to find




# Sketches

## App Sketches
<details>
	<summary>The app sketched (click here)</summary>

![](/documents/images/app_sketch1.jpg)
![](/documents/images/app_sketch2.jpg)
![](/documents/images/app_sketch3.jpg)
</details>

## Dashboard Sketches
<details>
	<summary>The dashboard sketched (click here)</summary>

![](/documents/images/dashboard_sketch1.jpg)
![](/documents/images/dashboard_sketch2.jpg)
</details>



# Tests


# Data model

# Data lifecycle
![](/documents/images/datacycle1.jpg)

# Visual flow

# Optimalizations
The following optimalizations have been/are to be implemented:
- [x] Lazyloading images
- [x] Gzipping
- [ ] Js compression
- [ ] Service worker
- [ ] Font subsetting
- [ ] Fonts async loading
- [ ] Code-splitting

# Service worker




# Our Prototype application

[Here it is.](https://github.com/VincentKempers/van-gogh-project)

# Wishlist
What we would like to have done if we had more time.

- [ ] Create an overview page of the selected themes for the user
- [ ] Make all actions available when there is no javascript (Partly done)

# Proposals for Van Gogh Museam
In case that the Van Gogh Museum wants to further develop this application(dashboard). We have written down several possibilities this application can leverage for them.

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