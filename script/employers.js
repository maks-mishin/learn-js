let money, nameShop, time, price;

function start () {
    money = +prompt("Ваш бюджет?", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет?", "");
    }
    nameShop = prompt("Название вашего магазина?", "").toUpperCase();
    time = 21;
}

start();

let mainList = {
    budget: money,
    shopName: nameShop,
    shopGoods: [],
    emloyers: [],
    open: false,
    discount: true,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {
            let thing = prompt("Какой тип товаров будем продавать?", "");
            
            if ((typeof(thing)) === 'string' && (typeof(thing)) != null && thing != '') {
                console.log("All right!");
                mainList.shopGoods[i] = thing;
            } else {
                i = i - 1;
            }
        }
    },
    workTime: function workTime(time) {
        if(time < 0) {
            console.log("Такого не может быть!");
        } else if (time > 0 && time < 20) {
            console.log("Время работать!");
            mainList.open = true;
        } else if (time < 24) {
            console.log("Закрыто!");
        } else {
            console.log("В сутках 24 часа!");
        }
    },
    dayBudget: function dayBudget() {
        alert("Ежедневный бюджет: " + mainList.budget / 30);
    },
    makeDiscount: function makeDiscount() {
        if(mainList.discount == true) {
            price = (price/100)*80;
        }
    },
    getEmployers: function getEmployers() {
        for (let i = 0; i < 4; i++) {
            let name = prompt("Имя сотрудника.", "");
            mainList.emloyers[i] = name;
        }
    
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt("Перечислите через запятую ваши товары.", "");
        this.shopItems = items.split(",");
        this.shopItems.push(prompt("Подождите, ещё ", ""));
        this.shopItems.sort();
    }
};

