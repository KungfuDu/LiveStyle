$(document).ready(function(){

  $('.menu-icon').click(function(e){
    e.preventDefault();
    $this=$(this);
    if($this.hasClass('is-opened')){
      $this.addClass('is-closed').removeClass('is-opened');
    }
    else{
      $this.addClass('is-opened').removeClass('is-closed');
    }

  })

  $('.field-input').focus(function(){
    $(this).parent().addClass('is-focused has-label');
  })

  $('.field-input').blur(function(){
    $parent =  $(this).parent();
    $parent.removeClass('is-focused');
    if($(this).val()==""){
      $parent.removeClass('has-label');
    }

  })

  $('.button-icon').click(function(e){
    e.preventDefault();
    $this=$(this);
    if($this.hasClass('is-opened')){
      $this.addClass('is-closed').removeClass('is-opened');
    }
    else{
      $this.addClass('is-opened').removeClass('is-closed');
    }

  })

  $('.col-anime').hover(function(){
    $(this).siblings().addClass('isnot-hover');
    $(this).addClass('is-hover');
  },function(){
    $(this).removeClass('is-hover');
    $bro = $(this);
    setTimeout(function(){
      $bro.siblings().removeClass('isnot-hover');
    }, 45);
  });

})
