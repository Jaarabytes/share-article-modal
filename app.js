  $(document).ready(function() {
    $("#kuu").animate({
         opacity: 1,
         right: "5%" 
    }, 3000);
    // Get the cancel button
    var cancelButton = $('#close');
    var closeButton = $("#funga")
    // Get the container div
    var containerDiv = $('#kuu');
  
    // When the cancel button is clicked
    cancelButton.on('click', function() {
      // Reduce the opacity of the container div and its children to 0 in 2 seconds
      containerDiv.animate({
        opacity: 0
      }, 2000);
    });
    closeButton.on('click', function() {
        // Reduce the opacity of the container div and its children to 0 in 2 seconds
        containerDiv.animate({
          opacity: 0
        }, 2000);
      });
  });
  
  //integrate this with the cancel image url
  