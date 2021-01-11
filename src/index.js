var smoothScroll = require('./smooth_scroll');

$(function() {
    $('.main.menu').visibility({
        type: 'fixed'
    });
    // $('.overlay').visibility({
    //   type: 'fixed',
    //   offset: 80
    // });
         
    // lazy load images
    $('.image').visibility({
        type: 'image',
        transition: 'vertical flip in',
        duration: 500
    });
    
    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
        on: 'hover'
    });
    
    // メニュースクロール
    smoothScroll();
});


