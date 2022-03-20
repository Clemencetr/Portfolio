$(function(){
    $('#logo').fadeIn(500);
    
  /*  $('#johnc img').hover(function(){
        if($('#f1').css('top')=='-50px'){
            $('#f1').stop().animate({top:-100},200);
        }else{
            $('#f1').stop().animate({top:-50},200);
        }
        });
    
    $('#dada img').hover(function(){
        if($('#f2').css('top')=='-50px'){
            $('#f2').stop().animate({top:-100},200);
        }else{
            $('#f2').stop().animate({top:-50},200);
        }
        });
    
    $('#doubleExpo img').hover(function(){
        if($('#f3').css('top')=='-50px'){
            $('#f3').stop().animate({top:-100},200);
        }else{
            $('#f3').stop().animate({top:-50},200);
        }
        });
    
    $('#CIPTA img').hover(function(){
        if($('#f4').css('top')=='-50px'){
            $('#f4').stop().animate({top:-100},200);
        }else{
            $('#f4').stop().animate({top:-50},200);
        }
        });
    
    $('#citation img').hover(function(){
        if($('#f5').css('top')=='-50px'){
            $('#f5').stop().animate({top:-100},200);
        }else{
            $('#f5').stop().animate({top:-50},200);
        }
        });
    
    $('#cyborg img').hover(function(){
        if($('#f6').css('top')=='-50px'){
            $('#f6').stop().animate({top:-100},200);
        }else{
            $('#f6').stop().animate({top:-50},200);
        }
        });
    
    $('#massai img').hover(function(){
        if($('#f7').css('top')=='-50px'){
            $('#f7').stop().animate({top:-100},200);
        }else{
            $('#f7').stop().animate({top:-50},200);
        }
        });
    
    $('#prestige img').hover(function(){
        if($('#f8').css('top')=='-50px'){
            $('#f8').stop().animate({top:-100},200);
        }else{
            $('#f8').stop().animate({top:-50},200);
        }
        });
    
    $('#oxirish img').hover(function(){
        if($('#f9').css('top')=='-50px'){
            $('#f9').stop().animate({top:-100},200);
        }else{
            $('#f9').stop().animate({top:-50},200);
        }
        });
    
    $('#garosnow img').hover(function(){
        if($('#f10').css('top')=='-50px'){
            $('#f10').stop().animate({top:-100},200);
        }else{
            $('#f10').stop().animate({top:-50},200);
        }
        });
    
    $('#ostrichpillow img').hover(function(){
        if($('#f11').css('top')=='-50px'){
            $('#f11').stop().animate({top:-100},200);
        }else{
            $('#f11').stop().animate({top:-50},200);
        }
        });
    
    $('#irish img').hover(function(){
        if($('#f12').css('top')=='-50px'){
            $('#f12').stop().animate({top:-100},200);
        }else{
            $('#f12').stop().animate({top:-50},200);
        }
        });*/

        //quand on passe la souris sur l'image, apparition de la figcaption
        $('figure').hover(function(){
            $('figcaption',this).stop().animate({top:179},400);
        },function(){
            $('figcaption', this).stop().animate({top:220},400);
        });
    
    //quand on clique sur une image
    $("#johnc img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".print").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal").css("display", "none");
    });		

    
    
    //quand on clique sur une image
    $("#dada img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal2").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".print").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal2").css("display", "none");
    });		

    
    
    //quand on clique sur une image
    $("#doubleExpo img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal3").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".print").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal3").css("display", "none");
    });		
    

    
    //quand on clique sur une image
    $("#CIPTA img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal4").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".print").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal4").css("display", "none");
    });		


    
    //quand on clique sur une image
    $("#citation img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal5").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".print").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal5").css("display", "none");
    });		

    

    //quand on clique sur une image
    $("#cyborg img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal6").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".print").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal6").css("display", "none");
    });		

    

    //quand on clique sur une image
    $("#massai img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal7").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".web").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal7").css("display", "none");
    });		

    

    //quand on clique sur une image
    $("#prestige img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal8").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".web").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal8").css("display", "none");
    });		
    
    
    
    //quand on clique sur une image
    $("#oxirish img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal9").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".web").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal9").css("display", "none");
    });		

    
    //quand on clique sur une image
    $("#google img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal10").css("display", "flex");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".web").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal10").css("display", "none");
    });
    
     //quand on clique sur une image
    $("#saulbass img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal11").css("display", "flex");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $(".web").attr("src", $(this).attr("src"));

        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal11").css("display", "none");
    });
    
    

    // $(window).bind('scroll',function(){
    //     if ($(window).scrollTop() > 770){
    //         console.log('coucou');
    //         $('.desk p').css({color: '#455e97'});
    //     } else {
    //         $('.desk p').css({color: 'white'});
    //     }
    // });

    
    $('#aries').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#apropos').offset().top},900);
    });
    $('#menu1, #menu1_smart').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#apropos').offset().top},1000);
    }); 
    $('#menu2, #menu2_smart').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#projets').offset().top},1500);
    });
    $('#menu3, #menu3_smart').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#purple-js').offset().top},1500);
    });
    $('#menu4, #menu4_smart').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#contact-js').offset().top},1500);
    });
    $('#btn-top').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#top').offset().top},1500);
    });


    $('#m_burger').on('click', function(){
        $('#m_burger').fadeOut(500,function(){
            if($('#m_burger').attr('src')=='images/m_burger2.png'){
                $('#m_burger').attr('src','images/croix_b.png').fadeIn(500);
            }else{
                $('#m_burger').attr('src','images/m_burger2.png').fadeIn(500);
            }
        });
        if($('.smart').css('top')=='-450px'){
            $('.smart').animate({top:0},1000);
        }else{
            $('.smart').animate({top:-450},1000);
        }
    });

    $('#menu1_smart, #menu2_smart, #menu3_smart, #menu4_smart').on('click',function(){
        $('#m_burger').attr('src','images/m_burger2.png').fadeIn(500);
        $('.smart').animate({top:-450},500);
    });

    
    window.onscroll = function() {découvrir()};

    function découvrir (){
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("bandeau-color").className = "slideUp";
        document.getElementById("bandeau-img").className = "slideUp1";
        document.getElementById("bandeau-para").className = "slideUp1";
    }}
});