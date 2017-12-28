$( document ).ready(function() {

    $('#task-form')
        .submit( function(event) {
            var inputVal = $('input[name=newTask]').val();
            $('#list').append('<li><span>' + inputVal + '</span><button class="delete-btn btn">x</button></li>');
            $(this).trigger('reset');

        $('.delete-btn').click( function() {
            $(this).parents('li').remove();
        });
            
        event.preventDefault();
        });

});