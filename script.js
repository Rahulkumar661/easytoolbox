// ===============================
// TOOL SEARCH
// ===============================
function searchTools() {
    const search = document.getElementById("searchBox");

    if (!search) return;

    const value = search.value.toLowerCase();
    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(function(card) {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}


// ===============================
// PERCENTAGE CALCULATOR
// ===============================
function calculatePercentage() {

    const value = parseFloat(document.getElementById("percentageValue").value);
    const total = parseFloat(document.getElementById("percentageTotal").value);
    const result = document.getElementById("percentageResult");

    if (isNaN(value) || isNaN(total) || total === 0) {
        result.textContent = "Please enter valid values.";
        return;
    }

    const percentage = (value / total) * 100;

    result.textContent =
        value + " is " + percentage.toFixed(2) + "% of " + total;
}


// ===============================
// UNIT CONVERTER
// ===============================

const units = {

    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        mile: 1609.344,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    },

    weight: {
        kilogram: 1,
        gram: 0.001,
        milligram: 0.000001,
        pound: 0.45359237,
        ounce: 0.0283495
    },

    speed: {
        "km/h": 1,
        "m/s": 3.6,
        "mph": 1.609344
    }

};


// ===============================
// UPDATE UNITS
// ===============================

function updateUnits() {

    const type = document.getElementById("unitType");

    if (!type) return;

    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";


    // Temperature
    if (type.value === "temperature") {

        const temperatureUnits = [
            "Celsius",
            "Fahrenheit",
            "Kelvin"
        ];

        temperatureUnits.forEach(function(unit) {

            const option1 = document.createElement("option");
            option1.value = unit;
            option1.textContent = unit;

            const option2 = document.createElement("option");
            option2.value = unit;
            option2.textContent = unit;

            fromUnit.appendChild(option1);
            toUnit.appendChild(option2);

        });

    }

    // Other units
    else {

        Object.keys(units[type.value]).forEach(function(unit) {

            const option1 = document.createElement("option");
            option1.value = unit;
            option1.textContent = unit;

            const option2 = document.createElement("option");
            option2.value = unit;
            option2.textContent = unit;

            fromUnit.appendChild(option1);
            toUnit.appendChild(option2);

        });

    }
}


// ===============================
// CONVERT UNIT
// ===============================

function convertUnit() {

    const type = document.getElementById("unitType").value;
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;

    const value =
        parseFloat(document.getElementById("unitValue").value);

    const result =
        document.getElementById("unitResult");


    if (isNaN(value)) {

        result.textContent = "Please enter a value.";

        return;
    }


    // ===============================
    // TEMPERATURE
    // ===============================

    if (type === "temperature") {

        let celsius;


        if (from === "Celsius") {

            celsius = value;

        } else if (from === "Fahrenheit") {

            celsius = (value - 32) * 5 / 9;

        } else if (from === "Kelvin") {

            celsius = value - 273.15;

        }


        let converted;


        if (to === "Celsius") {

            converted = celsius;

        } else if (to === "Fahrenheit") {

            converted = (celsius * 9 / 5) + 32;

        } else if (to === "Kelvin") {

            converted = celsius + 273.15;

        }


        result.textContent =
            value + " " + from +
            " = " + converted.toFixed(4) +
            " " + to;

        return;
    }


    // ===============================
    // LENGTH / WEIGHT / SPEED
    // ===============================

    const baseValue =
        value * units[type][from];

    const convertedValue =
        baseValue / units[type][to];


    result.textContent =
        value + " " + from +
        " = " + convertedValue.toFixed(4) +
        " " + to;
}


// ===============================
// START UNIT CONVERTER
// ===============================

if (document.getElementById("unitType")) {

    updateUnits();

}
