/* global document sweetAlert */

import $ from 'jquery';
import app from './app';
import './sweet-alert';

document.addEventListener('DOMContentLoaded', () => {
  app.init(); // testing my custom module
  console.log($); // testing jQuery
  sweetAlert('Hello world!'); // testing old skool external plugin import
});
