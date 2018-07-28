$(document).ready(() => {
  const $landmarks = $('.landmarks')

    $landmarks.hide();

    $( "#toggleLandmarks" ).click(function() {
        $landmarks.toggle();
      });

});