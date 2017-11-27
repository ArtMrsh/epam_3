const submitBtn = document.querySelector(".submit-form");
let inputs = document.querySelectorAll('form input');

function logData (e) {
   e.preventDefault();
   for(let i of inputs) {
      console.log(i.name, ":", i.value);
   }
};

submitBtn.addEventListener('click', logData);
