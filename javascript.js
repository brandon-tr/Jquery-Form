
  $(document).ready(function(){
    $('button').click(function(){
     var first = $('#first').val()
     var last = $('#last').val()
     var email = $('#email').val()
     var contact = $('#contact').val()

     if ($('#first').val() == '' || $('#last').val()== '' || $('#email').val() == '' || $('#contact').val()== ''){
       alert('Fill in everything');
     }else{
      $('#main').append("<tr><td>"+first+"</td><td>"+last+"</td><td>"+email+"</td><td>"+contact+"</td></tr>");
    };
    //  alert('tried');
    });


  });
