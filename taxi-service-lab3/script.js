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


// Додавання комірки, яку можна редагувати
function addCell(row, value, field, entity, id) {
    const cell = document.createElement("td");
    cell.textContent = value;

    if (field) {
        cell.dataset.field = field;
        cell.dataset.entity = entity;
        cell.dataset.id = id;
        cell.classList.add("editable");
        cell.title = "Натисніть, щоб редагувати";
    }

    row.appendChild(cell);
}



// Додавання кнопки видалення в рядок
function addDeleteButton(row, entity, id) {
    const cell = document.createElement("td");
    const button = document.createElement("button");

    button.textContent = "×";
    button.className = "delete-button";
    button.dataset.entity = entity;
    button.dataset.id = id;
    button.title = "Видалити запис";

    cell.appendChild(button);
    row.appendChild(cell);
}

// Відображення водіїв
function renderDrivers() {
    const table = document.getElementById("drivers-table");
    table.innerHTML = "";

    drivers.forEach(driver => {
        const row = document.createElement("tr");

        addCell(row, driver.id);
        addCell(row, driver.name, "name", "drivers", driver.id);
		addCell(row, driver.phone, "phone", "drivers", driver.id);
		addCell(row, driver.experience + " років", "experience", "drivers", driver.id);
		addCell(row, driver.rating, "rating", "drivers", driver.id);
		addCell(row, driver.trips, "trips", "drivers", driver.id);
		addCell(row, driver.status, "status", "drivers", driver.id);
		addDeleteButton(row, "drivers", driver.id);
        table.appendChild(row);
    });
}

// Відображення автомобілів
function renderCars() {
    const table = document.getElementById("cars-table");
    table.innerHTML = "";

    cars.forEach(car => {
        const row = document.createElement("tr");

        addCell(row, car.id);
		addCell(row, car.brand, "brand", "cars", car.id);
		addCell(row, car.model, "model", "cars", car.id);
		addCell(row, car.year, "year", "cars", car.id);
		addCell(row, car.color, "color", "cars", car.id);
		addCell(row, car.number, "number", "cars", car.id);
		addCell(row, car.body, "body", "cars", car.id);
        addCell(row, car.driverId);
		addDeleteButton(row, "cars", car.id);
        table.appendChild(row);
    });
}

// Відображення замовлень
function renderOrders() {
    const table = document.getElementById("orders-table");
    table.innerHTML = "";

    orders.forEach(order => {
        const row = document.createElement("tr");

        addCell(row, order.id);
        addCell(row, order.driverId);
        addCell(row, order.client, "client", "orders", order.id);
		addCell(row, order.phone, "phone", "orders", order.id);
		addCell(row, order.from, "from", "orders", order.id);
		addCell(row, order.to, "to", "orders", order.id);
		addCell(row, `${order.price} грн`, "price", "orders", order.id);
		addCell(row, order.date, "date", "orders", order.id);
		addCell(row, order.status, "status", "orders", order.id);
		addDeleteButton(row, "orders", order.id);
        table.appendChild(row);
    });
}

// Перемикання вкладок
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

// Елементи модального вікна
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalForm = document.getElementById("modal-form");
const modalFields = document.getElementById("modal-fields");
const cancelButton = document.getElementById("cancel-button");

let currentEntity = "";

// Опис полів для кожного типу запису
const fieldsConfig = {
    drivers: [
        { name: "name", label: "ПІБ", type: "text" },
        { name: "phone", label: "Телефон", type: "tel" },
        {
            name: "experience",
            label: "Стаж (років)",
            type: "number",
            min: 0
        },
        {
            name: "rating",
            label: "Рейтинг",
            type: "number",
            min: 0,
            max: 5,
            step: 0.1
        },
        {
            name: "trips",
            label: "Кількість поїздок",
            type: "number",
            min: 0
        },
        {
            name: "status",
            label: "Статус",
            type: "select",
            options: ["Вільний", "На лінії"]
        }
    ],

    cars: [
        { name: "brand", label: "Марка", type: "text" },
        { name: "model", label: "Модель", type: "text" },
        {
            name: "year",
            label: "Рік випуску",
            type: "number",
            min: 1900,
            max: 2100
        },
        { name: "color", label: "Колір", type: "text" },
        { name: "number", label: "Державний номер", type: "text" },
        {
            name: "body",
            label: "Тип кузова",
            type: "select",
            options: ["Седан", "Хетчбек", "Універсал", "Позашляховик", "Мінівен", "Інший"]
        },
        {
            name: "driverId",
            label: "Водій",
            type: "driver"
        }
    ],

    orders: [
        {
            name: "driverId",
            label: "Водій",
            type: "driver"
        },
        { name: "client", label: "Клієнт", type: "text" },
        { name: "phone", label: "Телефон клієнта", type: "tel" },
        { name: "from", label: "Адреса подачі", type: "text" },
        { name: "to", label: "Адреса призначення", type: "text" },
        {
            name: "price",
            label: "Вартість (грн)",
            type: "number",
            min: 0,
            step: 0.01
        },
        { name: "date", label: "Дата", type: "date" },
        {
            name: "status",
            label: "Статус",
            type: "select",
            options: ["Нове", "В процесі", "Виконано", "Скасовано"]
        }
    ]
};

// Створення поля форми
function createField(field) {
    const label = document.createElement("label");
    label.textContent = field.label;

    let input;

    if (field.type === "select" || field.type === "driver") {
        input = document.createElement("select");

        const options = field.type === "driver"
            ? drivers.map(driver => ({
                value: driver.id,
                text: `${driver.id} — ${driver.name}`
            }))
            : field.options.map(option => ({
                value: option,
                text: option
            }));

        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = field.type === "driver"
            ? "Оберіть водія"
            : "Оберіть значення";
        placeholder.disabled = true;
        placeholder.selected = true;

        input.appendChild(placeholder);

        options.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.value;
            option.textContent = optionData.text;
            input.appendChild(option);
        });

        if (options.length === 0) {
            placeholder.textContent = "Спочатку додайте водія";
        }
    } else {
        input = document.createElement("input");
        input.type = field.type;
    }

    input.name = field.name;
    input.required = true;

    if (field.min !== undefined) {
        input.min = field.min;
    }

    if (field.max !== undefined) {
        input.max = field.max;
    }

    if (field.step !== undefined) {
        input.step = field.step;
    }

    label.appendChild(input);
    return label;
}

// Відкриття форми додавання
function openModal(entity) {
    currentEntity = entity;

    const titles = {
        drivers: "Додавання водія",
        cars: "Додавання автомобіля",
        orders: "Додавання замовлення"
    };

    modalTitle.textContent = titles[entity];
    modalFields.innerHTML = "";

    fieldsConfig[entity].forEach(field => {
        modalFields.appendChild(createField(field));
    });

    modal.hidden = false;
}

// Закриття форми
function closeModal() {
    modal.hidden = true;
    modalForm.reset();
    modalFields.innerHTML = "";
    currentEntity = "";
}

// Кнопки додавання записів
const addButtons = document.querySelectorAll(".add-button");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        openModal(button.dataset.entity);
    });
});

// Скасування додавання
cancelButton.addEventListener("click", closeModal);

// Закриття при натисканні на затемнений фон
modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

// Закриття клавішею Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});

// Наступний вільний ID
function getNextId(records) {
    return records.reduce((maxId, record) => {
        return Math.max(maxId, record.id);
    }, 0) + 1;
}

// Збереження нового запису
modalForm.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(modalForm);
    const record = {};

    for (const [key, value] of formData.entries()) {
        if (["experience", "rating", "trips", "year", "driverId", "price"].includes(key)) {
            record[key] = Number(value);
        } else {
            record[key] = value.trim();
        }
    }

    // Перевіряємо, чи обрано водія для автомобіля або замовлення
    if (
        (currentEntity === "cars" || currentEntity === "orders") &&
        !drivers.some(driver => driver.id === record.driverId)
    ) {
        alert("Спочатку додайте водія та оберіть його зі списку.");
        return;
    }

    if (currentEntity === "drivers") {
        record.id = getNextId(drivers);
        drivers.push(record);
        renderDrivers();
    } else if (currentEntity === "cars") {
        record.id = getNextId(cars);
        cars.push(record);
        renderCars();
    } else if (currentEntity === "orders") {
        record.id = getNextId(orders);
        orders.push(record);
        renderOrders();
    }

    closeModal();
});

// Початкове відображення таблиць
renderDrivers();
renderCars();
renderOrders();

// Обробка натискання на кнопку видалення
document.addEventListener("click", event => {
    const button = event.target.closest(".delete-button");

    if (!button) {
        return;
    }

    const entity = button.dataset.entity;
    const id = Number(button.dataset.id);

    if (entity === "drivers") {
        const hasCars = cars.some(car => car.driverId === id);
        const hasOrders = orders.some(order => order.driverId === id);

        if (hasCars || hasOrders) {
            alert(
                "Неможливо видалити водія: дані використовуються " +
                "в таблиці автомобілів або замовлень."
            );
            return;
        }

        const index = drivers.findIndex(driver => driver.id === id);

        if (index !== -1) {
            drivers.splice(index, 1);
        }
    } else if (entity === "cars") {
        const index = cars.findIndex(car => car.id === id);

        if (index !== -1) {
            cars.splice(index, 1);
        }
    } else if (entity === "orders") {
        const index = orders.findIndex(order => order.id === id);

        if (index !== -1) {
            orders.splice(index, 1);
        }
    }

    renderDrivers();
    renderCars();
    renderOrders();
});

// Редагування комірок
document.addEventListener("click", event => {
    const cell = event.target.closest("td.editable");

    if (!cell || cell.querySelector("input, select")) {
        return;
    }

    const field = cell.dataset.field;
    const entity = cell.dataset.entity;
    const id = Number(cell.dataset.id);

    const records = {
        drivers: drivers,
        cars: cars,
        orders: orders
    };

    const record = records[entity].find(item => item.id === id);

    if (!record) {
        return;
    }

    const oldValue = record[field];

	// Варіанти для полів з обмеженим набором значень
	const selectOptions = {
		drivers: {
			status: ["Вільний", "На лінії"]
		},
		cars: {
			body: [
				"Седан",
				"Хетчбек",
				"Універсал",
				"Позашляховик",
				"Мінівен",
				"Інший"
			]
		},
		orders: {
			status: ["Нове", "В процесі", "Виконано", "Скасовано"]
		}
	};

	const options = selectOptions[entity]?.[field];
	let input;

	if (options) {
		// Створюємо список для вибору
		input = document.createElement("select");

		options.forEach(optionValue => {
			const option = document.createElement("option");
			option.value = optionValue;
			option.textContent = optionValue;
			input.appendChild(option);
		});
	} else {
		// Для інших полів створюємо звичайне поле введення
		input = document.createElement("input");

		input.type = field === "date" ? "date" :
			["experience", "rating", "trips", "year", "price"].includes(field)
				? "number"
				: "text";
	}

	input.value = oldValue;
	input.style.width = "90%";

    if (field === "experience" || field === "trips" ||
        field === "price" || field === "year") {
        input.min = 0;
    }

    if (field === "rating") {
        input.min = 0;
        input.max = 5;
        input.step = 0.1;
    }

    if (field === "year") {
        input.min = 1900;
        input.max = 2100;
    }

    cell.textContent = "";
	cell.appendChild(input);
	input.focus();

	if (input.tagName === "INPUT") {
		input.select();
	}

    let finished = false;

    function finishEdit(save) {
        if (finished) return;
        finished = true;
	
        if (save && input.value.trim() !== "") {
            let value = input.value.trim();

            if (input.type === "number") {
                value = Number(value);

                if (!Number.isFinite(value) || input.validity.badInput ||
                    !input.checkValidity()) {
                    save = false;
                }
            }

            if (save) {
                record[field] = value;
            }
        }

        if (!save || input.value.trim() === "") {
            record[field] = oldValue;
        }

        if (entity === "drivers") renderDrivers();
        if (entity === "cars") renderCars();
        if (entity === "orders") renderOrders();
    }
	
	if (input.tagName === "SELECT") {
			input.addEventListener("change", () => {
				finishEdit(true);
			});
		}
		
    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            finishEdit(true);
        }

        if (event.key === "Escape") {
            finishEdit(false);
        }
    });

    input.addEventListener("blur", () => {
        finishEdit(true);
    });
});