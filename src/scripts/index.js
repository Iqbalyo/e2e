import '../styles/main.css';
import 'regenerator-runtime';
import App from './views/app';
import HeaderPage from './views/component/header';
import swRegister from './utils/sw-register';
import filter from 'lodash/filter'; // Impor filter dari lodash

document.addEventListener('DOMContentLoaded', () => {
  customElements.define('header-only', HeaderPage);
  const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('.nav-bar'),
    content: document.querySelector('#maincontent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });

  // Call toggleNavBar after the DOM is loaded
});

// Set up filterContacts function
const filterContacts = (contacts, contactType) => {
  filter(contacts, contactType === 'all' ? {} : { type: contactType })
    .forEach(renderContact);
};

// Example usage of filterContacts
const contacts = [ /* array of contacts */ ];
const contactType = 'someType'; // Replace with actual contactType value
filterContacts(contacts, contactType);
