$(function(){$(document).on('click','a.likeIt',function(e){e.preventDefault();var itemId=$(this).attr('id').split("_")[1],csrf=$('[name=csrfmiddlewaretoken]').val();if(!csrf)console.log("You must add {% csrftoken %} somewhere in the template.");$.ajax({type:"POST",url:$(this).attr("data-action-url"),data:{'csrfmiddlewaretoken':csrf},dataType:"json",timeout:2000,cache:false,beforeSend:function(XMLHttpRequest){},error:function(data,XMLHttpRequest,textStatus,errorThrown){$(this).html("Error connecting to the server.");},complete:function(XMLHttpRequest,textStatus){},success:function(data,textStatus,XMLHttpRequest){$('#LikeCounter_'+ itemId).html(data.counter);$('#LikeIt_'+itemId).toggleClass('liked');$('#LikeIt_'+itemId).removeClass('unliked');var request_username=$('body').data('request_username');var anchor_title=$('#comment-likes-'+ itemId+' li a[title*='+ request_username+']');var anchor_data=$('body').data('anchor_data')
var anchor=$('#LikeIt_'+ itemId);if(anchor.hasClass('liked')){$("#comment-likes-"+ itemId).append("<li class='"+request_username+"'>"+ anchor_data+"</li>");}
else{$("#comment-likes-"+ itemId+" li."+ request_username).remove();}}});});});