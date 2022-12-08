"use strict";
$(document).ready( () => {
    
    $("loginForm").submit( event => {
        let isValid = true;
        
        const name = $("#name").val().trim();
        if (name == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }
        $("#name").val(name);
        
        const password = $("#password").val().trim();
        if ( password.length < 6) {
            $("#password").next().text("Must be 6 or more characters.");
            isValid = false;
        } else {
            $("#password").next().text("");
        }
        $("#password").val(password);
        
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();                
        }
    });
    
    $("signUpForm").submit( event => {
        let isValid = true;
        
        const name = $("#name").val().trim();
        if (name == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }
        $("#name").val(name);
        
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
        
        const password = $("#password").val().trim();
        if ( password.length < 6) {
            $("#password").next().text("Must be 6 or more characters.");
            isValid = false;
        } else {
            $("#password").next().text("");
        }
        $("#password").val(password);
        
        const verify = $("#verify").val().trim();
        if (verify == "") { 
            $("#verify").next().text("This field is required.");
            isValid = false; 
        } else if (verify !== password) { 
            $("#verify").next().text("Must match first password entry.");
            isValid = false;
        } else {
            $("#verify").next().text("");
        }
        $("#verify").val(verify);
        
        if (isValid == false) {
            event.preventDefault();                
        }
    });
        
});


