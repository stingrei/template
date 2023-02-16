breakPoint = 1025
isSp = false
if($(window).width() < breakPoint)
  isSp = true

$(window).on 'load', ()->
  console.log('loda')
  anchorScroll
  
$(window).on 'scroll', ()->
  console.log('scroll')

$(window).on 'resize', ()->
  console.log('resize')

registScroll = ->
  $win = $(window)
  winH = $win.height()
  winW = $win.width()
  current_pos = $win.scrollTop()
  current_btm = current_pos + winH
  $('.scroll-in').each ()->
    if($(this).offset().top < current_btm - winH/6)
      $(this).addClass('show')

anchorScroll = ->
  $('[data-trigger]').click (e)->
    e.preventDefault()
    offset = 200
    if(isSp)
      offset = 50
    target = $(this).attr('data-trigger')
    $('html,body').animate({scrollTop: $('[data-anchor="' + target +'"]').offset().top - offset}, 700, 'swing')
