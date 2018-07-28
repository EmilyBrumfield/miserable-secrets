$(document).ready(() => {
  const $page1 = $('.page1')
  const $page2 = $('.page2')

    $page2.hide();

    $( "#show1" ).click(function() {
        $page1.show();
        $page2.hide();
      });

      $( "#show2" ).click(function() {
        $page2.show();
        $page1.hide();
      });

});