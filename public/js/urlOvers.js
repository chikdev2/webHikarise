var url = window.location.href;
var newUrl = url.replace(/\.html$/, '');
window.history.replaceState({}, '', newUrl);