import React from "react";
import ReactDOM from "react-dom";
//import Button from "@material-ui/core/Button";
import TelegramLoginButton from "react-telegram-login";

const onAuth = ctx => {
  console.log(ctx);
};
function BotButton() {
  return <TelegramLoginButton botName="ittpAuthBot" dataOnAuth="{onAuth}" />;
}
function App() {
  return BotButton();
}

ReactDOM.render(<App />, document.querySelector("#app"));
