// import isEmpty from 'lodash.isempty';
// import throttle from 'lodash.throttle';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// // create variable for localStorage
// const STORAGE_KEY = 'feedback-form-state';
// // create object for form data
// let formData = {};

// // DOM elements
// const feedBackForm = {
//   form: document.querySelector('.modal__form'),
//   text: document.querySelector('.input[type="text"]'),
//   tel: document.querySelector('.input[type="tel"]'),
//   textArea: document.querySelector('.input[name="comment"]'),
// };

// // DOM elements
// const feedBackFormFranchise = {
//   form: document.querySelector('.modal__form.email'),
//   text: document.querySelector('.input[type="text"]'),
//   tel: document.querySelector('.input[type="tel"]'),
//   email: document.querySelector('.input[type="email"]'),
//   textArea: document.querySelector('.input[name="comment"]'),
// };

// // first initialization function ********
// // Checks if the form has localStorage and fill all inputs and textarea fields
// // fillFormAreas();

// // Event handlers for the form ********
// // event on submit
// feedBackForm.form.addEventListener('submit', onFormSubmit);
// // event on any input that creates json localStorage object
// feedBackForm.form.addEventListener('input', throttle(jsonFormObj, 500));

// feedBackFormFranchise.form.addEventListener('submit', onFormSubmit);
// // event on any input that creates json localStorage object
// feedBackFormFranchise.form.addEventListener(
//   'input',
//   throttle(jsonFormObj, 500)
// );

// // Functions for the form ********

// // Function that creates json localStorage object
// function jsonFormObj(e) {
//   if (!formData['Modal-name']) {
//     formData['Modal-name'] = e.target
//       .closest('.modal__container')
//       .querySelector('.modal__title').innerText;
//   }
//   // console.log(
//   //   e.target.closest('.modal__container').querySelector('.modal__title')
//   //     .innerText

//   // create object key and object value from form fields
//   formData[e.target.name] = e.target.value;

//   // modify form object to json stringify data
//   const formObj = JSON.stringify(formData);

//   // set modified json form object to localStorage
//   localStorage.setItem(STORAGE_KEY, formObj);
// }

// // Function that initializes on form submit
// function onFormSubmit(e) {
//   // remove reloading the page
//   e.preventDefault();

//   // Sending form data object to console
//   if (isEmpty(formData)) {
//     Notify.failure('Please fill all fields');
//     return;
//   }

//   // API Telegram bot
//   var myHeaders = new Headers();
//   myHeaders.append('Content-Type', 'application/json');
//   var requestOptions = {
//     method: 'post',
//     headers: myHeaders,
//     redirect: 'follow',
//     body: JSON.stringify(formData),
//   };

//   fetch(
//     'https://v1.nocodeapi.com/kyrylo2/telegram/ORExZrbxYHpcYvcg',
//     requestOptions
//   )
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//   // Clean localStorage, form fields and formData object
//   Notify.success('Клас! Ми відправили вашу заявку в Телеграм Бот!');
//   e.currentTarget.reset();
//   formData = {};
//   localStorage.removeItem(STORAGE_KEY);
// }

// // function fillFormAreas(formCurrentObj) {
// //   const formObj = JSON.parse(localStorage.getItem(STORAGE_KEY));

// //   // check if the form contains the data
// //   if (!isEmpty(formObj)) {
// //     // if local Storage is not empty then fill form fields

// //     // object destructuring of local storage in object format
// //     const { name, email, tel, textArea } = formObj;

// //     // also removes undefined if one of the fields is empty
// //     feedBackForm.email.value = email != undefined ? email : '';
// //     feedBackForm.textArea.value = textArea != undefined ? textArea : '';
// //     feedBackForm.tel.value = tel != undefined ? tel : '';
// //     feedBackForm.name.value = name != undefined ? name : '';
// //   }
// // }
