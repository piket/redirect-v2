const HOSTNAME = window.location.protocol + '//' + window.location.host + '/redirect/?r=';

var urlCopy = $('#generated-url');
var copyMessage = $('#copy-message');
var titleElem = $('#title');
var urlElem = $('#url');
var urlSave = '';

copyMessage.hide();

urlElem.on('focus', function(e) {
    var url = urlElem.val();

    if(url === '') {
        urlElem.val('http://');
    }
});

urlElem.on('blur', function(e) {
    var url = urlElem.val();
    console.log(url);
    if(url === 'http://') {
        urlElem.val('');
    }
});

urlElem.on('paste', function(e) {
    var url = urlElem.val();
    console.log(url)
    if(url === 'http://') {
        urlElem.val('').val(e.target.value);
    }
})

// titleElem.on('change', function(e) {
//     var url = encodeURIComponent(urlElem.val());
//     var title = encodeURIComponent(titleElem.val());

//     if(title !== '' && url !== '') {
//         urlCopy.text(HOSTNAME + url + '&t=' + title)
//         copyMessage.show();
//     } else {
//         urlCopy.text('');
//         copyMessage.hide();
//     }
// });

$('#gen-url').submit(function(e) {
    e.preventDefault();
    var url = encodeURIComponent(urlElem.val());
    var title = encodeURIComponent(titleElem.val());

    if(title) {
        title = '&t=' + title;
    }

    if(url !== '') {
        urlCopy.val(HOSTNAME + url + title);
        urlSave = HOSTNAME + url + title;
        copyMessage.show();
    } else {
        urlCopy.val('');
        urlSave = '';
        copyMessage.hide();
    }
});

urlCopy.click(function(e) {
    this.select();
});

urlCopy.blur(function(e) {
    urlCopy.val(urlSave);
});

urlCopy.on('keydown', function(e) {
    urlSave = urlCopy.val();
    if(e.crtlKey || !e.metaKey) {
        // console.log()
    } else {
        e.preventDefault();
        console.log("prevented")
    }
});