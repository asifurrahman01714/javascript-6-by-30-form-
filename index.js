const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('.btn');
const nameList = document.querySelector('#name-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
  if (fullName.value == '' && email.value == '' && password.value == '') {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');

    // Creating new title
    const newNamenewEmail = document.createElement('th');
    newNamenewEmail.innerHTML = fullName.value;
    newRow.appendChild(newNamenewEmail);

    // Creating new author
    const newEmail = document.createElement('th');
    newEmail.innerHTML = email.value;
    newRow.appendChild(newEmail);

    // Creating new Year
    const newPassword = document.createElement('th');
    newPassword.innerHTML = password.value;
    newRow.appendChild(newPassword);

    // Displaying in UI
    nameList.appendChild(newRow);
  }
});
