$(document).ready(function(){


  $('#register').click(function(){
      $('#email').prop('required', true);
      $('.email_display').show('slow');
  });

  $('#form_login').submit(function(e){
    if($(document.activeElement).val() == 'Register'){
      alert(`POST REQUEST FOR REGISTER READY USERNAME: ${$('#username').val()}, PASSWORD: ${$('#password').val()}, EMAIL: ${$('#email').val()}`);
      e.preventDefault();
    }else if($(document.activeElement).val() == 'Login'){
      alert(`POST REQUEST FOR LOGIN READY USERNAME: ${$('#username').val()}, PASSWORD: ${$('#password').val()}, EMAIL: ${$('#email').val()}`);
      e.preventDefault();
    }
    else{
      e.preventDefault();
    }
  })

  $('#email').on('invalid', function(e){
    e.preventDefault();
  })



})
