$(window).scroll(function(){
    var top = $(window).scrollTop();

    if(top > 80){
        $('#seta').show();
        console.log(top);
    }else{
        $('#seta').hide();
        console.log(top);
    }

    if(top > 270){
        $('#seta-goty').show();
        console.log(top);
    }else{
        $('#seta-goty').hide();
        console.log(top);
    }

    if(top > 120){
        $('#seta-sells').show();
        console.log(top);
    }else{
        $('#seta-sells').hide();
        console.log(top);
    }

    if(top > 80){
        $('#menu').show();
        console.log(top);
    }else{
        $('#menu').hide();
        console.log(top);
    }
    
    if(top != 400){
        $('#menu-gen').show();
        console.log(top);
    }else{
        $('#menu-gen').hide();
        console.log(top);
    }
    
    if(top != 980){
        $('#menu-class').show();
        console.log(top);
    }else{
        $('#menu-class').hide();
        console.log(top);
    }
    
    if(top != 1560){
        $('#menu-goty').show();
        console.log(top);
    }else{
        $('#menu-goty').hide();
        console.log(top);
    }
    
    if(top != 2230){
        $('#menu-sells').show();
        console.log(top);
    }else{
        $('#menu-sells').hide();
        console.log(top);
    }
})