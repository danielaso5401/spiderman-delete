$(function() {
  $("#no").on({
    mouseover: function() {
      $(this).css({
        left: (Math.random() * 400) + "px",
        top: (Math.random() * 400) + "px",
      });
    }
  });
  
});