import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Login from "./Login/Login";
import Register from "./Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          element : <Register></Register>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
      ]
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
