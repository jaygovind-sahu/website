$(document).ready(function() {
  $("#contact-success-alert").hide();
  $("#contact-danger-alert").hide();
});

function sendMessage(event) {
    event.preventDefault()
    var name = $("#contact-form-name").val();
    var email = $("#contact-form-email").val();
    var message = $("#contact-form-message").val();
    var data = {
       name : name,
       email : email,
       message : message
     };

     $.ajax({
      type: "POST",
      url : "https://flask-email-sender.herokuapp.com/message",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function () {
        $("#contact-success-alert").fadeTo(2000, 500).slideUp(500, function() {
          $("#contact-success-alert").slideUp(500);
        });
      },
      error: function () {
        $("#contact-danger-alert").fadeTo(2000, 500).slideUp(500, function() {
          $("#contact-danger-alert").slideUp(500);
        });
      }})
      .done(function() {
        $("#contact-form")[0].reset();
        $("#contact-form").removeClass('was-validated');
      });
  }