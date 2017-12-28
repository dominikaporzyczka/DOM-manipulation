$( document ).ready(function() {

    $('#submitBtn').on('click', function(event) {
        var inputVal = $('input[name=newTask]').val();

        $('#list').append('<li>' + inputVal + '</li>');

        event.preventDefault();
    });

});