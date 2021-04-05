import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './services/auth-service';
import ImageUploader from './services/imageUploader';
import Database from './services/database';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const dataBase = new Database();

ReactDOM.render(
  <React.StrictMode>
    <App 
    authService = {authService}
    imageUploader = {imageUploader}
    dataBase = {dataBase}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

