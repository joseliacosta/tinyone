$(document).ready(function() {
  $('#contact-form').submit(function(e) {
      var name = $('#inputName')
      var email = $('#inputEmail')
      var phone = $('#inputPhone')
    
      if(name.val() == "" || email.val() == "" || phone.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        /*$.ajax({
          method: 'POST',
          url: '//formspree.io/joselialcosta@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });*/
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(400);
        console.log("Work!")
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});
  