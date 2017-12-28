$( document ).ready(function() {

    $('#task-form')
        .submit( function(event) {
        var inputVal = $('input[name=newTask]').val();
        $('#list').append('<li>' + inputVal + '</li>');

        event.preventDefault();
        });

});