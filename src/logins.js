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

function copyLogin (loginName) {
    copyStringToClipboard(loginName);
}

function copyAllLogins() {
    copyStringToClipboard(logins.join(' '));
}