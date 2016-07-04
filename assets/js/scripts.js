

$(document).ready(function() {
  $('#contactForm').submit(function(e) {
      var name = $('#name')
      var email = $('#email')
      var phone = $('#phone')
    
      if(name.val() == "" || email.val() == "" || phone.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/joselialcosta@gmail.com',
          data: $('#contactForm').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(400);
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});