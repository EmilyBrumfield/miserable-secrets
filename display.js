$(document).ready(() => {
  const $page1 = $('.page1');
  const $page2 = $('.page2');
  const $page3 = $('.page3');
  const $page4 = $('.page4');
  const $page5 = $('.page5');
  const $page6 = $('.page6');
  const $page7 = $('.page7');
  const $page8 = $('.page8');

    $page2.hide();
    $page3.hide();
    $page4.hide();
    $page5.hide();
    $page6.hide();
    $page7.hide();
    $page8.hide();

    $( "#show1" ).click(function() {
        $page1.show();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    });

    $( "#show2" ).click(function() {
        $page2.show();
        $page1.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    });

    $( "#show3" ).click(function() {
        $page3.show();
        $page1.hide();
        $page2.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    });

    $( "#show4" ).click(function() {
        $page4.show();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    });

    $( "#show5" ).click(function() {
        $page5.show();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    });

    $( "#show6" ).click(function() {
        $page6.show();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page7.hide();
        $page8.hide();
    });

    $( "#show7" ).click(function() {
        $page7.show();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page8.hide();
    });

    $( "#show8" ).click(function() {
        $page8.show();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        
    });

});