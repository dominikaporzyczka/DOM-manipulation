$( document ).ready(function() {

    $('#task-form')
        .submit( function(event) {
            var inputVal = $('input[name=newTask]').val();
            $('#list').append('<li><span class="task">' + inputVal + '</span><button class="delete-btn btn">x</button></li>');
            $(this).trigger('reset');

            event.preventDefault();
        });
    
        $('#list')
            .on('click', '.delete-btn', function() {
                $(this).parents('li').remove();
            })
            
            .on('click', '.task', function() {
                $(this).toggleClass('task-done');
            });

       

});