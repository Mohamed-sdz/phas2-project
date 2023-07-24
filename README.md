# Event Scheduler

Event Scheduler is a single-page React application that allows users to create and manage events. Users can add new events to the scheduler using a form, and the data will be saved in the JSON server. The application also provides client-side routing for separating the event scheduler from individual event details.

![Event Scheduler Preview](preview.png)

## Features

- View a list of all events
- Click on an event to view its details
- Add new events with a title and description

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Demo

 

## Technologies Used

- React
- React Router
- Bootstrap (with `react-bootstrap`)
- JSON Server (for the backend)

## Getting Started

To run this application on your local machine, follow the instructions below:

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Install the frontend dependencies:
 ## npm install 
2. Running the Application
Start the JSON server:
Make sure you have the JSON server set up with the appropriate routes for events. See the Backend Setup section for details.
## json-server --watch db.json --port 3001

3. Start the frontend development server:
 ## npm start

The application should now be running locally at http://localhost:3000.


## API
The frontend of this application interacts with a JSON server as a backend. The JSON server provides the following routes for events:

GET /events: Get a list of all events.
POST /events: Add a new event.
GET /events/:id: Get details of a specific event.
Please refer to the Backend Setup section for more details on setting up the JSON server.

Contributing
Contributions are welcome! If you find any issues or have ideas for improvements, feel free to create a pull request or open an issue on the GitHub repository.

License
This project is licensed under the MIT License.

In this `README.md`, i have provided information about the project, its features, technologies used, how to get started, and details on running the application locally. We have also included a link to a live demo, information on how to contribute, and the project's license. Feel free to customize this `README.md` with specific details relevant to your project.
