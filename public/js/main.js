const HOSTNAME = window.location.protocol + '//' + window.location.host + '/redirect/?r=';

var urlCopy = $('#generated-url');
var copyMessage = $('#copy-message');
var titleElem = $('#title');
var urlElem = $('#url');

copyMessage.hide();

urlElem.on('change', function(e) {
    var url = encodeURIComponent(urlElem.val());
    var title = encodeURIComponent(titleElem.val());

    if(title) {
        title = '&t=' + title;
    }

    if(url !== '') {
        urlCopy.text(HOSTNAME + url + title);
        copyMessage.show();
    } else {
        urlCopy.text('');
        copyMessage.hide();
    }
});

titleElem.on('change', function(e) {
    var url = encodeURIComponent(urlElem.val());
    var title = encodeURIComponent(titleElem.val());

    if(title !== '' && url !== '') {
        urlCopy.text(HOSTNAME + url + '&t=' + title)
        copyMessage.show();
    } else {
        urlCopy.text('');
        copyMessage.hide();
    }
});