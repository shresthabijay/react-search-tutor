# Objective
We will develop together a web application with the idea of getting to know your knowledge of different topics.

**Please do not develop more than is expected on the section "What you should prepare ahead of time".**

# Pairing exercise

Create a web application that allows searching for activities.

Think about the needs of a traveler that is looking for things to do in a destination.

For example, a person visiting Berlin that is interested in things to do during their visit.

This repository provides you with a basic setup and a static JSON file containing sample activity data.

## Product requirements:

- At a minimum, we expect a search feature that lists activities based on user input.
- You should build at least one API endpoint which your frontend application can use to get data or search results.
- Based on the provided data, you can add additional features which you think may be useful for travelers.
- User experience matters. We value the delivered product as much as we value technologies used.

If you'd like to build this step by step, you can follow this guidance:
- Start by creating the API endpoint
- Create a simple app which uses the endpoint to get data, search and display a list of activities
- Improve the visual display of the app and search results
- If time allows, add any additional features you think could be useful

## Technical requirements

- Use the tools, libraries or frameworks you think are appropriate with the following guidelines:
  - Using CLI creator tools that setup a build toolchain is fine (vue-cli, create-react-app, etc).
  - Please don't use creator apps or starter kits that setup a whole code structure for you. We want to see what you come up with.
  - We'd prefer to see actual CSS code (or a CSS in JS solution) rather than usage of a UI library.

## Interview requirements
- We'll expect you to share your screen while creating this application and talk us through what you're doing
  - Our video conferencing app support screen sharing
  - Turning on Do Not Disturb mode can be helpful during the course of the exercise :)
  
## What you should prepare ahead of time:
- Clone this repository to your local machine
- There is a server/index.js file with a minimal Express setup
  - You can run this server with `npm run server` after performing an `npm install`
  - **If you prefer to use another Node.js server** (Koa, Hapi), please install it and prepare a **minimal setup** ahead of time
  - **If you prefer to use another backend language** (Java, PHP, Ruby, etc), please prepare a **basic setup** with one endpoint ahead of time
- Setup a simple development environment with your tools of choice. Use the IDE of your preference.
- Please include the basic Frontend structure using:
  - Using vue-cli, run the following to start an app:
    - `npx @vue/cli create search-app`
  - Using React CLI, run the following to start an app:
    - `npx create-react-app search-app`
- You can choose to use a different framework, or no framework at all, but we expect you to be ready to start developing and not spend time on setting up an environment.
