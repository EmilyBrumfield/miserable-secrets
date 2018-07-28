$(document).ready(() => {
  const $page1 = $('.page1')
  const $page2 = $('.page2')
  const $page3 = $('.page3')
  const $page4 = $('.page4')

    $page2.hide();

    $( "#show1" ).click(function() {
        $page1.show();
        $page2.hide();
        $page3.hide();
        $page4.hide();
    });

    $( "#show2" ).click(function() {
        $page2.show();
        $page1.hide();
        $page3.hide();
        $page4.hide();
    });

    $( "#show3" ).click(function() {
        $page3.show();
        $page1.hide();
        $page2.hide();
        $page4.hide();
    });

    $( "#show4" ).click(function() {
        $page4.show();
        $page1.hide();
        $page2.hide();
        $page3.hide();
    });

});