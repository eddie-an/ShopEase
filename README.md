# Bull Market Outfitters

### Web Page
Hosted on: https://bull-market-outfitters.onrender.com

The checkout process isn't real as Stripe isn't connected to a bank account. To simulate a purchase, please use 4242 4242 4242 4242 as the test VISA card number for checkout. CVV and expiry date can be any value.

### Project description
This repository contains code for front end of the ShopEase application. The server side code is in another repository called [Bull-Market-Outfitters-API](https://github.com/eddie-an/Bull-Market-Outfitters-API).

This application uses the following stack, API integrations, and tools:
- MongoDB for backend
- Express.js for creating API
- React.js for front end
- Node.js for running JavaScript in a server-side environment
- Stripe for handling payments
- Sendgrid for sending emails

The web site and the APIs are hosted on [Render](https://render.com/).

Because the free tier is used, Render spins down any resources that hasn't been used for 15 minutes. This means that when the web page is first loaded after at least 15 minutes of inactivity, there is a delay in fetching data using the API.

To prevent the delay, [Cron-job](https://cron-job.org/en/) is used to ping the API every 10 minutes to keep it awake. 

### Running in development environment
To run this application in development, follow these steps.

- Clone the repo using `git clone https://github.com/eddie-an/Bull-Market-Outfitters`
- start ReactJS by running the following commands
    - `npm install` to install dependencies such as tailwindcss, react, and react-router-dom (if it's the first time running this project)
    - `npm start`

*Note that the running the front end in development might have issues as environment variables need to be configured.



## TODO:
- Change `const params = new URLSearchParams(window.location.search);` to use useParams instead. (Also in success.js)
