$(function () {
    var breakPoint = 1025,
        isSp = false;
    if($(window).width() < breakPoint){
        isSp = true;
    }


    $(window).on({
        'load' : function(){
            var $win = $(window),
                winH = $win.height(),
                winW = $win.width(),
                current_pos = $win.scrollTop(),
                current_btm = current_pos + winH;
            registScroll();
            registShare();

            $('[data-trigger]').click(function(e){
                e.preventDefault();
                var offset = 200;
                if(isSp){
                    offset = 50;
                }
                var target = $(this).attr('data-trigger');
                $('html,body').animate({scrollTop: $('[data-anchor="' + target +'"]').offset().top - offset}, 700, 'swing');
            })

        },
        'scroll': function(){
            var $win = $(window),
                winH = $win.height(),
                winW = $win.width(),
                current_pos = $win.scrollTop(),
                current_btm = current_pos + winH;
            registScroll();
        },
        'resize': function(){
            var $win = $(window),
                winH = $win.height(),
                winW = $win.width(),
                current_pos = $win.scrollTop(),
                current_btm = current_pos + winH;
            
        }
    });

    function registScroll(){
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
    }

    function registShare(){
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
            var line_share_url = 'http://line.me/R/msg/text/ ?' + line_title + e_url;
            $(".share-line").on("click", function(e){
                e.preventDefault();
                window.open(line_share_url, "", "width=626,height=436");
            });
        }
    }

});