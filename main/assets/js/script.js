$(document).ready(function(){
    $(window).scroll(function() {
        const showSticky = $(this).scrollTop() > 20;
        $('.navbar').toggleClass('sticky', showSticky);
        
        const showScrollUpBtn = $(this).scrollTop() > 500;
        $('.scroll-up-btn').toggleClass('show', showScrollUpBtn);
    });
      

    $(document).ready(function() {
        // Obtener el año actual
        var currentYear = new Date().getFullYear();
    
        // Actualizar el contenido del elemento con el año actual
        $('#year').html(currentYear);
    });
      
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Desarrollador Web", "Programador"],
        typeSpeed: 60,
        backSpeed:40,
        loop: true
    });
    //typing2 animation script
    var typed2 = new Typed(".typing-2", {
        strings: ["Páginas Web", "Desarrollos a medida", "Herramientas de gestión", "Apps", ],
        typeSpeed: 60,
        backSpeed:40,
        loop: true
    });


    /* owl carousel script */
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav:false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav:false
            }
        }
    })
 

    $("#form-contacto").on("submit", function(e){
               
        e.preventDefault();

        $.ajax({
            url: "./main/assets/php/enviar.php",
            type: "post",
            data: $('#form-contacto').serialize(),
            beforeSend: function() {
              $('.mensaje').html("<img src='main/assets/images/preloader.gif'/>");
            }, 
            success: function(response){
                $(".mensaje").html("<p style='margin-top:10px;'>Mensaje enviado correctamente</p>");    
                console.log(response);               
                $("#form-contacto")[0].reset();
            },
            error: function(response){
                $(".mensaje").html("<p>Error al enviar en mensaje</p> " + response);
            },
            
        }).fail( function( jqXHR, textStatus, errorThrown ) { 
            if (jqXHR.status === 0) {

                alert('Not connect: Verify Network.');
            
              } else if (jqXHR.status == 404) {
            
                alert('Requested page not found [404]');
            
              } else if (jqXHR.status == 500) {
            
                alert('Internal Server Error [500] ' + errorThrown);

              } else if (textStatus === 'parsererror') {

                alert('Requested JSON parse failed.');
            
              } else if (textStatus === 'timeout') {
            
                alert('Time out error.');
            
              } else if (textStatus === 'abort') {
            
                alert('Ajax request aborted.');
            
              } else {
            
                alert('Uncaught Error: ' + jqXHR.responseText);
            
              }
        });

    });

});