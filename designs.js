$( document ).ready(function() {

    $('#task-form')
        .submit( function(event) {
            var inputVal = $('input[name=newTask]').val();
            $('#list-tasks').append('<li><button class="delete-btn btn"><i class="fas fa-times"></i></button><span class="task">' + inputVal + '</span></li>');
            $(this).trigger('reset');

            event.preventDefault();
        });

    $('.list')
        .on('click', '.delete-btn', function() {
            $(this).parents('li').remove();
        })

        .on('click', '.task', function() {
            var task = $(this);
            task.toggleClass('task-done');

            var parentList = $(this).parents('#list-tasks');
            var li = task.parent('li');
            console.log(parentList);

            if(parentList.length > 0) {
                $('#done-tasks').append(li);
                console.log("if");
            }
            else {
                $('#list-tasks').append(li);
                console.log("else");
            }
        });
    
   /* $('#list-tasks')
        .on('click', '.delete-btn', function() {
            $(this).parents('li').remove();
        })
        
        .on('click', '.task', function() {
            var task = $(this);
            task.toggleClass('task-done');

            var li = task.parent('li');
            $('#done-tasks').append(li);
        });

    $('#done-tasks')
        .on('click', '.delete-btn', function() {
            $(this).parents('li').remove();
        })

        .on('click', '.task', function() {
            var task = $(this);
            task.toggleClass('task-done');

            var li = task.parent('li');
            $('#list-tasks').append(li);
        });*/

});



        
