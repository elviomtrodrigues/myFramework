//console.log(g);
//g.greet().setLang('es').greet(true);

$('#login').click(function() {
    
    var language = $('#lang').val();
    var loginGrtr = G$('Élvio', 'Rodrigues', language);
    
    loginGrtr.HTMLGreeting('#greeting', false);
    
    $('#logindiv').hide();
    
    
});

