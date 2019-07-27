function getArr () {
    return [
        {
            id: "1",
            text: 'все поступающие на back_dispute и back_refute письма, пришедшие со времени окончания смены предыдущего   дежурного',
            needAlert: false,
            show: true,
            isShowed: false,
        },
        {
            id: "2",
            text: 'контроль за всеми открытиями, обновлениями и закрытиями инцидентов, "сборов обращений", плановых работ, касающихся функционала (при отсутствии Юли и Тани).',
            needAlert: false,
            show: true,
            isShowed: false
        },
        {
            id: "3",
            text: 'обработка отчетов «Обращение по переданным СПР» + «Запросы СПР»',
            needAlert: false,
            show: true,
            isShowed: false
        },
        {
            id: "4",
            text: 'обработка отчета "Банкоматы Тинькофф"',
            needAlert: false,
            show: true,
            isShowed: false
        },
        {
            id: "5",
            text: 'обработка отчета "SR, по которым истекают сроки опротестования"',
            needAlert: false,
            show: true,
            isShowed: false
        },
        {
            id: "6",
            text: 'обработка отчета по VIP-клиентам',
            needAlert: false,
            show: true,
            isShowed: false
        },
        {
            id: "7",
            text: 'в свободное от указанного выше время - обработка запросов по кнопке',
            needAlert: false,
            show: true,
            isShowed: false
        },
        {
            id: "8",
            text: 'Присвоить ЧР',
            needAlert: true,
            time: '12:00',
            isShowed: false
        },
        {
            id: "9",
            text: 'Присвоить вне очереди',
            needAlert: true,
            time: '15:00',
            isShowed: false
        },
        {
            id: "10",
            text: 'Проверить запросы по фильтрам',
            needAlert: true,
            time: '18:40',
            isShowed: false
        },
        {
            id: "11",
            text: 'Выгрузи 4-й блок',
            needAlert: true,
            time: '19:00',
            isShowed: false
        },
        {
            id: "12",
            text: 'Отчет сумма заблокирована',
            needAlert: true,
            time: '09:30',
            isShowed: false
        },
        {
            id: "13",
            text: 'Почта срочные/Обработка SR...',
            needAlert: true,
            time: '08:00',
            isShowed: false
        },
        {
            id: "14",
            text: 'Почта срочные/Обработка SR...',
            needAlert: true,
            time: '19:00',
            isShowed: false
        },
        {
            id: "15",
            text: 'ДВД ЧР',
            needAlert: true,
            time: '12:30',
            isShowed: false
        },
        {
            id: "16",
            text: 'Запросы по отчету "В работу"',
            needAlert: true,
            time: '19:00',
            isShowed: false
        },
        {
            id: "17",
            text: 'Отправь письмо: "Разблокировка суммы по карте"',
            needAlert: true,
            time: '17:00',
            isShowed: false
        },
        {
            id: "17",
            text: 'Сбор запросов закрыт. 1) Взять в работу. 2) Обновить заметки. 3) преждевременное зачисление',
            needAlert: true,
            time: '14:30',
            isShowed: false
        }
    ];
}

function deleteMessageBlock(id) {
    var el = document.getElementById(id);
    el.remove();
}

function setMessage(message) {
    var node = document.createElement("div");
    node.className = 'messageBlock';
    node.id = message.id;
    node.innerHTML = `<input type="checkbox" class="checkbox" onclick="deleteMessageBlock('${message.id}')">${message.text}`
    document.getElementById('messages').append(node);

    message.isShowed = true;

    if (message.needAlert) {
        alert(message.text);
    }
}


var intervalNew;


function startInterval() {
    var newArr = getArr();
    intervalNew = setInterval(function() {
        for (var i = 0; i < newArr.length; i++ ) {
            var message = newArr[i];
    
            if (message.show && !message.isShowed) {
                setMessage(message);
            }
    
            if (message.time) {
                var timeInfo = message.time.split(':');
                var messageTime = new Date().setHours(timeInfo[0], timeInfo[1]);
    
                if (new Date() >= messageTime && !message.isShowed) {
                    setMessage(message);
                }
            }
        }
    }, 500);
}

function stopInterval() {
    clearInterval(intervalNew);
    document.getElementById('messages').innerHTML = '';
}

