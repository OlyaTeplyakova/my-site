
  $(document).ready(function() {
    $(".statline").click(function() {
      $(this).closest(".setstatstyle").
      find(".serstatistics").slideToggle();
    });
  });