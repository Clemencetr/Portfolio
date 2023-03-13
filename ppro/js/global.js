$(function(){
      /*var i=true;  
      $('.langue').on('click',function(){
          
          if(i==true){
            $('.encars').animate({left:'50px','margin-left':-50},250);
            $(function(){
                TweenMax.to('.open',0.4,{left:'220px', onComplite:function(){
                                                                    TweenMax.to('.arrows',0.5,{rotation:'180'})
                }})});
            $(function(){
                TweenMax.to('#slogan',1,{left:'13%',ease:Back.easeOut})});
            i=false
          }else{
            $('.encars').animate({left:'-200px'},200);
            $(function(){
              TweenMax.to('.open',0.4,{left:'0px', onComplite:function(){
                                                                    TweenMax.to('.arrows',0.5,{rotation:'-1'})
            }})});
            $(function(){
                TweenMax.to('#slogan',1,{left:'20px',ease:Back.easeOut})});
            i=true;
          }
      });*/

    $('#burger').on('click', function(){
            $('#burger').fadeOut(500,function(){
                if($('#burger').attr('src')=='images/m_burger2.png'){          
                    $('#burger').attr('src','images/croix_b.png').fadeIn(500);
                    console.log('burger');
                }else{
                    $('#burger').attr('src','images/m_burger2.png').fadeIn(500);
                }
            });
            if($('#menu').css('top')=='-780px'){
                $('#menu').animate({top:0},1000);
            }else{
                $('#menu').animate({top:-780},1000);
            }
        });
    $('#S1').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#visu1').offset().top},1000);
    }); 
    $('#S2').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#visu2').offset().top},1500);
    });
    $('#S3').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#visu3').offset().top},1500);
    });
    $('#S4').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#visu4').offset().top},1500);
    });
    $('#S5').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#visu5').offset().top},1500);
    });
    $('#S6').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#visu6').offset().top},1500);
    });
    $(window).bind('scroll',function(){
        if ($(window).scrollTop() > 220){
            console.log('coucou');
            $('.scroll').css({'background-color': 'rgba(18,39,20,0.2)'});
        } else {
            $('.scroll').css({'background-color': 'white'});
        }
    });
});