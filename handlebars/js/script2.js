// <!-- // Esercizio 2
// // In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars. -->

$(document).ready(function() {
  $('.invia').click(function() {
    var textNew = $('.send-text').val();
    $('.send-text').val('');

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var context = {
      'text': textNew,
      'time': getTime(),
      'sentReceived': 'sent'
    };
    var html = template(context);
    $('#app').append(html);

    setTimeout(function() {
      var response = 'fantastico';

      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);

      var context = {
        'text': response,
        'time': getTime(),
        'sentReceived': 'received'
      };
      var html = template(context);
      $('#app').append(html);

    }, 1000)
  });
})




function getTime() {
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours + ':' + minutes;
  return time;
}

function addZero(number) {
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}
