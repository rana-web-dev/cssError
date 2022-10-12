import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './main/Main';
import Quiz from './components/quiz/Quiz';
import Home from './components/home/Home';
import QuizContent from './components/quizContent/QuizContent';
import NotFound from './components/notFound/NotFound';
import Blog from './components/blog/Blog';
import Statistics from './components/statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/Home',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: '/Statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/Quiz',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quiz></Quiz>
        },
        {
          path: '/Quiz/:id',
          loader: async ({ params }) =>
            fetch('https://openapi.programming-hero.com/api/quiz/' + params.id),
          element: <QuizContent></QuizContent>,
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
