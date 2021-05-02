
//   var forms = document.getElementsByClassName('needs-validation');
//   console.log(forms)
//   var validation = Array.prototype.filter.call(forms, function(form) {
//     form.addEventListener('submit', function(event) {
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       form.classList.add('was-validated');
//     });
//   });
let uname = document.getElementById("uname");
let isValidUname = false;
let pwd = document.getElementById("pwd");
let isValidPwd = false;
let checkInput = document.querySelector(".form-check-input");
let checkedInput = false;
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    if (!checkform()) {
        e.preventDefault();
    }
});

function checkform() {
    if (uname.value) {
        isValidUname = true;
    }
    if (pwd.value) {
        isValidPwd = true;
    }
    if(checkInput.checked){
        checkedInput = true;
    }
    form.classList.add("was-validated");

    if (!isValidPwd || !isValidUname || !checkedInput) {
        return false;
    } else {
        return true;
    }
}