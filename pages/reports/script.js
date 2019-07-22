var firstBlock = [
    {
        text: '".Вместо возврата - списание" OR ".Возврат средств не поступил" OR ".Многократное списание" OR ".Банкомат не выдал деньги"',
        daysBeforeCurrentDate: 10
    },
    {
        text: '".Оплата другим способом" OR ".Товар/услуга не получены"',
        daysBeforeCurrentDate: 15
    },
    {
        text: '".Сумма заблокирована на карте"',
        daysBeforeCurrentDate: 1
    },
    {
        text: '',
    },
    {
        text: 'Открыт OR Отложен',
    }
]

var secondBlock = [
    {
        text: '".Бронь/подписка отменены" OR ".Списана другая сумма" OR "Отказ от операции в ТСП" OR "Отказ ТСП Утеря / кража"',
        daysBeforeCurrentDate: 20
    },
    {
        text: '".Возврат средств не поступил" OR ".Многократное списание" OR ".Оплата другим способом" OR ".Товар/услуга не получены"',
        daysBeforeCurrentDate: 30
    },
    {
        text: '"Отказ от операции в АТМ" OR "Отказ АТМ Утеря / кража" OR "Отказ от SMS-запросов" OR "Отказ от операции в ИБ/МП"',
        daysBeforeCurrentDate: 10
    },
    {
        text: '',
    },
    {
        text: 'Открыт OR Отложен',
    }
];

var thirdBlock = [
    {
        text: '".Возврат средств не поступил" OR ".Многократное списание" OR ".Оплата другим способом" OR ".Товар/услуга не получены"',
        daysBeforeCurrentDate: 60
    },
    {
        text: '".Бронь/подписка отменены" OR ".Списана другая сумма" OR "Отказ от операции в ТСП" OR "Отказ ТСП Утеря / кража"',
        daysBeforeCurrentDate: 50
    },
    {
        text: '".Банкомат не выдал деньги"',
        daysBeforeCurrentDate: 40
    },
    {
        text: '"Отказ от операции в АТМ" OR "Отказ АТМ Утеря / кража" OR "Отказ от SMS-запросов" OR "Отказ от операции в ИБ/МП"',
        daysBeforeCurrentDate: 40
    },
    {
        text: '"Отказ от операции в банкомате Тинькофф"',
        daysBeforeCurrentDate: 20
    },
    {
        text: '',
    },
    {
        text: 'Открыт OR Отложен',
    }
];

var fourthBlock = [
    {
        text: 'Претензия/Расходные операции',
        daysAfterCurrentDate: 2
    },
    {
        text: 'Претензия/Операции в банкомате Тинькофф/Не выдал деньги - карта Тинькофф',
        daysAfterCurrentDate: 2
    }
]

var blocks = {
    firstBlock: firstBlock,
    secondBlock: secondBlock,
    thirdBlock: thirdBlock,
    fourthBlock: fourthBlock
}

function setDateBack(days) {
    var d = new Date();
    
    d.setDate(d.getDate() - days);

    var day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    var month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;

    return `${day}.${month}.${d.getFullYear()}`;
}

function setDateFuture(days) {
    var d = new Date();
    
    d.setDate(d.getDate() + days);

    var day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    var month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;

    return `${day}.${month}.${d.getFullYear()}`;
}

function update(blockName) {
    var str = '';
    var blockInfo = blocks[blockName];

    for(var i = 0; i < blockInfo.length; i++) {
        var info = blockInfo[i];
        var days = info.daysAfterCurrentDate || info.daysBeforeCurrentDate || '';
        var date = '';
        var isDaysAfter = !!info.daysAfterCurrentDate;

        if (days !== '') {
            date = (info.daysAfterCurrentDate ? setDateFuture : setDateBack)(days);
        }

        str += `
            <tr>
                <td class="tableText" onclick="copyText(this)">${info.text}</td>
                <td class="tableText" onclick="copyText(this)">${isDaysAfter ? '< ' : ''}${date}</td> 
            </tr>
        `;
    }

    document.getElementById('blockContent').innerHTML = `
        <table style="width:100%; text-align: justify;">
            <tr>
                <th>Запросы</th>
                <th>Дата создания</th> 
            </tr>
            ${str}
        </table>
    `;
}


function addTolastBlock() {
    document.getElementById('blockContent').innerHTML = `
        <img src="../../icons/downey.jpg" alt="Smiley face">

        <div class='noti'> Maybe ты посмотришь на почте? </div>
    `
}

function copyText (element) {
    copyStringToClipboard(element.textContent);
}

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
