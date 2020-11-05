function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$('.dropdown-menu').on('click', 'a', function () {
    var text = $(this).html();
    alert(text);
    var htmlText = text + ' <span class="caret caret-posicion"></span>';
    $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
});




let validEmail = false;
let validPhone = false;
let validname = false;
let validdob = false;
let validgender = false;
let validpassword = false


const name = document.getElementById('name');
name.addEventListener('blur', () => {
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
    let str = name.value;
    if (regex.test(str)) {

        document.getElementById("namevalid").style.display = "none";

        validname = true

    }
    else {


        document.getElementById("namevalid").style.display = "block";
        validname = false


    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    if (regex.test(str)) {

        document.getElementById("emailvalid").style.display = "none";

        validEmail = true;
    }
    else {

        document.getElementById("emailvalid").style.display = "block";
        validEmail = false;
    }
})


phone.addEventListener('blur', () => {

    let regex = /^([0-9]){10}$/;
    let str = phone.value;

    console.log(regex, str);
    if (regex.test(str)) {

        document.getElementById("phonevalid").style.display = "none";
        validPhone = true

    }
    else {

        name.classList.add('is-invalid');
        document.getElementById("phonevalid").style.display = "block";
        validPhone = false
    }
})

dob.addEventListener('blur', () => {

    let regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    let str = dob.value;

    console.log(regex, str);
    if (regex.test(str)) {

        document.getElementById("dobvalid").style.display = "none";
        validdob = true;

    }
    else {

        name.classList.add('is-invalid');
        document.getElementById("dobvalid").style.display = "block";
        validdob = false;
    }
})



let submit = document.getElementById('submitbtn');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    if (password == confirmpassword && password.length > 7) {
        // console.log("matched")
        validpassword = true
        error = "";
    }
    else {
        validpassword = false
        error = "and password should be greater than 8 character";

    }
    console.log(validEmail, validname, validPhone, validgender, validdob, password, confirmpassword)
    if (validEmail && validname && validPhone && validdob && validgender && validpassword) {
        alert("Your Form has been Sucessfully submited")
    }
    else {
        alert("Please filled the form correctly " + error)
    }

})



