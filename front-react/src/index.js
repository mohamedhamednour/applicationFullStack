import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import reportWebVitals from "./reportWebVitals";
import AddItem from './components/AddItem'
import UpdateItem from './components/UpdateItem'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import  {Store}  from "../src/components/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={Store}>
      <App />
    </Provider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "addItem", element:<AddItem /> },
      { path: ":id", element:<UpdateItem />},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>   // i romve it becouse this ruern mulite render to use effect when start app by StrictMode return two call use effact here i dont need development i use it in production build
);

reportWebVitals();
