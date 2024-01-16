// script for submit btn, thanks to http://net.tutsplus.com/tutorials/javascript-ajax/submit-a-form-without-page-refresh-using-jquery/

$(function() {
  $('.error').hide();
  $(".submit-btn").click(function() {
    // validation
    $('.error').hide();
    var firstname = $("input#firstname").val();
    if (firstname == "") {
      $("label#firstname_error").show();
      $("input#firstname").focus();
      return false;
    }
    var lastname = $("input#lastname").val();
    if (lastname == "") {
      $("label#lastname_error").show();
      $("input#lastname").focus();
      return false;
    }
    var email = $("input#email").val();
    if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
    var foreign = $("input#foreign").is(':checked');
    var agree = $("input#agree").is(':checked');
    if (agree != true) {
      $("label#agree_error").show();
      $("input#agree").focus();
      return false;
    }

    // postprocessing
    var dataString = 'firstname='+ firstname + '&lastname=' + lastname + '&email=' + email + '&foreign=' + foreign + '&agree=' + agree;
//    alert (dataString);return false;
    $.ajax({
      type: "POST",
      url: "subscribe",
      data: dataString,
      success: function() {
        alert("Subscription request successfully sent, thanks!");
//        $('#contact_form').html("<div id='message'></div>");
//        $('#message').html("<h2>Contact Form Submitted!</h2>")
//          .append("<p>We will be in touch soon.</p>")
//          .hide()
//          .fadeIn(1500, function() {
//            $('#message').append("<img id='checkmark' src='images/check.png' />");
//          });
      },
      error: function() {
        alert("Subscription failed, please contact the developer");
      }
    });
  return false;
  
  });
});

