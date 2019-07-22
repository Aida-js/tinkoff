var logins = [
    'ESTESLENKO',
    'AGARIB',
    'AVSMIRNOVA',
    'AYKARPOV',
    'DKARASHVILI',
    'SVASTAFEVA',
    'IDYANOV',
    'AESEROV1',
    'EMSURKOVA',
    'MGULSHIN1',
    'YASESYUNINA',
    'KDELIKATNIY',
    'NALAEVA',
    'TKISELEVA',
    'NGUSEV2',
    'AKOTIN1',
    'MDMITRIEV1',
    'AALBOROVA',
    'VIALEKSANDROVSKIY',
    'DYCHECHULIN',
    'AVFEDENKO',
    'ILEVANDOVSKAYA',
    'IMOROZOV6',
    'GPETROV1',
    'DEKUZMIN',
];

function init() {
    var container = document.getElementById('loginContainer');
    var str = '';

    for(var i = 0; i < logins.length; i++) {
        var login = logins[i];

        str += `<div class="logins" onclick="copyLogin('${login}')">${login}</div>`
    }

    container.innerHTML = str;
}

init();

function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

function copyLogin (loginName) {
    copyStringToClipboard(loginName);
}

function copyAllLogins() {
    copyStringToClipboard(logins.join(' '))
}