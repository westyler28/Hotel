$(document).ready(function() {
  
  input = $("input[type=text]");
  // output = $("div:nth-child(3)");
  button = $("button");
  
  toggleButton(); 
  
  input
    .keypress(toggleButton)
    .keyup(toggleButton);
  
  function toggleButton() { 
    len = input.val().length;

    if (len != 0) {
     button.text("Sign In");
     button.removeAttr("disabled");
     button.addClass('activeButton'); 
    } 
    else {
       button.attr("disabled", "disabled");
       button.text("Sign in");
       button.removeClass('activeButton'); 
    }
  };
  
});