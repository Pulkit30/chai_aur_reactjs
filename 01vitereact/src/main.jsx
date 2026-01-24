import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherUser = "chai aur react";
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit Google
  </a>
);

const ReactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click me to visit Google",
  anotherUser,
);

ReactDOM.createRoot(document.getElementById("root")).render(ReactElement);
