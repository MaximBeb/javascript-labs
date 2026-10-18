const drivers = [
    {
        id: 1,
        name: "Іваненко Олександр Петрович",
        phone: "+380671234567",
        experience: 7,
        rating: 4.9,
        trips: 1250,
        status: "На лінії"
    },
    {
        id: 2,
        name: "Петренко Андрій Васильович",
        phone: "+380631112233",
        experience: 4,
        rating: 4.7,
        trips: 780,
        status: "Вільний"
    },
    {
        id: 3,
        name: "Шевченко Максим Олегович",
        phone: "+380991234567",
        experience: 10,
        rating: 5.0,
        trips: 2100,
        status: "На лінії"
    }
];

const cars = [
    {
        id: 1,
        brand: "Toyota",
        model: "Camry",
        year: 2021,
        color: "Чорний",
        number: "AA1234BC",
        body: "Седан",
        driverId: 1
    },
    {
        id: 2,
        brand: "Renault",
        model: "Megane",
        year: 2020,
        color: "Сірий",
        number: "AA5678CC",
        body: "Хетчбек",
        driverId: 2
    },
    {
        id: 3,
        brand: "Skoda",
        model: "Octavia",
        year: 2022,
        color: "Білий",
        number: "AA9012DD",
        body: "Універсал",
        driverId: 3
    }
];

const orders = [
    {
        id: 1,
        driverId: 1,
        client: "Марія Коваленко",
        phone: "+380501234567",
        from: "вул. Сумська, 10",
        to: "вул. Наукова, 25",
        price: 180,
        date: "2026-09-28",
        status: "Виконано"
    },
    {
        id: 2,
        driverId: 2,
        client: "Олег Мельник",
        phone: "+380631234567",
        from: "вул. Героїв Праці, 15",
        to: "просп. Незалежності, 40",
        price: 250,
        date: "2026-09-28",
        status: "Виконано"
    },
    {
        id: 3,
        driverId: 3,
        client: "Анна Бондар",
        phone: "+380991112233",
        from: "вул. Полтавський Шлях, 5",
        to: "вул. Клочківська, 80",
        price: 220,
        date: "2026-09-29",
        status: "В процесі"
    }
];

function renderDrivers() {
    const table = document.getElementById("drivers-table");

    table.innerHTML = "";

    drivers.forEach(driver => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${driver.id}</td>
            <td>${driver.name}</td>
            <td>${driver.phone}</td>
            <td>${driver.experience} років</td>
            <td>${driver.rating}</td>
            <td>${driver.trips}</td>
            <td>${driver.status}</td>
        `;

        table.appendChild(row);
    });
}

function renderCars() {
    const table = document.getElementById("cars-table");

    table.innerHTML = "";

    cars.forEach(car => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.color}</td>
            <td>${car.number}</td>
            <td>${car.body}</td>
            <td>${car.driverId}</td>
        `;

        table.appendChild(row);
    });
}

function renderOrders() {
    const table = document.getElementById("orders-table");

    table.innerHTML = "";

    orders.forEach(order => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.driverId}</td>
            <td>${order.client}</td>
            <td>${order.phone}</td>
            <td>${order.from}</td>
            <td>${order.to}</td>
            <td>${order.price} грн</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
        `;

        table.appendChild(row);
    });
}

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {

        const tabId = button.dataset.tab;

        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        tabContents.forEach(content => {
            content.classList.remove("active");
        });

        button.classList.add("active");

        document.getElementById(tabId).classList.add("active");
    });
});

renderDrivers();
renderCars();
renderOrders();