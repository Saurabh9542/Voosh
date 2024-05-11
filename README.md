# Authentication System
This is a Node.js authentication system that allows users to register, log in, and authenticate using various social media platforms such as Google, Facebook, Twitter, and GitHub. Users can also edit their profiles and choose to make them public or private.

# Prerequisites
Before you begin, ensure you have met the following requirements:
Node.js installed on your local machine
MongoDB or PostgreSQL database set up and running
Developer accounts set up for Google, Facebook, Twitter, and GitHub if you want to enable social authentication
Clone the Repository
To clone this repository, run the following command:

# Steps to clone and run the repo.
1. Use ```git clone``` and url to my repo
2. SetUP envirnomnets variables
Create a .env file in the root directory of the project and add the following environment variables:

# PostgreSQL connection URI
DATABASE_URL=your_database_connection_uri
# Session secret for Express session
SESSION_SECRET=your_session_secret
# Social media authentication credentials
GOOGLE_CLIENT_ID=your_google_client_id,

GOOGLE_CLIENT_SECRET=your_google_client_secret,

FACEBOOK_APP_ID=your_facebook_app_id,

FACEBOOK_APP_SECRET=your_facebook_app_secret,

TWITTER_CONSUMER_KEY=your_twitter_consumer_key,

TWITTER_CONSUMER_SECRET=your_twitter_consumer_secret,

GITHUB_CLIENT_ID=your_github_client_id,

GITHUB_CLIENT_SECRET=your_github_client_secret,

3. Install Dependencies use command ```npm install```
4. Run the application using ```npm start``` command
