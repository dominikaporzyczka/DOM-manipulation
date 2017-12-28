$( document ).ready(function() {

    $('#task-form')
        .submit( function(event) {
            var inputVal = $('input[name=newTask]').val();
            $('#list').append('<li><button class="delete-btn btn">x</button><span class="task">' + inputVal + '</span></li>');
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