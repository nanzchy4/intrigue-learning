import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Courses from './Pages/Courses/Courses';
import CourseSideNav from './Pages/CourseSideNav/CourseSideNav';
import Details from './Pages/Details/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        // loader: ()=> fetch('http://localhost:5000/courses')
      },
      {
        path:'/courses/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      }
    ]
    
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
