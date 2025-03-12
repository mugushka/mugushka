// const randomNumberArray = [];
// for (let i=0; i < 30; i++){
//     randomNumberArray.push(Math.floor(Math.random()*100));
// }

// const table = document.createElement('table');
// let row;
// let cell;

// for (let i=0; i<5; i++){
//     row= table.insertRow();
//     for (let j=0; j<6; j++){
//         cell = row.insertCell();

//         const index = i * 6 + j;
// const number = randomNumberArray[index];

// cell.textContent = number;

// if(number<50){
//     cell.classList.add('Fail');
// }else if (number>=50 && number<=70){
//     cell.classList.add('nefor');
// }else if (number>=70 && number<=90){
//     cell.classList.add('Good');
// }else{
//     cell.classList.add('Awesome');
// }

// document.body.appendChild(table);
//     }
// }

const cats = [
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
        "age": 8,
        "rate": 7,
        "favourite": false,
        "description": "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.",
        "id": 1
    },
    {
        "name": "Базиль",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
        "age": 2,
        "rate": 10,
        "favourite": false,
        "description": "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.",
        "id": 2
    },
    {
        "name": "Риш",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG",
        "age": 1,
        "rate": 10,
        "favourite": true,
        "description": "Риш любит лесенки, канаты. Очень активный и дружелюбный кот. Риш полностью здоров, привит, кастрирован. Использует лоточек и очень аккуратен.",
        "id": 3
    },
    {
        "name": "Элли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg",
        "age": 4,
        "rate": 8,
        "favourite": false,
        "description": "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать. Не доверяет людям, потребуется время, чтобы стать ей другом. Приучена к лотку и когтеточке",
        "id": 4
    },
    {
        "name": "Чарли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 8,
        "favourite": false,
        "description": "Чёрно-белый юный котофилософ очень любит размышлять и быть наедине. Пока что не доверяет людям, не агрессивный. Ладит с другими животными, приучен к лотку и когтеточке",
        "id": 5
    },
    {
        "name": "Стефани",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg",
        "age": 6,
        "rate": 9,
        "favourite": false,
        "description": "Прелестная Стефани – трогательная, добродушная и очень-очень общительная девочка как никто другой нуждается в заботе и любви. Приучена к лотку и когтеточке",
        "id": 6
    },
    {
        "name": "Дуся",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-02/B1444207-6EE3-4BA4-97F7-2F9666AE2F63.jpeg",
        "age": 1,
        "rate": 9,
        "favourite": false,
        "description": "Дусеньке около 1 года с небольшим, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно. Очень общительная и нежная, хочет постоянного внимания.",
        "id": 7
    },
    {
        "name": "Бруно",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/IMG-20211223-WA0049.jpg",
        "age": 1,
        "rate": 10,
        "favourite": false,
        "description": "Очаровательный активный кот Бруно, находится в постоянном движении! Очаровательный и ласковый кот. Приучен к лотку, ладит с другими котами, привит.",
        "id": 8
    },
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BE%D0%BA4_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 9,
        "favourite": true,
        "description": "Немного боязливый, но очень добрый и нежный кот Светлячок. Приучен к лотку и когтеточке, ладит с детьми, привит. Станет вам хорошим другом",
        "id": 9
    }
];

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

cats.forEach(cat => {
    const catCard = document.createElement("div");
    catCard.classList.add("cat-card");

    catCard.innerHTML = `
        <img src="${cat.img_link}" alt="${cat.name}" class="cat-image">
        <div class="cat-info">
            <h3>${cat.name}, ${cat.age} лет</h3>
            <p>${cat.description}</p>
            <div class="rate">Оценка: ${cat.rate}/10</div>
            <div class="favourite">${cat.favourite ? "❤️ Это мой любимчик!" : "Не выбран в избранное"}</div>
        </div>
    `;

    container.appendChild(catCard);
});

// CSS стиль внутри JS
const style = document.createElement('style');
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
        justify-content: center;
        width: 90%;
    }

    .cat-card {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease;
        text-align: center;
        padding: 10px;
        font-size: 14px;
    }

    .cat-card:hover {
        transform: scale(1.05);
    }

    .cat-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 10px;
    }

    .cat-info {
        padding: 15px;
    }

    .cat-info h3 {
        margin: 0;
        font-size: 1.4em;
        color: #333;
    }

    .cat-info p {
        color: #555;
        font-size: 0.9em;
        line-height: 1.5;
    }

    .rate {
        font-size: 1.1em;
        color: #ff9f00;
    }

    .favourite {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }

    .favourite span {
        margin-left: 5px;
        font-weight: bold;
        color: #ff4500;
    }
`;
document.head.appendChild(style);
