// --- Инициализация Telegram Web App ---
let tg = window.Telegram?.WebApp;
let urlParams = { bonuses: 0, userId: null }; // Объект для хранения параметров из URL

if (tg) {
    tg.expand();
    tg.ready();
    console.log("Telegram Web App SDK инициализирован.");
    console.log("TG Init Data:", tg.initData);
    console.log("TG User:", tg.initDataUnsafe?.user);
} else {
    console.warn("Telegram Web App SDK не найден. Работаем в обычном режиме.");
}

// --- Получение бонусов и ID из URL ---
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const bonusParam = urlParams.get('bonus');
    const idParam = urlParams.get('id');
    
    return {
        bonuses: bonusParam ? parseInt(bonusParam, 10) : 0,
        userId: idParam || null // ID будет строкой или null, если не задан
    };
}

// --- Отправка данных в Telegram Bot ---
function sendToTelegramBot(data) {
    if (tg && tg.sendData) {
        try {
            // Преобразуем объект данных в JSON строку
            const jsonData = JSON.stringify(data);
            console.log("Отправка данных в Telegram:", jsonData);
            tg.sendData(jsonData);
            // alert("Данные отправлены в бот!"); // Для тестирования
        } catch (error) {
            console.error("Ошибка при отправке данных в Telegram:", error);
            alert("Не удалось отправить данные в бот. Попробуйте еще раз.");
        }
    } else {
        // Для тестирования в браузере
        console.log("Отправка данных (браузер):", data);
        alert("Данные для отправки:\n" + JSON.stringify(data, null, 2));
    }
}

// --- Данные категорий ---
const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'relay', name: 'Блоки управления' },
    { id: 'switch', name: 'Радиовыключатели' },
    { id: 'server', name: 'Сервер умного дома' },
    { id: 'datchiki', name: 'Датчики' },
    { id: 'antenna', name: 'Антенны' },
    { id: 'komplekt', name: 'Комплекты' },
    { id: 'kran', name: 'Шаровые краны' },
    { id: 'karniz', name: 'Электрокарнизы' },
    { id: 'warm_floor', name: 'Теплый пол' },
    { id: 'lock', name: 'Умный замок' },
    { id: 'other', name: 'Сопутствующие товары' }
    
];

// --- Данные товаров с модификациями (без остатков), описанием и изображениями для модификаций ---
const products = [
    {
        "id": 1,
        "name": "Стартовый набор партнера ЛАЙТ",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg",
        "category": "komplekt",
        "description": "Выключатель и реле – протестируйте Хайт Про у себя дома",
        "modifications": [
            {
                "id": "296594",
                "name": "Белый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg"
            },
            {
                "id": "296596",
                "name": "Бежевый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg"
            },
            {
                "id": "296598",
                "name": "Белый с Relay-F",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg"
            },
            {
                "id": "296600",
                "name": "Бежевый с Relay-F",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg"
            }
        ]
    },
    {
        "id": 2,
        "name": "Стартовый набор партнера БЕЙЗ",
        "price": 9980.0,
        "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
        "category": "komplekt",
        "description": "Комплект для первого знакомства с устройствами HiTE PRO",
        "modifications": [
            {
                "id": "296440",
                "name": "Белый с датчиком Smart Water",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png"
            },
            {
                "id": "296442",
                "name": "Бежевый с датчиком Smart Water",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png"
            },
            {
                "id": "296720",
                "name": "Белый с датчиком Smart Air",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png"
            },
            {
                "id": "296714",
                "name": "Бежевый с датчиком Smart Air",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png"
            },
            {
                "id": "296724",
                "name": "Белый с датчиком Smart Checker",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png"
            },
            {
                "id": "296718",
                "name": "Бежевый с датчиком Smart Checker",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png"
            },
            {
                "id": "296722",
                "name": "Белый с датчиком Smart Motion",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png"
            },
            {
                "id": "296716",
                "name": "Бежевый с датчиком Smart Motion",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png"
            }
        ]
    },
    {
        "id": 3,
        "name": "Билет на живое обучение в шоуруме HiTE PRO 27 сентября",
        "price": 6000.0,
        "image": "https://static.tildacdn.com/stor3832-3263-4465-a262-303764333265/35976172.png",
        "category": "other",
        "description": "Осталось 10 мест. Оффлайн-интенсив за 1 день. Идеально подойдёт тем, у кого ещё нет или совсем мало опыта в работе с HiTE PRO.",
        "modifications": [
            {
                "id": "300012",
                "name": "Билет на живое обучение в шоуруме HiTE PRO 27 сентября",
                "price": 6000.0,
                "image": "https://static.tildacdn.com/stor3832-3263-4465-a262-303764333265/35976172.png"
            }
        ]
    },
    {
        "id": 4,
        "name": "Каталог HiTE PRO",
        "price": 1.0,
        "image": "https://static.tildacdn.com/stor3335-3962-4232-a163-353032383535/78693873.jpg",
        "category": "komplekt",
        "description": "Печатный каталог альбомной ориентации. Дарим 1 каталог за каждые 5000 руб суммы заказа.",
        "modifications": [
            {
                "id": "286248",
                "name": "Каталог HiTE PRO",
                "price": 1.0,
                "image": "https://static.tildacdn.com/stor3335-3962-4232-a163-353032383535/78693873.jpg"
            }
        ]
    },
    {
        "id": 5,
        "name": "Сервер умного дома Gateway",
        "price": 9980.0,
        "image": "https://static.tildacdn.com/stor3461-3031-4532-b539-366236666236/68601724.png",
        "category": "server",
        "description": "Сервер умного дома используется для беспроводного управления через приложение HiTE PRO или голосовых помощников Алиса, Siri, Маруся, Салют и Google Assistant. Все блоки управления и датчики HiTE PRO можно связать с сервером Gateway.\n\nВ приложении HiTE PRO вы можете:\n\nуправлять отдельными устройствами, комнатами или зонами\nвидеть состояние всех устройств, а также график показаний данных с датчиков\nсоздавать автоматические сценарии управления светом, климатом, электроприводами и другими электроприборами – по времени, датчикам или событию\nполучать push-уведомления о запуске сценария или изменении состояния устройств, например, датчиков\nпросматривать видео с камер в онлайн-режиме\nПродается в комплекте с блоком питания.",
        "modifications": [
            {
                "id": "207338",
                "name": "Gateway",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/stor3461-3031-4532-b539-366236666236/68601724.png"
            }
        ]
    },
    {
        "id": 6,
        "name": "Умная розетка Smart Socket",
        "price": 3080.0,
        "image": "https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg",
        "category": "relay",
        "description": "Блок приема сигнала в виде модуля с розеткой с 1 каналом управления – Включение / Выключение нагрузки. <br /><br />Блок приема устанавливается и подключается к нагрузке, которой надо управлять. Замыкает / размыкает цепь питания при получении сигнала от передатчиков, с которыми связан.<br /><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/umnaya-rozetka-smart-socket\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/umnaya-rozetka-smart-socket</a><br /><br />",
        "modifications": [
            {
                "id": "207098",
                "name": "Белый",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg"
            },
            {
                "id": "296964",
                "name": "Черный",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg"
            }
        ]
    },
    {
        "id": 7,
        "name": "Одноканальное радиореле Relay-F1",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "<br />Блок приема сигнала Relay-F1 подключается «в разрыв» фазного провода перед светильником или другим электроприбором, которым нужно управлять. <br /><br />Замыкает / размыкает цепь питания при получении сигнала от передатчиков, с которыми связан. <br />Может быть также подключен к проводному выключателю, что позволяет совместить проводное и беспроводное управление освещением (например, в ситуациях, когда беспроводной выключатель устанавливается в дополнение к проводному).<br /><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-f1\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-f1</a><br /><br />",
        "modifications": [
            {
                "id": "206954",
                "name": "Relay-F1",
                "price": 3480.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 8,
        "name": "Двухканальное радиореле Relay-F2",
        "price": 4980.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "<br />Блок приема сигнала Relay-F2 подключается «в разрыв» фазного провода перед светильником или другим электроприбором, которым нужно управлять. <br /><br />Замыкает / размыкает цепь питания при получении сигнала от передатчиков, с которыми связан. <br />Может быть также подключен к проводному выключателю, что позволяет совместить проводное и беспроводное управление освещением (например, в ситуациях, когда беспроводной выключатель устанавливается в дополнение к проводному).<br /><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-f2\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-f2</a><br /><br />",
        "modifications": [
            {
                "id": "207042",
                "name": "Relay-F2",
                "price": 4980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 9,
        "name": "Одноканальное радиореле Relay-1",
        "price": 3080.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Компактный одноканальный блок радиореле Relay-1 подключается к светильнику или другому электроприбору, которым нужно управлять с помощью передатчиков или сервера умного дома HiTE PRO. Получая от них сигнал блок Relay-1 замыкает/размыкает электрическую цепь.\n\nДоступна модификация с «сухим контактом», который не имеет непосредственной связи с источником питания и заземлением, т.е. у блока управления свой провод питания, а у нагрузки свой.",
        "modifications": [
            {
                "id": "206748",
                "name": "220 В",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "208984",
                "name": "12 В",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "208972",
                "name": "12 В (сухой контакт)",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "206940",
                "name": "220 В (сухой контакт)",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 10,
        "name": "Двухканальное радиореле Relay-2",
        "price": 4780.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Компактный двухканальный блок радиореле Relay-2 подключается к светильнику или другому электроприбору, которым нужно управлять с помощью передатчиков или сервера умного дома HiTE PRO. Получая от них сигнал блок Relay-2 замыкает/размыкает электрическую цепь.\n\nДоступна модификация с «сухим контактом», который не имеет непосредственной связи с источником питания и заземлением, т.е. у блока управления свой провод питания, а у нагрузки свой.",
        "modifications": [
            {
                "id": "206750",
                "name": "220 В",
                "price": 4780.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "206942",
                "name": "220 В (сухой контакт)",
                "price": 4780.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 11,
        "name": "Пульт ДУ DST-1",
        "price": 1480.0,
        "image": "https://static.tildacdn.com/tild3530-6662-4763-a233-653838303239/015-HTPR.png",
        "category": "switch",
        "description": "Предназначен для дистанционного управления радиореле HiTE PRO<br /><br />",
        "modifications": [
            {
                "id": "276676",
                "name": "DST-1",
                "price": 1480.0,
                "image": "https://static.tildacdn.com/tild3530-6662-4763-a233-653838303239/015-HTPR.png"
            }
        ]
    },
    {
        "id": 12,
        "name": "Пульт ДУ DST-4",
        "price": 1980.0,
        "image": "https://static.tildacdn.com/tild3031-6261-4265-b335-393135636437/016-HTPR_1.png",
        "category": "switch",
        "description": "Предназначен для дистанционного управления радиореле HiTE PRO<br /><br />",
        "modifications": [
            {
                "id": "274770",
                "name": "DST-4",
                "price": 1980.0,
                "image": "https://static.tildacdn.com/tild3031-6261-4265-b335-393135636437/016-HTPR_1.png"
            }
        ]
    },
    {
        "id": 13,
        "name": "Трехканальный радиомодуль UNI",
        "price": 1980.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "switch",
        "description": "Подключается к традиционному выключателю и делает его беспроводным",
        "modifications": [
            {
                "id": "207094",
                "name": "UNI",
                "price": 1980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 14,
        "name": "Датчик питания Smart Power",
        "price": 2480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "datchiki",
        "description": "Отправляет радиосигнал при подаче и при снятии напряжения с его клемм<br /><br />",
        "modifications": [
            {
                "id": "209170",
                "name": "Smart Power",
                "price": 2480.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 15,
        "name": "Одноканальное радиореле Relay-DRIVE",
        "price": 3980.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "HiTE PRO Relay-DRIVE используется для беспроводного управления электроприводами: например, электрокарнизами, жалюзи, рольставнями, воротами и другими.\n\nПодключается «в разрыв» цепи питания перед электроприводом, которым нужно управлять с помощью беспроводных выключателей, пультов или сервера умного дома HiTE PRO. \n\nУ блока есть модификации на 220 и 12 В, а также с «сухим контактом», который не имеет непосредственной связи с источником питания и заземлением, т.е. у блока управления свой провод питания, а у нагрузки свой.",
        "modifications": [
            {
                "id": "207052",
                "name": "220В",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "207140",
                "name": "12В",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "208982",
                "name": "220В (сухой контакт)",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "208980",
                "name": "12В (сухой контакт)",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 16,
        "name": "Датчик движения и освещенности Smart Motion",
        "price": 3280.0,
        "image": "https://static.tildacdn.com/tild6463-6231-4164-b366-643964316661/smartm.jpg",
        "category": "datchiki",
        "description": "Предоставляет информацию об уровне освещенности и движениях людей в помещении",
        "modifications": [
            {
                "id": "207054",
                "name": "Smart Motion",
                "price": 3280.0,
                "image": "https://static.tildacdn.com/tild6463-6231-4164-b366-643964316661/smartm.jpg"
            }
        ]
    },
    {
        "id": 17,
        "name": "Датчик температуры и влажности Smart Air",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/tild6266-3938-4565-b863-656632393366/sma.jpg",
        "category": "datchiki",
        "description": "Предоставляет информацию о температуре и влажности помещения<br /><br />",
        "modifications": [
            {
                "id": "207056",
                "name": "Smart Air",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6266-3938-4565-b863-656632393366/sma.jpg"
            }
        ]
    },
    {
        "id": 18,
        "name": "Датчик открытия Smart Checker",
        "price": 1980.0,
        "image": "https://static.tildacdn.com/tild6164-6332-4233-b461-373132663764/check.jpg",
        "category": "datchiki",
        "description": "Позволяет контролировать положение (открыто или закрыто) подвижных элементов",
        "modifications": [
            {
                "id": "206966",
                "name": "Smart Checker",
                "price": 1980.0,
                "image": "https://static.tildacdn.com/tild6164-6332-4233-b461-373132663764/check.jpg"
            }
        ]
    },
    {
        "id": 19,
        "name": "Одноклавишный радиовыключатель звонкового типа LE-1",
        "price": 1480.0,
        "image": "https://static.tildacdn.com/tild3232-6365-4663-a162-393230323539/1le-1.jpg",
        "category": "switch",
        "description": "Кнопочный одноканальный беспроводной выключатель с рамкой серии Legrand Etika. Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. Имеет квадратную кнопку и представлен в двух цветах: белый и слоновая кость.",
        "modifications": [
            {
                "id": "207090",
                "name": "Слоновая кость",
                "price": 1480.0,
                "image": "https://static.tildacdn.com/tild3962-6133-4966-b731-656337656262/2le-1.jpg"
            },
            {
                "id": "207044",
                "name": "Белый",
                "price": 1480.0,
                "image": "https://static.tildacdn.com/tild3232-6365-4663-a162-393230323539/1le-1.jpg"
            }
        ]
    },
    {
        "id": 20,
        "name": "Двухклавишный радиовыключатель звонкового типа LE-2",
        "price": 1780.0,
        "image": "https://static.tildacdn.com/tild6562-3535-4637-b562-313032663962/le-22.jpg",
        "category": "switch",
        "description": "Кнопочный двухканальный беспроводной выключатель с рамкой серии Legrand Etika. Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. Имеет квадратную кнопку и представлен в двух цветах: белый и слоновая кость.",
        "modifications": [
            {
                "id": "207050",
                "name": "Слоновая кость",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/tild6562-3535-4637-b562-313032663962/le-22.jpg"
            },
            {
                "id": "207092",
                "name": "Белый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/tild6637-3537-4232-b866-343238343761/1le-2.jpg"
            }
        ]
    },
    {
        "id": 21,
        "name": "Антенна для Relay-4M",
        "price": 980.0,
        "image": "https://static.tildacdn.com/tild3134-6363-4436-b562-303038303564/JCXP_3m_RG174_SMA750.jpg",
        "category": "relay",
        "description": "<strong style=\"color: rgb(242, 0, 0);\">Цена окончательная, скидка уже применена.</strong><br />При установке блока Relay-4 в металлические распределительные щиты может наблюдаться уменьшение дальности приема сигнала блоком от пульта из-за экранирования радиосигнала. <br /><br />Антенна с кабелем длиной 3 метра может быть вынесена за пределы распределительного щита, что позволит значительно увеличить дальность приема сигнала. Крепление антенны осуществляется на двусторонний скотч.<br /><br /><br />Высота: 290 мм<br />Диаметр: 29 мм<br />Длина кабеля: 3 м",
        "modifications": [
            {
                "id": "207088",
                "name": "Антенна для Relay-4M",
                "price": 980.0,
                "image": "https://static.tildacdn.com/tild3134-6363-4436-b562-303038303564/JCXP_3m_RG174_SMA750.jpg"
            }
        ]
    },
    {
        "id": 22,
        "name": "Одноканальное радиореле Relay-LED",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "<br />HiTE PRO Relay-LED – это блок приема сигнала с функцией диммирования (светорегулирования) для светодиодных ламп и лент. Получая сигнал от передатчиков HiTE PRO, блок замыкает/размыкает/диммирует электрическую цепь. <br /><br />Особенности блока:<br /><ul><li data-list=\"bullet\">Тепловая защита. При срабатывании светодиод блока начинает мигать, а сервер умного дома отображает ошибку на плитке устройства;</li><li data-list=\"bullet\">Защита по току. Аналогичные события происходят при превышении тока 10 А;</li><li data-list=\"bullet\">Подключение внешней кнопки с возможностью смены типа: клавишная/кнопочная. С кнопочной можно регулировать свечение.</li></ul>Вы можете настроить:<br /><ul><li data-list=\"bullet\">плавный пуск или мгновенное включение;</li><li data-list=\"bullet\">скорость изменения яркости при управлении с пульта/выключателя;</li><li data-list=\"bullet\">минимальную и максимальную яркость свечения.</li></ul><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-led\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-led</a><br /><br />",
        "modifications": [
            {
                "id": "210526",
                "name": "Relay-LED",
                "price": 3480.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 23,
        "name": "Датчик протечки воды Smart Water",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/tild6134-3834-4832-b163-323039653438/Smart_Water1.png",
        "category": "datchiki",
        "description": "Позволяет определять наличие и отсутствие протечки воды.\n\nПри отсутствии протечки датчик отправляет радиосигнал, подтверждающий, что он находится в рабочем состоянии, 1 раз в 2 часа. Если обнаружена протечка воды, датчик начинает отправлять радиосигнал 1 раз в минуту.",
        "modifications": [
            {
                "id": "210496",
                "name": "Smart Water",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6134-3834-4832-b163-323039653438/Smart_Water1.png"
            }
        ]
    },
    {
        "id": 24,
        "name": "Антенна HYBRID BOX",
        "price": 8140.0,
        "image": "https://static.tildacdn.com/tild3662-3564-4163-a631-616664323864/hybrid-box.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": [
            {
                "id": "206754",
                "name": "TS-9",
                "price": 8140.0,
                "image": "https://static.tildacdn.com/tild3662-3564-4163-a631-616664323864/hybrid-box.jpg"
            },
            {
                "id": "279368",
                "name": "CRC-9",
                "price": 8140.0,
                "image": "https://static.tildacdn.com/tild3662-3564-4163-a631-616664323864/hybrid-box.jpg"
            }
        ]
    },
    {
        "id": 25,
        "name": "Антенна DUO BOX",
        "price": 10340.0,
        "image": "https://static.tildacdn.com/tild3336-3461-4630-a664-643939333437/duo-box.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": [
            {
                "id": "279366",
                "name": "CRC-9",
                "price": 10340.0,
                "image": "https://static.tildacdn.com/tild3336-3461-4630-a664-643939333437/duo-box.jpg"
            },
            {
                "id": "206928",
                "name": "TS-9",
                "price": 10340.0,
                "image": "https://static.tildacdn.com/tild3336-3461-4630-a664-643939333437/duo-box.jpg"
            }
        ]
    },
    {
        "id": 26,
        "name": "Кабельная сборка SMA-SMA",
        "price": 1100.0,
        "image": "https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": [
            {
                "id": "210478",
                "name": "SMA-SMA",
                "price": 1100.0,
                "image": "https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg"
            }
        ]
    },
    {
        "id": 27,
        "name": "Пигтейл CRC9/TS9",
        "price": 400.0,
        "image": "https://static.tildacdn.com/tild3733-6439-4735-b031-323238626664/pigtail.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": [
            {
                "id": "207428",
                "name": "CRC-9",
                "price": 400.0,
                "image": "https://static.tildacdn.com/tild3733-6439-4735-b031-323238626664/pigtail.jpg"
            },
            {
                "id": "277678",
                "name": "TS-9",
                "price": 400.0,
                "image": "https://static.tildacdn.com/tild3733-6439-4735-b031-323238626664/pigtail.jpg"
            }
        ]
    },
    {
        "id": 28,
        "name": "USB-удлинитель на 5 метров",
        "price": 490.0,
        "image": "https://static.tildacdn.com/tild3339-6633-4939-b539-373261656265/usb-udlin-10m.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": [
            {
                "id": "207542",
                "name": "USB-удлинитель на 5 метров",
                "price": 490.0,
                "image": "https://static.tildacdn.com/tild3339-6633-4939-b539-373261656265/usb-udlin-10m.jpg"
            }
        ]
    },
    {
        "id": 29,
        "name": "Шаровой кран с электроприводом Bugatti Pro 220В",
        "price": 8361.0,
        "image": "https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения",
        "modifications": [
            {
                "id": "224584",
                "name": " Bugatti Pro 220В - 1/2",
                "price": 8361.0,
                "image": "https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png"
            },
            {
                "id": "224586",
                "name": "Bugatti Pro 220В - 3/4",
                "price": 8991.0,
                "image": "https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png"
            },
            {
                "id": "224598",
                "name": "Bugatti Pro 220В - 1",
                "price": 11961.0,
                "image": "https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png"
            }
        ]
    },
    {
        "id": 30,
        "name": "Шаровой кран с электроприводом Bugatti Pro 12В",
        "price": 8991.0,
        "image": "https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения",
        "modifications": [
            {
                "id": "224594",
                "name": " Bugatti Pro 12В - 1/2",
                "price": 8991.0,
                "image": "https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png"
            },
            {
                "id": "224586",
                "name": "Bugatti Pro 12В - 3/4",
                "price": 9531.0,
                "image": "https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png"
            },
            {
                "id": "224596",
                "name": "Bugatti Pro 12В - 1",
                "price": 10791.0,
                "image": "https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png"
            }
        ]
    },
    {
        "id": 31,
        "name": "Шаровой кран с электроприводом PROFI 220В",
        "price": 7641.0,
        "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии PROFI для блокировки водоснабжения",
        "modifications": [
            {
                "id": "224608",
                "name": "PROFI 220В - 1/2",
                "price": 7641.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "224606",
                "name": "PROFI 220В - 3/4",
                "price": 8451.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "224592",
                "name": "PROFI 220В - 1",
                "price": 9531.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "224612",
                "name": "PROFI 220В - 1 1/4",
                "price": 10161.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            }
        ]
    },
    {
        "id": 32,
        "name": "Шаровой кран с электроприводом PROFI 12В",
        "price": 7191.0,
        "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии PROFI для блокировки водоснабжения",
        "modifications": [
            {
                "id": "224616",
                "name": "PROFI 12В - 1/2",
                "price": 7191.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "224590",
                "name": "PROFI 12В - 3/4",
                "price": 7641.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "224614",
                "name": "PROFI 12В - 1",
                "price": 9531.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "224600",
                "name": "PROFI 12В - 1 1/4",
                "price": 10161.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            }
        ]
    },
    {
        "id": 33,
        "name": "Шаровой кран с электроприводом MK 220В",
        "price": 5481.0,
        "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии МК для блокировки водоснабжения",
        "modifications": [
            {
                "id": "224604",
                "name": "MK 220В - 1/2",
                "price": 5481.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            },
            {
                "id": "224588",
                "name": "MK 220В - 3/4",
                "price": 5931.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            },
            {
                "id": "224610",
                "name": "MK 220В - 1",
                "price": 7191.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            }
        ]
    },
    {
        "id": 34,
        "name": "Шаровой кран с электроприводом MK 12В",
        "price": 5481.0,
        "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии МК для блокировки водоснабжения",
        "modifications": [
            {
                "id": "224618",
                "name": "MK 12В - 1/2",
                "price": 5481.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            },
            {
                "id": "224620",
                "name": "MK 12В - 3/4",
                "price": 5931.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            }
        ]
    },
    {
        "id": 35,
        "name": "Демонстрационный набор",
        "price": 10880.0,
        "image": "https://static.tildacdn.com/stor3162-3465-4830-b330-366230666235/93883933.png",
        "category": "komplekt",
        "description": "Отлично подходит для презентации выключателей HiTE PRO!",
        "modifications": [
            {
                "id": "225982",
                "name": "Демонстрационный набор",
                "price": 10880.0,
                "image": "https://static.tildacdn.com/stor3162-3465-4830-b330-366230666235/93883933.png"
            }
        ]
    },
    {
        "id": 36,
        "name": "Демонстрационный стенд",
        "price": 48180.0,
        "image": "https://static.tildacdn.com/stor3861-3766-4238-b135-386335383633/36501679.png",
        "category": "komplekt",
        "description": "Собранный и настроенный экспонат для демонстрации работы устройств HiTE PRO",
        "modifications": [
            {
                "id": "209812",
                "name": "Демонстрационный стенд",
                "price": 48180.0,
                "image": "https://static.tildacdn.com/stor3861-3766-4238-b135-386335383633/36501679.png"
            }
        ]
    },
    {
        "id": 37,
        "name": "Раздвижной карниз с электроприводом Novo N21",
        "price": 0.0,
        "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
        "category": "karniz",
        "description": "Цену уточняйте с менеджером",
        "modifications": [
            {
                "id": "266210",
                "name": "Novo N21 - 1 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "266210",
                "name": "Novo N21 - 2 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "266210",
                "name": "Novo N21 - 3 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "266210",
                "name": "Novo N21 - 4 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "266210",
                "name": "Novo N21 - 5 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "266210",
                "name": "Novo N21 - 6 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            }
        ]
    },
    {
        "id": 38,
        "name": "Рулонный карниз Novo K35-TP-6-28",
        "price": 0.0,
        "image": "https://static.tildacdn.com/tild3236-6365-4932-b331-376534386130/5ad95401d809d.jpg",
        "category": "karniz",
        "description": "Цену уточняйте с менеджером",
        "modifications": [
            {
                "id": "299196",
                "name": "Внутривальный электропривод для рулонных штор Novo K35-TP-6-28",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild3236-6365-4932-b331-376534386130/5ad95401d809d.jpg"
            }
        ]
    },
    {
        "id": 39,
        "name": "Одноканальное радиореле Relay-DIM",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "<br /><strong>HiTE PRO Relay-DIM</strong> – это одноканальное радиореле с функцией диммирования. По сути является модификацией блока HiTE PRO Relay-1. Подключается к светильнику (или другому прибору), которыми нужно управлять с помощью беспроводных выключателей или ДУ пультов HiTE PRO. <br /><br />Получая сигнал от передатчиков, блок замыкает/размыкает/диммирует электрическую цепь. Работает с диодными лампами с регулировкой яркости, а аткже с лампами накаливания - но на лампах накаливания максимальная мощность 100 Вт. <br /><br />Беспроводное управление электроприборами возможно посредством радиовыключателей, пультов, приложения HiTE PRO для умного дома и голосовых команд “Алисе”.<br /><br />Отличия от старой версии (2020 г.):<br />- защита от пусковых токов и короткого замыкания<br />- работа от нуля и фазы, теперь блок берет себе питание из сети и как следствие не будет никаких миганий / морганий ламп, с этим связанных<br />- подобран профиль управления для диммирования светодиодных ламп (установлен по умолчанию), с ним лампы диммируются равномерно и красиво<br /><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-dim\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-dim</a><br /><br />",
        "modifications": [
            {
                "id": "206924",
                "name": "Relay-DIM",
                "price": 3480.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 40,
        "name": "Трёхканальный блок радиореле Relay-LED3S",
        "price": 8980.0,
        "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category": "relay",
        "description": "HiTE PRO Relay-LED3S – это трехканальное реле является частью#nbsp;модульной системы, используется для беспроводного управления 3-мя линиями электрической цепи#nbsp;(3 одноцветных светодиодных ленты или 1 RGB-лента) и имеет шину данных для подключения#nbsp;к радиопередающему устройству – HiTE PRO Relay-M.<br /><br /><strong>Внимание! Работает только с Relay-4M!</strong> <br /><br />С помощью этого блока можно не только включать/выключать, но и регулировать яркость светодиодной/RGB-ленты.#nbsp;Передатчиками#nbsp;являются другие#nbsp;устройства HiTE PRO: беспроводные выключатели,#nbsp;пульты ДУ, датчики, сервер умного дома. <br /><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-led3s\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-led3s</a><br /><br />",
        "modifications": [
            {
                "id": "276780",
                "name": "Relay-LED3S",
                "price": 8980.0,
                "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png"
            }
        ]
    },
    {
        "id": 41,
        "name": "Одноканальный сенсорный радиовыключатель SN-C",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/tild3761-6534-4132-b134-333731313636/---36-455x455.png",
        "category": "switch",
        "description": "Беспроводной сенсорный мебельный выключатель* HiTE PRO SN. Имеет одну сенсорную кнопку и встраивается в мебель в подготовленное отверстие 35х12 мм. Работа от одной батарейки — более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.",
        "modifications": [
            {
                "id": "276786",
                "name": "Черный",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3761-6534-4132-b134-333731313636/---36-455x455.png"
            },
            {
                "id": "276784",
                "name": "Белый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3632-6366-4637-a262-663161323231/---33-455x455.png"
            },
            {
                "id": "276782",
                "name": "Алюминиевый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6233-3335-4939-a434-613164666465/---34-455x455.png"
            }
        ]
    },
    {
        "id": 42,
        "name": "Контактор модульный КМ 63А 2NО",
        "price": 3277.0,
        "image": "https://static.tildacdn.com/tild6539-3532-4363-a166-656566656465/A25DE53A5D1ABF6D4182.jpg",
        "category": "other",
        "description": "Двухмодульный контактор",
        "modifications": [
            {
                "id": "276872",
                "name": "КМ 63А 2NО",
                "price": 3277.0,
                "image": "https://static.tildacdn.com/tild6539-3532-4363-a166-656566656465/A25DE53A5D1ABF6D4182.jpg"
            }
        ]
    },
    {
        "id": 43,
        "name": "Сервопривод электротермический Valtec",
        "price": 1800.0,
        "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg",
        "category": "other",
        "description": "Электротермический двухпозиционный сервопривод VT.TE3043 применяется для автоматического управления радиаторным или коллекторным термостатическим клапаном систем водяного отопления (в том числе теплого пола) и охлаждения зданий. Действие привода основано на расширении заполняющего сильфон армированного парафина при протекании электрического тока через встроенный нагревательный элемент по сигналу от комнатного термостата или контроллера.",
        "modifications": [
            {
                "id": "276876",
                "name": "220 В - Нормально-Закрытый",
                "price": 1800.0,
                "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg"
            },
            {
                "id": "276878",
                "name": "24 В - Нормально-Закрытый",
                "price": 1800.0,
                "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg"
            },
            {
                "id": "276874",
                "name": "220 В - Нормально-Открытый",
                "price": 1800.0,
                "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg"
            },
            {
                "id": "276880",
                "name": "24 В - Нормально-Открытый",
                "price": 1800.0,
                "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg"
            }
        ]
    },
    {
        "id": 44,
        "name": "Клапан термостатический Valtec",
        "price": 1148.0,
        "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg",
        "category": "other",
        "description": "Прямой клапан для ручного или автоматического регулирования расхода теплоносителя через отопительный прибор. Во втором случае комплектуется термостатической головкой или сервоприводом, управляемым комнатным термостатом или контроллером.\n\nИспользование регулирующих клапанов VALTEC c термостатической головкой позволяет автоматически поддерживать заданную температуру в помещении с точностью до 1 °С.",
        "modifications": [
            {
                "id": "276892",
                "name": "Прямой - 1/2",
                "price": 1148.0,
                "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg"
            },
            {
                "id": "276886",
                "name": "Угловой - 1/2",
                "price": 1127.0,
                "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg"
            },
            {
                "id": "276890",
                "name": "Прямой - 3/4",
                "price": 1470.0,
                "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg"
            },
            {
                "id": "276888",
                "name": "Угловой - 3/4",
                "price": 1807.0,
                "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg"
            }
        ]
    },
    {
        "id": 45,
        "name": "Влагозащищённый одноклавишный радиовыключатель IP65-1",
        "price": 3780.0,
        "image": "https://static.tildacdn.com/tild3366-3034-4462-b563-313665666636/65-1-1.png",
        "category": "switch",
        "description": "Клавишный одноканальный выключатель IP65-1 продается в комплекте с радиомодулем HiTE PRO Uni, что делает его беспроводным.\n\nУ выключателя высокий класс влагозащиты. Выключатель полностью непроницаем для пыли и струй воды под давлением.\n\nРадиомодуль HiTE PRO Uni работает от одной батарейки более 7 лет. Частота, на которой работает радиомодуль 868 МГц позволяет управлять освещением на расстоянии до 250 м. Имеет квадратную кнопку.\n\nДля работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.",
        "modifications": [
            {
                "id": "279722",
                "name": "IP65-1",
                "price": 3780.0,
                "image": "https://static.tildacdn.com/tild3366-3034-4462-b563-313665666636/65-1-1.png"
            }
        ]
    },
    {
        "id": 46,
        "name": "Влагозащищённый двухклавишный радиовыключатель IP65-2",
        "price": 3980.0,
        "image": "https://static.tildacdn.com/tild6462-6139-4535-a432-616238373764/65-2-1.png",
        "category": "switch",
        "description": "Клавишный двухканальный выключатель IP65-2 продается в комплекте с радиомодулем HiTE PRO Uni, что делает его беспроводным.\n\nУ выключателя высокий класс влагозащиты. Выключатель полностью непроницаем для пыли и струй воды под давлением.\n\nРадиомодуль HiTE PRO Uni работает от одной батарейки более 7 лет. Частота, на которой работает радиомодуль 868 МГц позволяет управлять освещением на расстоянии до 250 м. Имеет квадратную кнопку.\n\nДля работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.",
        "modifications": [
            {
                "id": "279724",
                "name": "IP65-2",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6462-6139-4535-a432-616238373764/65-2-1.png"
            }
        ]
    },
    {
        "id": 47,
        "name": "Relay-4M",
        "price": 9980.0,
        "image": "https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png",
        "category": "relay",
        "description": "HiTE PRO Relay-4M – это четырехканальное радиореле, является мастер устройством модульной системы. <br /><br />Используется для беспроводного управления 4-мя линиями электрической цепи и имеет шину данных для подключения ведомых устройств (HiTE PRO Relay-S). <br />Получая сигнал от передатчиков, блок замыкает/размыкает электрическую цепь. Передатчиками являются другие устройства HiTE PRO: беспроводные выключатели, пульты ДУ, датчики, сервер умного дома. <br /><br />Блок монтируется на DIN рейку в распределительном щите. <br /><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4m\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4m</a>",
        "modifications": [
            {
                "id": "206944",
                "name": "Relay-4m",
                "price": 9980.0,
                "image": "https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png"
            }
        ]
    },
    {
        "id": 48,
        "name": "Одноканальный сенсорный радиовыключатель SN-R1",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/tild3734-3963-4030-b061-373235646263/bl-snr1.jpg",
        "category": "switch",
        "description": "Сенсорный одноканальный беспроводной выключатель. Выполнен из закаленного стекла в лаконичном современном дизайне. При нажатии издает звук. Работа от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. Представлен в 11 цветах.",
        "modifications": [
            {
                "id": "206964",
                "name": "Бежевый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3430-6632-4437-b630-653565393064/sk-snr1.jpg"
            },
            {
                "id": "207032",
                "name": "Черный",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3734-3963-4030-b061-373235646263/bl-snr1.jpg"
            },
            {
                "id": "207034",
                "name": "Белый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3933-6263-4530-b537-623737303932/wh-snr1.jpg"
            },
            {
                "id": "207108",
                "name": "Алюминиевый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6132-6138-4930-b431-663731656662/al_snr1.jpg"
            },
            {
                "id": "207068",
                "name": "Серый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6339-6339-4737-b534-353631336335/ser_snr1.jpg"
            },
            {
                "id": "207076",
                "name": "Графит",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3963-6237-4234-b033-346535393032/graf_snr1.jpg"
            },
            {
                "id": "207064",
                "name": "Слоновая кость",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3039-6664-4166-b864-326237353564/slon_snr1.jpg"
            },
            {
                "id": "206968",
                "name": "Светло-серый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6232-3238-4661-b435-333966323737/svser_snr1.jpg"
            },
            {
                "id": "207072",
                "name": "Серо-голубой",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6131-3036-4666-a230-633064633439/svgol_snr1.jpg"
            },
            {
                "id": "207112",
                "name": "Светло-коричневый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3335-6431-4431-b362-353736666666/svkor_snr1.jpg"
            },
            {
                "id": "207116",
                "name": "Темно-коричневый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3961-6462-4664-b563-356262636238/temnkor_snr1.jpg"
            }
        ]
    },
    {
        "id": 49,
        "name": "Брошюра HiTE PRO",
        "price": 10.0,
        "image": "https://static.tildacdn.com/stor6637-3664-4366-a136-363733363839/52026992.jpg",
        "category": "komplekt",
        "description": "Печатная брошюра для клиентов, в которой можно указать свои контакты",
        "modifications": [
            {
                "id": "286416",
                "name": "Брошюра HiTE PRO",
                "price": 10.0,
                "image": "https://static.tildacdn.com/stor6637-3664-4366-a136-363733363839/52026992.jpg"
            }
        ]
    },
    {
        "id": 50,
        "name": "Четырёхканальный блок радиореле Relay-4M(P)",
        "price": 12980.0,
        "image": "https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png",
        "category": "relay",
        "description": "В отличие от модели Relay-4M, проводит измерение текущей потребляемой мощности всех 4 каналов. Эта информация передается на сервер умного дома Gateway и отражается в приложении рядом с иконкой подключенного устройства.<br /><br /><strong>Значения потребляемой мощности видны в мобильном приложении. Поэтому Gateway обязателен!</strong><br /><br />Периодичность отметок потребления зависит от мощности:<br /><br /><ul><li data-list=\"bullet\">0-50 ватт,</li></ul>повторная отправка только в случае изменения мощности более чем на 20%<br /><br /><ul><li data-list=\"bullet\">50-250 ватт – 10%</li></ul><br /><ul><li data-list=\"bullet\">250-500 ватт – 5%</li></ul><br /><ul><li data-list=\"bullet\">больше 500 – 1%</li></ul><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4mp\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4mp</a>",
        "modifications": [
            {
                "id": "290030",
                "name": "Relay-4M(P)",
                "price": 12980.0,
                "image": "https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png"
            }
        ]
    },
    {
        "id": 51,
        "name": "Четырёхканальный блок радиореле Relay-4S(P)",
        "price": 11980.0,
        "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category": "relay",
        "description": "В отличие от модели Relay-4S, проводит измерение текущей потребляемой мощности всех 4 каналов. Эта информация передается на сервер умного дома Gateway и отражается в приложении рядом с иконкой подключенного устройства.<br /><br /><strong>Значения потребляемой мощности видны в мобильном приложении. Поэтому Gateway обязателен!</strong><br /><br />Периодичность отметок потребления зависит от мощности:<br /><br /><ul><li data-list=\"bullet\">0-50 ватт,</li></ul>повторная отправка только в случае изменения мощности более чем на 20%<br /><br /><ul><li data-list=\"bullet\">50-250 ватт – 10%</li></ul><br /><ul><li data-list=\"bullet\">250-500 ватт – 5%</li></ul><br /><ul><li data-list=\"bullet\">больше 500 – 1%</li></ul><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4sp\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4sp</a>",
        "modifications": [
            {
                "id": "290032",
                "name": "Relay-4S(P)",
                "price": 11980.0,
                "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png"
            }
        ]
    },
    {
        "id": 52,
        "name": "Одноклавишный радиовыключатель с клавишей без фиксации Base-1",
        "price": 1780.0,
        "image": "https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png",
        "category": "switch",
        "description": "Одноканальный беспроводной выключатель без фиксации клавиши (звонкового типа).<br /><br />Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.<br /><br />При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно.<br /><br />Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов.<br /><br />Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.<br /><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf</a>",
        "modifications": [
            {
                "id": "293048",
                "name": "Белый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png"
            },
            {
                "id": "293050",
                "name": "Бежевый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png"
            },
            {
                "id": "293052",
                "name": "Серый (грифель)",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor3433-3338-4739-a539-656435383164/91248115.png"
            },
            {
                "id": "293054",
                "name": "Черный (карбон)",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor6238-6232-4561-b666-336332626430/88521061.png"
            }
        ]
    },
    {
        "id": 53,
        "name": "Двухклавишный радиовыключатель с клавишами без фиксации Base-2",
        "price": 2180.0,
        "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png",
        "category": "switch",
        "description": "Двухканальный беспроводной выключатель без фиксации клавиши (звонкового типа).<br /><br />Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.<br /><br />При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно.<br /><br />Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов.<br /><br />Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.<br /><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf</a>",
        "modifications": [
            {
                "id": "293064",
                "name": "Белый",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png"
            },
            {
                "id": "293066",
                "name": "Бежевый",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png"
            },
            {
                "id": "293068",
                "name": "Серый (грифель)",
                "price": 2580.0,
                "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png"
            },
            {
                "id": "293070",
                "name": "Черный (карбон)",
                "price": 2580.0,
                "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png"
            }
        ]
    },
    {
        "id": 54,
        "name": "Одноклавишный радиовыключатель с фиксацией клавиши Base-1F",
        "price": 1780.0,
        "image": "https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png",
        "category": "switch",
        "description": "Одноканальный беспроводной выключатель с фиксацией клавиши. <br /><u>НЕ ПОДХОДИТ ДЛЯ ДИММИРОВАНИЯ</u><br /><br />Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.<br /><br />При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно.<br /><br />Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов.<br /><br />Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.<br /><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf</a>",
        "modifications": [
            {
                "id": "293056",
                "name": "Белый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png"
            },
            {
                "id": "293058",
                "name": "Бежевый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png"
            },
            {
                "id": "293060",
                "name": "Серый (грифель)",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor3433-3338-4739-a539-656435383164/91248115.png"
            },
            {
                "id": "293062",
                "name": "Черный (карбон)",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor6238-6232-4561-b666-336332626430/88521061.png"
            }
        ]
    },
    {
        "id": 55,
        "name": "Двухклавишный радиовыключатель с фиксацией клавиш Base-2F",
        "price": 2180.0,
        "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png",
        "category": "switch",
        "description": "Двухканальный беспроводной выключатель с фиксацией клавиши. <br /><u>НЕ ПОДХОДИТ ДЛЯ ДИММИРОВАНИЯ</u><br /><br />Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.<br /><br />При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно.<br /><br />Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов.<br /><br />Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.<br /><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf</a>",
        "modifications": [
            {
                "id": "293072",
                "name": "Белый",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png"
            },
            {
                "id": "293074",
                "name": "Бежевый",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png"
            },
            {
                "id": "293076",
                "name": "Серый (грифель)",
                "price": 2580.0,
                "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png"
            },
            {
                "id": "293078",
                "name": "Черный (карбон)",
                "price": 2580.0,
                "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png"
            }
        ]
    },
    {
        "id": 56,
        "name": "Одноканальное радиореле Relay-16A",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Компактный блок на 16 Ампер, подходит для теплого пола. Клеммники 2,5 мм2",
        "modifications": [
            {
                "id": "296298",
                "name": "Relay-16A",
                "price": 3480.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 57,
        "name": "Датчик температуры пола для Relay-16A",
        "price": 500.0,
        "image": "https://static.tildacdn.com/stor3435-3430-4563-a365-396663306532/24429073.jpg",
        "category": "other",
        "description": "Блок приема сигнала, устанавливаемый в разрыв фазного и нулевого провода, с 1 каналом управления – Включение / Выключение нагрузки.<br /><br />К нему подходит проводной датчик температуры:<br /><a href=\"https://profi.hite-pro.ru/shop/tproduct/327604841-151705001691-datchik-temperaturi-pola\" target=\"_blank\" rel=\"noreferrer noopener\">https://profi.hite-pro.ru/shop/tproduct/327604841-151705001691-datchik-temperaturi-pola</a><br /><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-16a\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-16a</a><br /><br />",
        "modifications": [
            {
                "id": "296300",
                "name": "Relay-16A",
                "price": 500.0,
                "image": "https://static.tildacdn.com/stor3435-3430-4563-a365-396663306532/24429073.jpg"
            }
        ]
    },
    {
        "id": 58,
        "name": "Relay-4S",
        "price": 3080.0,
        "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category": "relay",
        "description": "HiTE PRO Relay-4S – это четырехканальное реле, является управляемым устройством модульной системы.<br /><br /><br /><strong>Внимание! Работает только с Relay-4M!</strong><br />Используется для беспроводного управления 4-мя линиями электрической цепи и имеет шину данных для подключения к радиопередающему устройству (HiTE PRO Relay-M). <br />Получая сигнал от передатчиков, блок замыкает/размыкает электрическую цепь. Передатчиками являются другие устройства HiTE PRO: беспроводные выключатели, пульты ДУ, датчики, сервер умного дома. <br /><br />Блок монтируется на DIN рейку в распределительном щите. <br /><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4s\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4s</a>",
        "modifications": [
            {
                "id": "206946",
                "name": "Relay-4S",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png"
            }
        ]
    },
    {
        "id": 59,
        "name": "Одноканальное радиореле Relay-RGBW",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Компактный одноканальный блок приема сигнала с функцией диммирования — регулировки яркости света, а также смены цвета и управления цветовой температурой для RGB и RGBW светодиодных лент.<br /><br />Получая сигнал от передатчиков HiTE PRO, блок замыкает/размыкает электрическую цепь и диммирует/меняет цвет.<br /><ul><li data-list=\"bullet\">Тепловая защита. При срабатывании блок прекращает работу, светодиод блока начинает мигать, а сервер умного дома отображает ошибку на плитке устройства в приложении.</li><li data-list=\"bullet\">Защита от короткого замыкания. При срабатывании блок прекращает работу, светодиод блока горит красным цветом, а сервер умного дома отображает ошибку на плитке устройства в приложении.</li><li data-list=\"bullet\">Подключение внешней кнопки с возможностью смены типа: клавишная/кнопочная. С кнопочной можно регулировать свечение.</li></ul><br />Вы можете настроить:<br /><ul><li data-list=\"bullet\">плавный пуск или мгновенное включение</li><li data-list=\"bullet\">скорость изменения яркости и цвета при управлении с пульта/выключателя</li><li data-list=\"bullet\">минимальную и максимальную яркость свечения</li></ul><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-rgbw\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-rgbw</a>",
        "modifications": [
            {
                "id": "296568",
                "name": "Relay-RGBW",
                "price": 3480.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 60,
        "name": "Демонстрационный стенд Мини",
        "price": 21990.0,
        "image": "https://static.tildacdn.com/stor3364-3036-4362-a562-386163633165/31780867.jpg",
        "category": "komplekt",
        "description": "Компактный стенд, который удобно брать с собой на встречи с заказчиками",
        "modifications": [
            {
                "id": "296638",
                "name": "Демонстрационный стенд Мини",
                "price": 21990.0,
                "image": "https://static.tildacdn.com/stor3364-3036-4362-a562-386163633165/31780867.jpg"
            }
        ]
    },
    {
        "id": 61,
        "name": "Caleo Supermat",
        "price": 5078.0,
        "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg",
        "category": "warm_floor",
        "description": "Кабельный теплый пол под плитку и керамогранит (нагревательный мат)",
        "modifications": [
            {
                "id": "296910",
                "name": "Caleo Supermat - 130 - 0,7",
                "price": 5078.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296912",
                "name": "Caleo Supermat - 130 - 1,2",
                "price": 7946.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296914",
                "name": "Caleo Supermat - 130 - 1,8",
                "price": 8602.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296916",
                "name": "Caleo Supermat - 130 - 2,4",
                "price": 10754.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296918",
                "name": "Caleo Supermat - 130 - 3",
                "price": 11503.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296920",
                "name": "Caleo Supermat - 130 - 3,6",
                "price": 13375.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296922",
                "name": "Caleo Supermat - 130 - 4,2",
                "price": 15622.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296924",
                "name": "Caleo Supermat - 130 - 5",
                "price": 16745.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296926",
                "name": "Caleo Supermat - 130 - 6",
                "price": 18710.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296928",
                "name": "Caleo Supermat - 130 - 7",
                "price": 21425.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296930",
                "name": "Caleo Supermat - 130 - 8",
                "price": 23858.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296932",
                "name": "Caleo Supermat - 130 - 10",
                "price": 30598.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296934",
                "name": "Caleo Supermat - 130 - 12",
                "price": 37056.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296936",
                "name": "Caleo Supermat - 200 - 0,7",
                "price": 5840.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296938",
                "name": "Caleo Supermat - 200 - 1,2",
                "price": 9138.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296940",
                "name": "Caleo Supermat - 200 - 1,8",
                "price": 9892.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296942",
                "name": "Caleo Supermat - 200 - 2,4",
                "price": 12368.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296944",
                "name": "Caleo Supermat - 200 - 3",
                "price": 13229.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296946",
                "name": "Caleo Supermat - 200 - 3,6",
                "price": 15382.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296948",
                "name": "Caleo Supermat - 200 - 4,2",
                "price": 17965.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296950",
                "name": "Caleo Supermat - 200 - 5",
                "price": 19257.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296952",
                "name": "Caleo Supermat - 200 - 6",
                "price": 21518.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296954",
                "name": "Caleo Supermat - 200 - 7",
                "price": 24638.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296956",
                "name": "Caleo Supermat - 200 - 8",
                "price": 27438.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296958",
                "name": "Caleo Supermat - 200 - 10",
                "price": 35187.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "296960",
                "name": "Caleo Supermat - 200 - 12",
                "price": 42614.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            }
        ]
    },
    {
        "id": 62,
        "name": "Caleo Platinum",
        "price": 5695.0,
        "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg",
        "category": "warm_floor",
        "description": "Саморегулируемый инфракрасный пленочный теплый пол под ламинат, паркет, линолеум и ковролин (термопленка)",
        "modifications": [
            {
                "id": "296892",
                "name": "Caleo Platinum - 230 - 1",
                "price": 5695.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "296894",
                "name": "Caleo Platinum - 230 - 1,5",
                "price": 8324.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "296896",
                "name": "Caleo Platinum - 230 - 2",
                "price": 11102.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "296898",
                "name": "Caleo Platinum - 230 - 2,5",
                "price": 13879.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "296900",
                "name": "Caleo Platinum - 230 - 3",
                "price": 16657.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "296902",
                "name": "Caleo Platinum - 230 - 3,5",
                "price": 19435.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "296904",
                "name": "Caleo Platinum - 230 - 4",
                "price": 22302.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "296906",
                "name": "Caleo Platinum - 230 - 5",
                "price": 27767.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "296908",
                "name": "Caleo Platinum - 230 - 6",
                "price": 33412.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            }
        ]
    },
    {
        "id": 63,
        "name": "Caleo Supercable",
        "price": 4994.0,
        "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg",
        "category": "warm_floor",
        "description": "Сверхтонкий кабельный теплый пол в бухте на основе двухжильного экранированного резистивного кабеля повышенной надежности",
        "modifications": [
            {
                "id": "297032",
                "name": "Caleo Supercable - 10 - 180",
                "price": 4994.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297034",
                "name": "Caleo Supercable - 20 - 360",
                "price": 7170.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297036",
                "name": "Caleo Supercable - 30 - 540",
                "price": 10434.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297038",
                "name": "Caleo Supercable - 40 - 720",
                "price": 13698.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297040",
                "name": "Caleo Supercable - 50 - 900",
                "price": 15547.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297042",
                "name": "Caleo Supercable - 60 - 1080",
                "price": 16962.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297044",
                "name": "Caleo Supercable - 70 - 1260",
                "price": 19355.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297046",
                "name": "Caleo Supercable - 80 - 1440",
                "price": 23272.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297048",
                "name": "Caleo Supercable - 90 - 1620",
                "price": 26536.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297050",
                "name": "Caleo Supercable - 100 - 1800",
                "price": 27842.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "297052",
                "name": "Caleo Supercable - 120 - 2160",
                "price": 35349.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            }
        ]
    },
    {
        "id": 64,
        "name": "Терморегулятор Caleo С927",
        "price": 10392.0,
        "image": "https://static.tildacdn.com/stor3138-3266-4264-b464-653536363464/67235715.jpg",
        "category": "warm_floor",
        "description": "Wi-Fi встраиваемый, цифровой, программируемый, 3,5 кВт",
        "modifications": [
            {
                "id": "297070",
                "name": "Белый",
                "price": 10392.0,
                "image": "https://static.tildacdn.com/stor3431-3131-4235-b936-636435313332/49049039.png"
            },
            {
                "id": "297090",
                "name": "Черный",
                "price": 10392.0,
                "image": "https://static.tildacdn.com/stor3836-3361-4466-b837-656433306263/40479136.png"
            }
        ]
    },
    {
        "id": 65,
        "name": "Caleo Easymat",
        "price": 3211.0,
        "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg",
        "category": "warm_floor",
        "description": "Кабельный теплый пол под плитку и керамогранит (нагревательный мат)",
        "modifications": [
            {
                "id": "297084",
                "name": "Caleo Easymat - 140 - 0,5",
                "price": 3211.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297086",
                "name": "Caleo Easymat - 140 - 0,7",
                "price": 3504.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297098",
                "name": "Caleo Easymat - 140 - 1",
                "price": 3699.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297100",
                "name": "Caleo Easymat - 140 - 1,2",
                "price": 3797.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297102",
                "name": "Caleo Easymat - 140 - 1,5",
                "price": 4382.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297104",
                "name": "Caleo Easymat - 140 - 1,8",
                "price": 5066.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297106",
                "name": "Caleo Easymat - 140 - 2",
                "price": 5261.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297108",
                "name": "Caleo Easymat - 140 - 2,4",
                "price": 5846.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297110",
                "name": "Caleo Easymat - 140 - 3",
                "price": 7115.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297112",
                "name": "Caleo Easymat - 140 - 3,6",
                "price": 8091.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297114",
                "name": "Caleo Easymat - 140 - 4",
                "price": 8872.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297116",
                "name": "Caleo Easymat - 140 - 4,2",
                "price": 9165.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297118",
                "name": "Caleo Easymat - 140 - 5",
                "price": 10824.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297120",
                "name": "Caleo Easymat - 140 - 6",
                "price": 12386.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297122",
                "name": "Caleo Easymat - 140 - 7",
                "price": 13557.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297124",
                "name": "Caleo Easymat - 140 - 8",
                "price": 15021.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297126",
                "name": "Caleo Easymat - 140 - 10",
                "price": 20193.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297128",
                "name": "Caleo Easymat - 140 - 12",
                "price": 24000.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297130",
                "name": "Caleo Easymat - 180 - 0,5",
                "price": 3686.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297132",
                "name": "Caleo Easymat - 180 - 1",
                "price": 4241.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297134",
                "name": "Caleo Easymat - 180 - 1,5",
                "price": 5045.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297136",
                "name": "Caleo Easymat - 180 - 2",
                "price": 6074.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297138",
                "name": "Caleo Easymat - 180 - 2,5",
                "price": 6730.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297140",
                "name": "Caleo Easymat - 180 - 3",
                "price": 8157.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297142",
                "name": "Caleo Easymat - 180 - 3,5",
                "price": 9270.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297144",
                "name": "Caleo Easymat - 180 - 4",
                "price": 10193.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297146",
                "name": "Caleo Easymat - 180 - 5",
                "price": 12439.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297148",
                "name": "Caleo Easymat - 180 - 6",
                "price": 14189.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297150",
                "name": "Caleo Easymat - 180 - 7",
                "price": 15622.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297152",
                "name": "Caleo Easymat - 180 - 8",
                "price": 17306.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297154",
                "name": "Caleo Easymat - 180 - 10",
                "price": 23297.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297156",
                "name": "Caleo Easymat - 180 - 12",
                "price": 27696.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "297158",
                "name": "Caleo Easymat - 180 - 15",
                "price": 33967.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            }
        ]
    },
    {
        "id": 66,
        "name": "Терморегулятор Caleo С430",
        "price": 1813.0,
        "image": "https://static.tildacdn.com/stor6433-3931-4063-b931-663539353731/26813793.jpg",
        "category": "warm_floor",
        "description": "Аналоговый, встраиваемый, 3,5 кВт",
        "modifications": [
            {
                "id": "297092",
                "name": "Белый",
                "price": 1813.0,
                "image": "https://static.tildacdn.com/stor6433-3931-4063-b931-663539353731/26813793.jpg"
            },
            {
                "id": "297094",
                "name": "Черный",
                "price": 1813.0,
                "image": "https://static.tildacdn.com/stor3936-3130-4264-b362-356466663833/39881704.jpg"
            }
        ]
    },
    {
        "id": 67,
        "name": "Одноканальное радиореле Relay-0/1-10V",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Компактный одноканальный блок для управления источниками света с аналоговым сигналом 0/1-10 В.<br /><br />Например, диммирования светодиодных лент или ламп, а также управления вентиляторами и другими устройствами, которые поддерживают управление по данному протоколу.<br /><br />Напряжение питания 85 - 265 В Потребляемая мощность 0.17 Вт<br /><br />Видеоинструкция по настройке:<br /><u>Скоро будет</u><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-0-1-10v\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-0-1-10v</a>",
        "modifications": [
            {
                "id": "297600",
                "name": "Relay-0/1-10V",
                "price": 3480.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 68,
        "name": "Крепление для компактных блоков на DIN-рейку или плоскость",
        "price": 250.0,
        "image": "https://static.tildacdn.com/stor6438-3865-4134-a239-393034333538/46878414.jpg",
        "category": "relay",
        "description": "<strong style=\"color: rgb(242, 0, 0);\">Цена окончательная, скидка уже применена.</strong><br /><br />Любой компактный блок HiTE PRO можно установить на DIN-рейку или плоскость с помощью этого крепления. Корпус крепления выполнен из качественного пластика.<br /><br />Вы можете распечатать крепление#nbsp;самостоятельно на 3D-принтере, используя этот <a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-mount.STL\">файл</a> <br /><br />",
        "modifications": [
            {
                "id": "298034",
                "name": "Крепление для компактных блоков на DIN-рейку или плоскость",
                "price": 250.0,
                "image": "https://static.tildacdn.com/stor6438-3865-4134-a239-393034333538/46878414.jpg"
            }
        ]
    },
    {
        "id": 69,
        "name": "Одноканальное радиореле Relay-1Q",
        "price": 3080.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Бесшумный блок на симисторных ключах (\"твердотельных реле\"), устанавливаемый в разрыв фазного и нулевого провода, с 1 каналом управления.<br /><br />Технический паспорт:<br /><a href=\"https://hitepro.bitrix24.ru/~WzI39\" target=\"_blank\" rel=\"noreferrer noopener\">https://hitepro.bitrix24.ru/~WzI39</a><br /><br />Видеообзор:<br /><ul><li data-list=\"bullet\">пока нет</li></ul>",
        "modifications": [
            {
                "id": "298768",
                "name": "Relay-1Q",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 70,
        "name": "Двухканальное радиореле Relay-2Q",
        "price": 4780.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Бесшумный блок на симисторных ключах (\"твердотельных реле\"), устанавливаемый в разрыв фазного и нулевого провода, с 2 каналами управления.<br /><br />Технический паспорт:<br /><a href=\"https://hitepro.bitrix24.ru/~WzI39\" target=\"_blank\" rel=\"noreferrer noopener\">https://hitepro.bitrix24.ru/~WzI39</a><br /><br />Видеообзор:<br /><ul><li data-list=\"bullet\">пока нет</li></ul>",
        "modifications": [
            {
                "id": "298770",
                "name": "Relay-2Q",
                "price": 4780.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 71,
        "name": "Крепление для Gateway в розетку",
        "price": 750.0,
        "image": "https://static.tildacdn.com/stor6231-6230-4530-b363-616634393065/96510516.jpg",
        "category": "server",
        "description": "Сервер умного дома HiTE PRO и его блок питания можно удобно установить в любую розетку с помощью крепления. \n\nТакже у крепления есть фиксатор-усилитель для розетки, чтобы можно было установить его в любом положении.\n\nИзготовлено методом 3D-печати из черного PETG пластика.",
        "modifications": [
            {
                "id": "299132",
                "name": "Крепление для Gateway в розетку",
                "price": 750.0,
                "image": "https://static.tildacdn.com/stor6231-6230-4530-b363-616634393065/96510516.jpg"
            }
        ]
    },
    {
        "id": 72,
        "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2",
        "price": 25540.0,
        "image": "https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg",
        "category": "kran",
        "description": "Сборный комплект устройств: 1-2 шаровых крана, блок управления, датчик протечки",
        "modifications": [
            {
                "id": "301066",
                "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2 - Bugatti - 2",
                "price": 25540.0,
                "image": "https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg"
            },
            {
                "id": "301068",
                "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2 - Profi - 2",
                "price": 23940.0,
                "image": "https://static.tildacdn.com/stor6530-6464-4333-b036-643565356237/70060083.jpg"
            },
            {
                "id": "301062",
                "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2 - Bugatti - 1",
                "price": 16250.0,
                "image": "https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg"
            },
            {
                "id": "301064",
                "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2 - Profi - 1",
                "price": 15450.0,
                "image": "https://static.tildacdn.com/stor6530-6464-4333-b036-643565356237/70060083.jpg"
            }
        ]
    },
    {
        "id": 73,
        "name": "Футболка HiTE PRO темно-синяя",
        "price": 1600.0,
        "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png",
        "category": "other",
        "description": "Хлопковая футболка в стиле oversize",
        "modifications": [
            {
                "id": "301122",
                "name": "темно-синяя - S",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            },
            {
                "id": "301124",
                "name": "темно-синяя - M",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            },
            {
                "id": "301126",
                "name": "темно-синяя - L",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            },
            {
                "id": "301128",
                "name": "темно-синяя - XL",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            },
            {
                "id": "301130",
                "name": "темно-синяя - XXL",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            }
        ]
    },
    {
        "id": 74,
        "name": "Кепка HiTE PRO темно-синяя",
        "price": 1600.0,
        "image": "https://static.tildacdn.com/stor6436-3830-4866-a562-663532633337/28196858.jpg",
        "category": "other",
        "description": "Кепка регулируемая onesize",
        "modifications": [
            {
                "id": "301948",
                "name": "Кепка HiTE PRO темно-синяя",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor6436-3830-4866-a562-663532633337/28196858.jpg"
            }
        ]
    },
    {
        "id": 75,
        "name": "Взломостойкий умный замок KEYWAY SL300",
        "price": 23850.0,
        "image": "https://static.tildacdn.com/stor6166-3234-4233-b464-366337636437/99455674.jpg",
        "category": "lock",
        "description": "Получите персональный промокод на скидку 30%",
        "modifications": [
            {
                "id": "306210",
                "name": "KEYWAY SL300",
                "price": 23850.0,
                "image": "https://static.tildacdn.com/stor6166-3234-4233-b464-366337636437/99455674.jpg"
            }
        ]
    },
    {
        "id": 76,
        "name": "Умный замок премиум-класса KEYWAY SL500",
        "price": 47700.0,
        "image": "https://static.tildacdn.com/stor3466-6330-4939-a461-353530623633/88944724.jpg",
        "category": "lock",
        "description": "Получите персональный промокод на скидку 30%",
        "modifications": [
            {
                "id": "306212",
                "name": "KEYWAY SL500",
                "price": 47700.0,
                "image": "https://static.tildacdn.com/stor3466-6330-4939-a461-353530623633/88944724.jpg"
            }
        ]
    },
    {
        "id": 77,
        "name": "Двухканальный сенсорный радиовыключатель SN-R2",
        "price": 3380.0,
        "image": "https://static.tildacdn.com/tild3033-3931-4635-b532-303335346366/sk-snr2.jpg",
        "category": "switch",
        "description": "Сенсорный двухканальный беспроводной выключатель. Выполнен из закаленного стекла в лаконичном современном дизайне. При нажатии издает звук. Работа от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. Представлен в 11 цветах.",
        "modifications": [
            {
                "id": "206972",
                "name": "Бежевый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3033-3931-4635-b532-303335346366/sk-snr2.jpg"
            },
            {
                "id": "207030",
                "name": "Черный",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3262-3164-4534-a439-336336656434/1snr2.jpg"
            },
            {
                "id": "207028",
                "name": "Белый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6239-6235-4630-a330-623030613064/wh-snr2.jpg"
            },
            {
                "id": "207110",
                "name": "Алюминиевый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3832-3761-4662-b466-323463323433/al_snr2.jpg"
            },
            {
                "id": "207070",
                "name": "Серый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6133-3535-4135-a237-643861336265/ser_snr2.jpg"
            },
            {
                "id": "207118",
                "name": "Графит",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6333-6436-4931-a534-653334646139/graf_snr2.jpg"
            },
            {
                "id": "207106",
                "name": "Слоновая кость",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6262-6439-4761-b434-613564613363/slon_snr2.jpg"
            },
            {
                "id": "207066",
                "name": "Светло-серый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6165-3734-4630-a337-613236366265/svser_snr2.jpg"
            },
            {
                "id": "206978",
                "name": "Серо-голубой",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3264-6461-4131-b066-316565653439/sergol_snr2.jpg"
            },
            {
                "id": "207114",
                "name": "Светло-коричневый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6364-3033-4637-b736-323735366237/svkor_snr2.jpg"
            },
            {
                "id": "207074",
                "name": "Темно-коричневый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3062-3861-4332-b161-613961393161/temnkor_snr2.jpg"
            }
        ]
    }
];

// --- Состояние ---
let cart = [];
let currentCategory = 'all';

// --- DOM элементы ---
const categoriesList = document.getElementById('categoriesList');
const productGrid = document.getElementById('productGrid');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartItems = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');

// --- Элементы для отображения бонусов ---
const bonusesDisplay = document.getElementById('bonusesDisplay');
const bonusValue = document.getElementById('bonusValue');

// --- Новые DOM элементы для формы корзины ---
// Переключатель
const orderTypeToggle = document.getElementById('orderTypeToggle');
const kpLabel = document.getElementById('kpLabel');
const orderLabel = document.getElementById('orderLabel');
// Секция полей заказа
const orderFieldsSection = document.getElementById('orderFieldsSection');
// Кнопки
const generateKpButton = document.getElementById('generateKpButton');
const checkoutButton = document.getElementById('checkoutButton');

// Поля внутри секции заказа
const recipientPhone = document.getElementById('recipientPhone');
const deliveryMethod = document.getElementById('deliveryMethod');
const deliveryAddressSection = document.getElementById('deliveryAddressSection');
const deliveryAddress = document.getElementById('deliveryAddress');
const deliveryAddressNote = document.getElementById('deliveryAddressNote');
const pickupAddressSection = document.getElementById('pickupAddressSection');
const paymentMethod = document.getElementById('paymentMethod');
const cardPaymentNote = document.getElementById('cardPaymentNote');
const legalInfoSection = document.getElementById('legalInfoSection');
const organizationInn = document.getElementById('organizationInn');
const organizationAddress = document.getElementById('organizationAddress');
const organizationBik = document.getElementById('organizationBik');
const organizationAccount = document.getElementById('organizationAccount');

// --- Новые DOM элементы для модального окна описания ---
const detailsModal = document.getElementById('detailsModal');
const closeDetailsModal = document.getElementById('closeDetailsModal');
const detailsModalImage = document.getElementById('detailsModalImage');
const detailsModalTitle = document.getElementById('detailsModalTitle');
const detailsModalDescription = document.getElementById('detailsModalDescription');

// --- Инициализация ---
document.addEventListener('DOMContentLoaded', () => {
    // Получаем параметры из URL (бонусы и ID пользователя)
    urlParams = getUrlParams();
    // Отображаем бонусы из URL-параметров
    bonusValue.textContent = urlParams.bonuses.toLocaleString('ru-RU');

    renderCategories();
    renderProducts();
    updateCartUI();
    
    deliveryMethod.addEventListener('change', handleDeliveryMethodChange);
    paymentMethod.addEventListener('change', handlePaymentMethodChange);
    recipientPhone.addEventListener('input', formatPhoneNumber);
    orderTypeToggle.addEventListener('change', handleOrderTypeToggleChange);
    generateKpButton.addEventListener('click', handleGenerateKp);
    checkoutButton.addEventListener('click', handleCheckout);
    closeDetailsModal.addEventListener('click', closeProductDetailsModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === detailsModal) {
            closeProductDetailsModal();
        }
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});

// --- Простая маска для телефона ---
function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('7') || value.startsWith('8')) {
        value = value.substring(1);
    }
    value = value.substring(0, 10);

    let formattedValue = '+7 ';
    if (value.length > 0) {
        formattedValue += '(' + value.substring(0, 3);
    }
    if (value.length >= 3) {
        formattedValue += ') ' + value.substring(3, 6);
    }
    if (value.length >= 6) {
        formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length >= 8) {
        formattedValue += '-' + value.substring(8, 10);
    }
    
    e.target.value = formattedValue;
}

// --- Обработчик изменения способа доставки ---
function handleDeliveryMethodChange() {
    const selectedMethod = deliveryMethod.value;
    
    deliveryAddressSection.style.display = 'none';
    pickupAddressSection.style.display = 'none';
    deliveryAddressNote.textContent = '';

    if (selectedMethod === 'courier' || selectedMethod === 'pickup_point') {
        deliveryAddressSection.style.display = 'block';
        if (selectedMethod === 'pickup_point') {
            deliveryAddressNote.textContent = 'Введите адрес пункта выдачи СДЭК или Яндекс.';
        } else {
            deliveryAddressNote.textContent = '';
        }
        deliveryAddress.placeholder = selectedMethod === 'courier' ? 'Введите адрес доставки' : 'Введите адрес пункта выдачи';
        deliveryAddress.value = '';
    } else if (selectedMethod === 'pickup') {
        pickupAddressSection.style.display = 'block';
    }
}

// --- Обработчик изменения способа оплаты ---
function handlePaymentMethodChange() {
    const selectedMethod = paymentMethod.value;
    
    if (selectedMethod === 'card') {
        cardPaymentNote.style.display = 'block';
    } else {
        cardPaymentNote.style.display = 'none';
    }
    
    if (selectedMethod === 'invoice') {
        legalInfoSection.style.display = 'block';
    } else {
        legalInfoSection.style.display = 'none';
    }
}

// --- Обработчик изменения переключателя КП/Заказ ---
function handleOrderTypeToggleChange() {
    if (orderTypeToggle.checked) {
        orderFieldsSection.style.display = 'block';
        generateKpButton.style.display = 'none';
        checkoutButton.style.display = 'block';
        kpLabel.style.fontWeight = 'normal';
        kpLabel.style.color = 'var(--tg-theme-hint-color)';
        orderLabel.style.fontWeight = 'bold';
        orderLabel.style.color = 'var(--tg-theme-text-color)';
    } else {
        orderFieldsSection.style.display = 'none';
        generateKpButton.style.display = 'block';
        checkoutButton.style.display = 'none';
        kpLabel.style.fontWeight = 'bold';
        kpLabel.style.color = 'var(--tg-theme-text-color)';
        orderLabel.style.fontWeight = 'normal';
        orderLabel.style.color = 'var(--tg-theme-hint-color)';
    }
    resetCartFormFields();
}

// --- Рендеринг категорий ---
function renderCategories() {
    categoriesList.innerHTML = '';
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.className = 'category-button';
        if (category.id === currentCategory) {
            categoryButton.classList.add('active');
        }
        categoryButton.dataset.categoryId = category.id;
        categoryButton.textContent = category.name;
        categoryButton.addEventListener('click', () => selectCategory(category.id));
        categoriesList.appendChild(categoryButton);
    });
}

// --- Выбор категории ---
function selectCategory(categoryId) {
    currentCategory = categoryId;
    renderCategories();
    renderProducts();
}

// --- Рендеринг товаров ---
function renderProducts() {
    productGrid.innerHTML = '';

    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products-message">Товары в этой категории не найдены.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.productId = product.id;

        let modificationsHtml = '';
        if (product.modifications && product.modifications.length > 0) {
            modificationsHtml = `
                <div class="modifications-section">
                    <label class="modification-label">Модификация:</label>
                    <select class="modification-select" id="mod-select-${product.id}">
                        ${product.modifications.map(mod =>
                            `<option value="${mod.id}">${mod.name} - ${mod.price.toLocaleString('ru-RU')} ₽</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        }

        // Получаем изображение для первой модификации или основное изображение товара
        const initialImageSrc = product.modifications && product.modifications.length > 0 
            ? product.modifications[0].image 
            : product.image;
        const initialImageAlt = product.modifications && product.modifications.length > 0 
            ? `${product.name} - ${product.modifications[0].name}` 
            : product.name;

        const detailsButtonHtml = `<button class="details-button" data-id="${product.id}">Подробнее</button>`;

        productCard.innerHTML = `
            <img src="${initialImageSrc}" alt="${initialImageAlt}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <!-- Цена будет обновляться скриптом -->
                <div class="product-price" id="price-${product.id}">${product.price.toLocaleString('ru-RU')} ₽</div>
                ${modificationsHtml}
                <div class="button-container" id="button-container-${product.id}">
                </div>
                ${detailsButtonHtml}
            </div>
        `;
        productGrid.appendChild(productCard);

        if (product.modifications && product.modifications.length > 0) {
            const modSelect = document.getElementById(`mod-select-${product.id}`);
            modSelect.addEventListener('change', () => {
                updateProductPrice(product.id);
                updateProductButton(product.id);
            });
            // Инициализируем цену и изображение для первой модификации
            updateProductPrice(product.id);
        }

        const detailsButton = productCard.querySelector('.details-button');
        detailsButton.addEventListener('click', () => {
            openProductDetailsModal(product.id);
        });
    });

    updateAllProductButtons();
}

// --- Обновление цены и изображения товара в зависимости от модификации ---
function updateProductPrice(productId) {
    const product = products.find(p => p.id == productId);
    if (!product || !product.modifications || product.modifications.length === 0) return;

    const selectElement = document.getElementById(`mod-select-${productId}`);
    if (!selectElement) return;

    const selectedModId = selectElement.value;
    const selectedMod = product.modifications.find(mod => mod.id === selectedModId);

    // Обновляем цену
    const priceElement = document.getElementById(`price-${productId}`);
    if (priceElement && selectedMod) {
        priceElement.textContent = `${selectedMod.price.toLocaleString('ru-RU')} ₽`;
    }

    // Обновляем изображение
    const imageElement = document.querySelector(`.product-card[data-product-id="${productId}"] .product-image`);
    if (imageElement && selectedMod) {
        imageElement.src = selectedMod.image;
        imageElement.alt = `${product.name} - ${selectedMod.name}`;
    }
}

// --- Получение ID выбранной модификации ---
function getSelectedModificationId(productId) {
    const product = products.find(p => p.id == productId);
    if (!product || !product.modifications || product.modifications.length === 0) {
        return null;
    }
    const selectElement = document.getElementById(`mod-select-${productId}`);
    return selectElement ? selectElement.value : product.modifications[0].id;
}

// --- Функция для обновления кнопки товара ---
function updateProductButton(productId) {
    const container = document.getElementById(`button-container-${productId}`);
    if (!container) return;

    const selectedModId = getSelectedModificationId(productId);
    if (!selectedModId) {
        const cartItem = cart.find(item => item.productId == productId && !item.modificationId);
        const quantity = cartItem ? cartItem.quantity : 0;
        renderQuantityOrAddButton(container, productId, null, quantity);
        return;
    }

    const cartItem = cart.find(item => item.productId == productId && item.modificationId === selectedModId);
    const quantity = cartItem ? cartItem.quantity : 0;
    renderQuantityOrAddButton(container, productId, selectedModId, quantity);
}

// --- Рендеринг кнопки/контрола количества ---
function renderQuantityOrAddButton(container, productId, modificationId, quantity) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    if (quantity > 0) {
        container.innerHTML = `
            <div class="quantity-control">
                <button class="quantity-btn-small decrease-local" data-id="${productId}" data-mod-id="${modificationId || ''}">-</button>
                <span class="quantity-value-local">${quantity}</span>
                <button class="quantity-btn-small increase-local" data-id="${productId}" data-mod-id="${modificationId || ''}">+</button>
            </div>
        `;
        addLocalButtonListeners(productId, modificationId);
    } else {
        container.innerHTML = `
            <button class="add-to-cart-button" 
                    data-id="${productId}" 
                    data-mod-id="${modificationId || ''}">
                В корзину
            </button>
        `;
        container.querySelector('.add-to-cart-button').addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const modId = e.target.dataset.modId || null;
            addToCart(id, modId);
        });
    }
}

// --- Добавление слушателей кнопок +/- ---
function addLocalButtonListeners(productId, modificationId) {
    const container = document.getElementById(`button-container-${productId}`);
    if (!container) return;

    const decreaseBtn = container.querySelector('.decrease-local');
    const increaseBtn = container.querySelector('.increase-local');

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeQuantity(productId, modificationId, -1);
        });
    }
    if (increaseBtn) {
        increaseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeQuantity(productId, modificationId, 1);
        });
    }
}

// --- Обновление всех кнопок товаров ---
function updateAllProductButtons() {
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }

    filteredProducts.forEach(product => {
        updateProductButton(product.id);
    });
}

// --- Функции корзины ---
function addToCart(productId, modificationId = null) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    let existingItemIndex = cart.findIndex(item =>
        item.productId == productId && item.modificationId === modificationId
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        const selectedMod = modificationId ? product.modifications.find(m => m.id === modificationId) : null;
        // Получаем изображение модификации или основное изображение товара
        const itemImage = selectedMod ? selectedMod.image : product.image;
        
        // Создаем новый элемент корзины с информацией о модификации
        const newItem = {
            productId: product.id,
            modificationId: modificationId,
            name: product.name,
            price: selectedMod ? selectedMod.price : product.price,
            image: itemImage, // Используем изображение модификации
            quantity: 1,
            modificationName: selectedMod ? selectedMod.name : null
        };
        cart.push(newItem);
    }

    updateCartUI();
    updateProductButton(productId);
    console.log(`Товар ${product.name} добавлен в корзину.`);
}

function removeFromCart(productId, modificationId = null) {
    const initialLength = cart.length;
    cart = cart.filter(item =>
        !(item.productId == productId && item.modificationId === modificationId)
    );
    
    if (cart.length !== initialLength) {
        updateCartUI();
        updateAllProductButtons(); 
    }
}

function changeQuantity(productId, modificationId, amount) {
    const itemIndex = cart.findIndex(item =>
        item.productId == productId && item.modificationId === modificationId
    );
    
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        const newQuantity = item.quantity + amount;

        if (newQuantity <= 0) {
            removeFromCart(productId, modificationId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
            updateProductButton(productId);
        }
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// --- Обновление UI корзины ---
function updateCartUI() {
    const itemCount = getCartItemCount();
    cartCount.textContent = itemCount;

    if (cartModal.style.display === 'block') {
        renderCartItems();
    }
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Корзина пуста</p>';
        cartTotalPrice.textContent = '0';
        return;
    }

    cartItems.innerHTML = '';
    cart.forEach(item => {
        let displayName = item.name;
        if (item.modificationName) {
            displayName += ` (${item.modificationName})`;
        }

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="item-info">
                <div class="item-name">${displayName}</div>
                <div class="item-price">${item.price.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn decrease" data-id="${item.productId}" data-mod-id="${item.modificationId || ''}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.productId}" data-mod-id="${item.modificationId || ''}">+</button>
            </div>
            <button class="remove-item" data-id="${item.productId}" data-mod-id="${item.modificationId || ''}">&times;</button>
        `;
        cartItems.appendChild(cartItemElement);
    });

    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const modId = e.target.dataset.modId || null;
            changeQuantity(id, modId, -1);
        });
    });

    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const modId = e.target.dataset.modId || null;
            changeQuantity(id, modId, 1);
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const modId = e.target.dataset.modId || null;
            removeFromCart(id, modId);
        });
    });

    cartTotalPrice.textContent = getCartTotal().toLocaleString('ru-RU');
}

// --- Обработчики событий для модального окна корзины ---
cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    renderCartItems();
    resetCartForm();
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'none';
});

// --- Сброс формы корзины ---
function resetCartForm() {
    orderTypeToggle.checked = false;
    handleOrderTypeToggleChange();
    resetCartFormFields();
    // Сброс радио-кнопок на значение по умолчанию
    const defaultOption = document.querySelector('input[name="discountType"][value="discount_only"]');
    if (defaultOption) defaultOption.checked = true;
}

function resetCartFormFields() {
    recipientPhone.value = '';
    deliveryMethod.value = '';
    deliveryAddress.value = '';
    deliveryAddressNote.textContent = '';
    pickupAddressSection.style.display = 'none';
    deliveryAddressSection.style.display = 'none';
    paymentMethod.value = '';
    cardPaymentNote.style.display = 'none';
    legalInfoSection.style.display = 'none';
    organizationInn.value = '';
    organizationAddress.value = '';
    organizationBik.value = '';
    organizationAccount.value = '';
}

// --- Вспомогательная функция: получение выбранного типа скидки ---
function getSelectedDiscountType() {
    const discountOptions = document.getElementsByName('discountType');
    let selectedValue = 'discount_only'; // Значение по умолчанию
    for (const option of discountOptions) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }
    return selectedValue;
}

// --- Валидация формы корзины ---
function validateCartForm(isKp = false) {
    // Если это КП, валидация не нужна
    if (isKp) return true;

    let isValid = true;
    let errorMessage = '';

    const phone = recipientPhone.value.trim();
    const delivery = deliveryMethod.value;
    const payment = paymentMethod.value;
    const address = deliveryAddress.value.trim();

    if (!phone) {
        isValid = false;
        errorMessage += 'Укажите телефон получателя.\n';
    } else if (phone.replace(/\D/g, '').length !== 11 || !phone.startsWith('+7')) {
         isValid = false;
         errorMessage += 'Введите корректный номер телефона (+7 ...).\n';
    }

    if (!delivery) {
        isValid = false;
        errorMessage += 'Выберите способ доставки.\n';
    } else if ((delivery === 'courier' || delivery === 'pickup_point') && !address) {
        isValid = false;
        errorMessage += 'Укажите адрес доставки или пункт выдачи.\n';
    }

    if (!payment) {
        isValid = false;
        errorMessage += 'Выберите способ оплаты.\n';
    }

    if (payment === 'invoice') {
        const inn = organizationInn.value.trim();
        const address = organizationAddress.value.trim();
        const bik = organizationBik.value.trim();
        const account = organizationAccount.value.trim();

        if (!inn) {
            isValid = false;
            errorMessage += 'Укажите ИНН организации.\n';
        }
        if (!address) {
            isValid = false;
            errorMessage += 'Укажите юридический адрес организации.\n';
        }
        if (!bik) {
            isValid = false;
            errorMessage += 'Укажите БИК банка.\n';
        }
        if (!account) {
            isValid = false;
            errorMessage += 'Укажите расчетный счет.\n';
        }
    }

    if (!isValid) {
        alert('Пожалуйста, исправьте следующие ошибки:\n' + errorMessage);
    }

    return isValid;
}

// --- Обработчик кнопки "Сформировать КП" ---
function handleGenerateKp(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    // Валидация не требуется для КП
    if (!validateCartForm(true)) {
        return;
    }

    // Подготавливаем данные для отправки
    const kpPayload = {
        type: "commercial_offer", // Тип запроса
        bonuses: urlParams.bonuses, // Бонусы из URL
        userId: urlParams.userId,   // ID пользователя из URL
        discountType: getSelectedDiscountType(), // Выбранный тип скидки
        items: cart.map(item => ({
            productId: item.productId,
            modificationId: item.modificationId,
            name: item.name,
            modificationName: item.modificationName,
            price: item.price,
            quantity: item.quantity,
            total: item.price * item.quantity,
            image: item.image // Добавляем изображение
        })),
        total: getCartTotal(),
        itemCount: getCartItemCount()
    };

    // Отправляем данные в Telegram бот
    sendToTelegramBot(kpPayload);
    
    // Для демонстрации также показываем alert
    let itemsList = "Товары в коммерческом предложении:\n";
    kpPayload.items.forEach(item => {
        let displayName = item.name;
        if (item.modificationName) {
            displayName += ` (${item.modificationName})`;
        }
        itemsList += `- ${displayName} x ${item.quantity} = ${item.total.toLocaleString('ru-RU')} ₽\n`;
    });
    let kpSummary = `${itemsList}\n---\n`;
    kpSummary += `Итого: ${kpPayload.itemCount} товар(ов) на сумму ${kpPayload.total.toLocaleString('ru-RU')} ₽\n`;
    kpSummary += `Ваши бонусы: ${kpPayload.bonuses.toLocaleString('ru-RU')}\n`;
    if (kpPayload.userId) {
        kpSummary += `ID пользователя: ${kpPayload.userId}\n`;
    }
    kpSummary += `Тип скидки: ${kpPayload.discountType}\n`;
    kpSummary += "\nКоммерческое предложение сформировано и отправлено в бот!";
    alert(kpSummary);
}

// --- Обработчик кнопки "Оформить заказ" ---
function handleCheckout(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    // Валидация формы заказа
    if (!validateCartForm(false)) {
        return;
    }

    // Подготавливаем данные заказа для отправки
    const orderPayload = {
        type: "order", // Тип запроса
        bonuses: urlParams.bonuses, // Бонусы из URL
        userId: urlParams.userId,   // ID пользователя из URL
        discountType: getSelectedDiscountType(), // Выбранный тип скидки
        items: cart.map(item => ({
            productId: item.productId,
            modificationId: item.modificationId,
            name: item.name,
            modificationName: item.modificationName,
            price: item.price,
            quantity: item.quantity,
            total: item.price * item.quantity,
            image: item.image // Добавляем изображение
        })),
        total: getCartTotal(),
        itemCount: getCartItemCount(),
        phone: recipientPhone.value,
        deliveryMethod: deliveryMethod.options[deliveryMethod.selectedIndex].text,
        deliveryAddress: (deliveryMethod.value === 'courier' || deliveryMethod.value === 'pickup_point') ? deliveryAddress.value : '',
        pickupAddress: deliveryMethod.value === 'pickup' ? 'г. Москва, ул. Берзарина, д.36, стр.10' : '',
        paymentMethod: paymentMethod.options[paymentMethod.selectedIndex].text,
        paymentDiscountNote: paymentMethod.value === 'card' ? 'Скидка уменьшена на 2% из-за оплаты картой.' : '',
        organizationInn: paymentMethod.value === 'invoice' ? organizationInn.value.trim() : '',
        organizationAddress: paymentMethod.value === 'invoice' ? organizationAddress.value.trim() : '',
        organizationBik: paymentMethod.value === 'invoice' ? organizationBik.value.trim() : '',
        organizationAccount: paymentMethod.value === 'invoice' ? organizationAccount.value.trim() : ''
    };

    // Отправляем данные в Telegram бот
    sendToTelegramBot(orderPayload);
    
    // Для демонстрации также показываем alert
    let itemsList = "Товары в заказе:\n";
    orderPayload.items.forEach(item => {
        let displayName = item.name;
        if (item.modificationName) {
            displayName += ` (${item.modificationName})`;
        }
        itemsList += `- ${displayName} x ${item.quantity} = ${item.total.toLocaleString('ru-RU')} ₽\n`;
    });
    
    let orderSummary = `${itemsList}\n---\n`;
    orderSummary += `Итого: ${orderPayload.itemCount} товар(ов) на сумму ${orderPayload.total.toLocaleString('ru-RU')} ₽\n`;
    orderSummary += `Ваши бонусы: ${orderPayload.bonuses.toLocaleString('ru-RU')}\n`;
    if (orderPayload.userId) {
        orderSummary += `ID пользователя: ${orderPayload.userId}\n`;
    }
    orderSummary += `Тип скидки: ${orderPayload.discountType}\n`;
    orderSummary += `\nТелефон получателя: ${orderPayload.phone}\n`;
    orderSummary += `Способ доставки: ${orderPayload.deliveryMethod}\n`;
    if (orderPayload.deliveryAddress) {
        orderSummary += `Адрес: ${orderPayload.deliveryAddress}\n`;
    }
    if (orderPayload.pickupAddress) {
        orderSummary += `Адрес самовывоза: ${orderPayload.pickupAddress}\n`;
    }
    orderSummary += `Способ оплаты: ${orderPayload.paymentMethod}\n`;
    if (orderPayload.paymentDiscountNote) {
        orderSummary += `\n${orderPayload.paymentDiscountNote}\n`;
    }
    if (orderPayload.paymentMethod === 'Счет на оплату') {
        orderSummary += `\n---\nДанные организации для счета:\n`;
        orderSummary += `ИНН: ${orderPayload.organizationInn}\n`;
        orderSummary += `Юридический адрес: ${orderPayload.organizationAddress}\n`;
        orderSummary += `БИК: ${orderPayload.organizationBik}\n`;
        orderSummary += `Расчетный счет: ${orderPayload.organizationAccount}\n`;
    }
    orderSummary += "\nЗаказ оформлен и отправлен в бот!";
    alert(orderSummary);
    
    // Очищаем корзину и форму
    cart = [];
    updateCartUI();
    updateAllProductButtons();
    resetCartForm();
    cartModal.style.display = 'none';
}

// --- Функция открытия модального окна с описанием товара ---
function openProductDetailsModal(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    detailsModalImage.src = product.image;
    detailsModalImage.alt = product.name;
    detailsModalTitle.textContent = product.name;
    detailsModalDescription.textContent = product.description;

    detailsModal.style.display = 'block';
}

// --- Функция закрытия модального окна с описанием товара ---
function closeProductDetailsModal() {
    detailsModal.style.display = 'none';
}
