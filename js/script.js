/* ---------------------------------- Home ---------------------------------- */
$('#home .leftInfo').click(function(){             
    $('#home .box').animate({left:"0"},800);
    $('#home .leftInfo').animate({left:'260px'},800);
    $('#home .headerInfo').animate({marginLeft:'260px'},800);
})
$('#home .box .close').click(function(){
    $('#home .box').animate({left:"-250px"},800);
    $('#home .leftInfo').animate({left:'0px'},800);
    $('#home .headerInfo').animate({marginLeft:'0'},800);
})
$('#home .box a').click(function(){
    let hrefClicked=$(this).attr('href');
    let positionTop=$(hrefClicked).offset().top;
    $('body,html').animate({scrollTop:positionTop},1000);
})


/* --------------------------------- Singer --------------------------------- */
$('#singer .box h3').click(function(){
    if($(this).next('.infotext').hasClass('showing')){
        $(this).next('.infotext').removeClass('showing').slideUp(1000);
    }else{
        $('#singer .box .infotext').slideUp(1000);
        $(this).next('.infotext').addClass('showing').slideDown(1000);
    }
})


/* ---------------------------------- Count Down --------------------------------- */
let theDate = new Date("Oct 24,2023 23:59:59").getTime();
let countDown = setInterval(() => {
    let nowDate = new Date().getTime();
    let realDate = theDate - nowDate;
    let days = Math.floor(realDate / (1000 * 60 * 60 * 24));
    let hours =Math.floor((realDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
    let minutes =Math.floor((realDate % (1000 * 60 * 60)) / (1000 * 60)) ;
    let seconds =Math.floor((realDate % (1000 * 60 )) / 1000 ) ;
    document.querySelector('.days').innerHTML=`${days} D`;
    document.querySelector('.hours').innerHTML=`${hours} h`;
    document.querySelector('.minutes').innerHTML=`${minutes} m`;
    document.querySelector('.seconds').innerHTML=`${seconds} s`;
},1000);


/* --------------------------------- Contact -------------------------------- */
let span = document.querySelector('#join .inputs p span');
span.innerHTML = 100;
$('#join .inputs textarea').keydown(function() {
    if(this.value.length >= 100){
        span.innerHTML ="your available character finished"
    }else{
        let currentNum = 100 - this.value.length;
        span.innerHTML =`${currentNum}`
    }
})