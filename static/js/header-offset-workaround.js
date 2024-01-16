// found on https://github.com/twitter/bootstrap/issues/193

function detectHash() {
  function maybeScrollToHash() {
    if (window.location.hash) {
      var newTop = $(window.location.hash).offset().top - $('.navbar').height();
      $(window).scrollTop(newTop);
    }
  }

  $(window).bind('hashchange', function() {
    maybeScrollToHash();
  });

  maybeScrollToHash();
}

detectHash();

