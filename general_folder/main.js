$(document).ready(function(){
    
$(".season").click(function(){
    id = $(this).attr('id')
    if ($(this).hasClass('btn-info')){
        $(this).removeClass('btn-info');
        $('#input_'+id).val('')
       
    }
    else {
        $(this).addClass('btn-info');
        $('#input_'+id).val('1')
    }
})
  
})