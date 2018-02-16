$(document).ready(function() {
  $('.devour').click(function() {
    var id = $(this).data('id');
    var devoured = {
      'devoured': $(this).data('devoured')
    };

    $.ajax({
      url: '/burgers/' + id,
      type: 'PUT',
      data: JSON.stringify(devoured),
      contentType: 'application/json'
    }).then(
      function() {
        console.log('Updated id: ' + id);
        location.reload();
      }
    );
  });

  $('.add').on('submit', function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $('#burger').val().trim()
    };

    $.ajax({
      url: '/burgers',
      type: 'POST',
      data: JSON.stringify(newBurger),
      contentType: 'application/json'
    }).then(
      function() {
        console.log('Added burger');
        location.reload();
      }
    );
  });
});