import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ComplainPostProvider from "./ComplainPostProvider.jsx";
import ComplainPost from "./ComplainPost.jsx";
import CreatePost from "./CreatePost.jsx";
// import ComplainPostProvider from "./ComplainPostProvider.jsx";
/* case "home":
        navigate('/StudentPanel');
        break;
        // return <ComplainPostProvider/>;
 
       
      case "Create post":
        // return <ComplainPost/>;
        navigate("/StudentPanel/CreatePost");
        break;
      case "Laundary":
        // return <ComplainPost/>;
        navigate("/StudentPanel/Laundary");
        break;
      case "Book Bus":
        // return <ComplainPost/>;
        navigate("/StudentPanel/BookBus");
        break;
      case "Application":
        // return <ComplainPost/>;
        navigate("/StudentPanel/Application");
        break;*/
const router = createBrowserRouter([
  {
    path: "/StudentPanel",
    element: <App />,
    children:[
      {
        path:"",
        element:<ComplainPostProvider/>
      },
      {
        path:"CreatePost",
        element:<CreatePost/>
      }
      ,{
        path:"Laundary",
        element:<ComplainPost/>
      }
      ,{
        path:"BookBus",
        element:<ComplainPost/>
      },{
        path:"Application",
        element:<ComplainPost/>
      }
      

    ],
    
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
     {/* <App/> */}
  </React.StrictMode>
);
