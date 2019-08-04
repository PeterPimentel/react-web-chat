<h1 align="center" style="border-bottom: none;">💬 React  Chatbot UI</h1>
<p align="center">Work in progress</p>
<h4 align="center">This React app, is a fully customizable web-based client for Chatbots.</h4>
<p align="center">
    <img src="./docs/images/app_sample_0.png" alt="React chat logo" width="240"/>
    <img src="./docs/images/app_sample_1.PNG" alt="React chat logo" width="240"/>
</p>

#### A solid foundation
React, Redux, Ant Design, React Router, Firebase integration. A perfect combination of best frameworks.
<p align="center">
    <img src="./docs/images/icon-react.png" alt="React chat logo" width="60px"/>
    <img src="./docs/images/icon-redux.png" alt="React chat logo" width="60px"/>
    <img src="./docs/images/icon-antdesign.png" alt="React chat logo" width="60px"/>
    <img src="./docs/images/react-router-dom.png" alt="React chat logo" width="60px"/>
    <img src="./docs/images/firebase-icon.png" alt="React chat logo" width="120px"/>
</p>

#### How to use

```bash
$ git clone https://github.com/PeterPimentel/react-web-chat
$ cd react-web-chat/
$ npm install
```

1. Rename the file `.env.example` to `.env`
1. Run the app in the development mode `npm start`.
1. Open [http://localhost:3000](http://localhost:3000) to view it full screen in the browser.
1. You can see in the file `samples/embedded-chat/index.html` how to embedded the chat into your page.

<span  style="color:#660000">Please note this app is only the UI, you need implement the back-end app to connect to the NLU service.<span>

----------------

#### Customize

##### 🛡️ Auth
If you want a login page before your chat screen change in the `.env` file `REACT_APP_REQUIRE_AUTH` to `true`.
It's important that you fill the other variables about the firebase credentials.

##### 🤖 NLUs
In the `src/utils/` you can find the files responsibles to convert the NLU format to the format used by the app.

##### 🌈 Colors
In the `src/styles/theme.css` you can customize the colors of your chat.

----------------

😃 If you liked this project and used it in yout chatbot please let me know!
