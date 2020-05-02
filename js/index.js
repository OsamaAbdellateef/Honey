slider = document.getElementById('slideOver');
proName = document.querySelectorAll('.production-item');
buttons = document.querySelectorAll('button');
window.onscroll = () => {
    if(window.pageYOffset > 0) {
        slider.style.animation='slideDown 600ms forwards'
    } else {
        slider.style.animation='slideUp 600ms forwards'
    }
}


$('.product-link').click(function(){
    $('html , body').animate({
        scrollTop:$('.productions').offset().top-100
        },700);
        console.log($('.productions').offset().top)
})

/*this is for add cart */

$(window).on('load',function(){
    $('.spinner-container').fadeOut(500);
})

//for scroll up icon

$(window).on('load scroll',function(){
    if($("html,body").scrollTop() > 400 ){
        $(".scroll").fadeIn(200)
    }else{
        $(".scroll").fadeOut(200)
} 

});

$(".scroll").click(function () {
    
    $("html,body").animate({
        scrollTop:0
    },600);
    
});

proName.forEach(item => {
    item.addEventListener('click', function () {
         let itemName = item.children[2].firstElementChild.innerText;
         let price = item.children[2].lastElementChild.innerText;
         sessionStorage.setItem('itemName', itemName);
         sessionStorage.setItem('price', price);
        });
}); 

