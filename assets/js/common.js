var EI_PROJECT = {};
var RHINO_CO_PROJECT = {};
RHINO_CO_PROJECT.COMMON = {};

RHINO_CO_PROJECT.COMMON = {
    breakPoint: 980,
    isSp: false,
    start_pos: 0,
    head_offset: 0,
    isIE: false,
    init: function() {
        this.judgeSp();
        this.judgeIE();
        this.scrollFunction();
        this.menuToggle();
        this.registShare();


        this.head_offset = (181/750)*$(window).width();
        if($(window).width() > 500){
            this.head_offset = 181*(500/750);
        }
        console.log(this.head_offset);
    },
    judgeSp: function() {
        if($(window).width() < this.breakPoint){
            this.isSp = true;
        }
    },
    judgeIE: function() {
        var userAgent = window.navigator.userAgent.toLowerCase();
        console.log(userAgent);
        if(userAgent.indexOf('msie') != -1 ||
                userAgent.indexOf('trident') != -1) {
            console.log('Internet Explorer');
            $('body').addClass('is-ie');
        } else if(userAgent.indexOf('edge') != -1) {
            console.log('Edge');
        } else if(userAgent.indexOf('chrome') != -1) {
            console.log('Google Chrome');
        } else if(userAgent.indexOf('safari') != -1) {
            console.log('Safari');
        } else if(userAgent.indexOf('firefox') != -1) {
            console.log('FireFox');
        } else if(userAgent.indexOf('opera') != -1) {
            console.log('Opera');
        } else {
            console.log('...');
        }
    },
    scrollFunction: function() {
        var $win = $(window),
                winH = $win.height(),
                winW = $win.width(),
                current_pos = $win.scrollTop(),
                current_btm = current_pos + winH;
        $('.scroll-in').each(function(){
            if($(this).offset().top < current_btm - winH/6){
                $(this).addClass('show');
            }
        })

        // var header = $('#header');
        // if(this.isSp){

        //     if(current_pos > this.head_offset){
        //         header.addClass('fixed');
        //         // header.find('.logo').slideUp(400);
        //     }else {
        //         header.removeClass('fixed');
        //         // header.find('.logo').slideDown(400);
        //     }
        // } else {
        //     if(current_pos > 10) {
        //         header.addClass('pc-fixed');
        //     } else {
        //         header.removeClass('pc-fixed');
        //     }
        // }

    },
    menuToggle: function() {
        
    },
    registShare: function() {
        var description = $('meta[name=description]').attr("content");
        var url = location.href;
        var title = document.title;
        var e_description = encodeURIComponent(description + '　');
        var e_title = encodeURIComponent(title);
        var e_url = encodeURIComponent(url);
        var line_title = encodeURIComponent(title + '：');

        //twitter share button
        if($('a.share-twitter').length){
            var tweet_share_url = 'https://twitter.com/share?url=' + e_url +'&text='+ e_title;
            $(".share-twitter").on("click", function(e){
                e.preventDefault();
                window.open(tweet_share_url, "", "width=626,height=436");
            });
        }

        //fb share button
        if($('a.share-fb').length){
            var fb_share_url = 'https://www.facebook.com/sharer/sharer.php?u=' + e_url;
            $(".share-fb").on("click", function(e){
                e.preventDefault();
                window.open(fb_share_url, "", "width=626,height=436");
            });
        }

        if($('a.share-line').length){
            var line_share_url = 'http://line.me/R/msg/text/?' + line_title + e_url;
            $(".share-line").on("click", function(e){
                e.preventDefault();
                window.open(line_share_url, "", "width=626,height=436");
            });
        }
    }
};

$(function () {
    RHINO_CO_PROJECT.COMMON.init();
    console.log(RHINO_CO_PROJECT.COMMON.isSp);


    $(window).on({
        'scroll': function(){
            RHINO_CO_PROJECT.COMMON.scrollFunction();
        },
        'resize': function(){
            var $win = $(window),
                winH = $win.height(),
                winW = $win.width(),
                current_pos = $win.scrollTop(),
                current_btm = current_pos + winH;

        }
    });
});
