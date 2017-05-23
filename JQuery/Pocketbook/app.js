var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName === "") {
      $('p.first-name-error').text("Please enter your first name.");
    }
    
    var lastName = $('#last').val();
    
    if(lastName === "") {
      $('p.last-name-error').text("Please enter your last name.");
    }
    
    var email = $('#email').val();
    
    if(email === "") {
      $('p.email-error').text("Please enter your email address.");
    }
    else if(email === "tracy_yu93@yahoo.com") {
            $('p.email-error').text("This email is already taken.");
    }
    
    var password = $('#password').val();
    
    if(password === "") {
      $('p.password-error').text("Please enter a password.");
    }
    else if(password.length < 8) {
      $('p.password-error').text("Short passwords are easy to guess. Try one with at least 8 characters.");
    }
    
    
    return false;
  });
};

$(document).ready(main);