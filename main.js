const noPinterest = (function() {

  const injectText = function() {
    window.onbeforeunload = function() {
      const googleInput = document.getElementById('lst-ib');
      googleInput.style.color = '#ffffff';
      googleInput.value += ' -site:pinterest.com';
    }
  }
  
  return {
    hide: function() {
      injectText();
    }
  }

})();

noPinterest.hide();