// script for submit btn, thanks to http://net.tutsplus.com/tutorials/javascript-ajax/submit-a-form-without-page-refresh-using-jquery/

$(function() {
  $('.error').hide();
  $(".submit-btn").click(function() {
    // validation
    $('.error').hide();
    var pollvalue = $("input:radio[name=poll]:checked").val();
    if (pollvalue == "") {
      $("label#poll_error").show();
      $("input#firstname").focus();
      return false;
    }

    // postprocessing
    var dataString = 'vote='+ pollvalue;
//    alert (dataString);return false;
    $.ajax({
      type: "POST",
      url: "/moca2012/pages/poll",
      data: dataString,
      success: function() {
        alert("Vote successfully acquired, thanks!");
//        $('#contact_form').html("<div id='message'></div>");
//        $('#message').html("<h2>Contact Form Submitted!</h2>")
//          .append("<p>We will be in touch soon.</p>")
//          .hide()
//          .fadeIn(1500, function() {
//            $('#message').append("<img id='checkmark' src='images/check.png' />");
//          });
      },
      error: function() {
        alert("Poll vote failed, please contact the developer");
      }
    });
  return false;
  
  });
});

