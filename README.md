# GitHub Profile Viewer

GitHub profile page with ReactJS & GitHub API

*Learning better coding pratices with ReactJS + ES6 + API calls*

## Config

You will need to create a GitHub Application to be able to use their API (requires two keys `Client ID` and `Client Secret`)
To do that you need to:

```sh
Go to Settings > OAuth applications > Developer applications and [Register a new application]

Application Name: # you can enter whatever you want

Homepage URL: # http://localhost:8080

Application description: # optional

Application callback URL: # http://localhost:8080/_oauth/github

```
After that's created you need to copy the Client ID and Client Secret keys for that application to `src/components/App.jsx` at lines `76` and `77` fill those two fields.

## Install

```sh
$ npm install
```

## Usage
```sh
$ webpack-dev-server
```

```sh
run localhost:8080/app
```
