import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const NewRoute = () => {
  return (
  <div>
  <p>New Route</p>
  </div>
  );
  };

  const Home = () => {
    return (
    <div>
    <p>Home</p>
    </div>
    );
    };

    const Contact = () => {
      return (
      <div>
      <p>Contact</p>
      </div>
      );
      };

      const Student = ({ match }) => {
        const { studentname } = match.params;
        return (
        <div>
        <p>Student</p>
        <div>
        <div>{`The student name is "${studentname}"!`}</div>
        </div>
        </div>
        );
        };
        
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
