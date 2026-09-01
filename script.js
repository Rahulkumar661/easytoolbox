
// ===============================
// SEARCH TOOLS
// ===============================

function searchTools() {
    const input = document.getElementById("searchBox");

    if (!input) return;

    const searchText = input.value.toLowerCase();

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(function(card) {
        const text = card.innerText.toLowerCase();

        if (text.includes(searchText)) {
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

    const value = parseFloat(document.getElementById("percentageValue")?.value);
    const total = parseFloat(document.getElementById("percentageTotal")?.value);
    const result = document.getElementById("percentageResult");

    if (!result) return;

    if (isNaN(value) || isNaN(total) || total === 0) {
        result.innerHTML = "Please enter valid values.";
        return;
    }

    const percentage = (value / total) * 100;

    result.innerHTML =
        value + " is " + percentage.toFixed(2) + "% of " + total;
}


// ===============================
// UNIT CONVERTER
// ===============================

const unitData = {

    length: {
        units: {
            "Meter": 1,
            "Kilometer": 1000,
            "Centimeter": 0.01,
            "Millimeter": 0.001,
            "Mile": 1609.344,
            "Yard": 0.9144,
            "Foot": 0.3048,
            "Inch": 0.0254
        }
    },

    weight: {
        units: {
            "Kilogram": 1,
            "Gram": 0.001,
            "Milligram": 0.000001,
            "Pound": 0.45359237,
            "Ounce": 0.0283495
        }
    },

    speed: {
        units: {
            "m/s": 1,
            "km/h": 0.277777778,
            "mph": 0.44704,
            "ft/s": 0.3048
        }
    },

    temperature: {
        units: {
            "Celsius": "C",
            "Fahrenheit": "F",
            "Kelvin": "K"
        }
    }
};


// ===============================
// UPDATE UNIT DROPDOWNS
// ===============================

function updateUnits() {

    const type = document.getElementById("unitType")?.value;
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");

    if (!type || !fromUnit || !toUnit) return;

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    const units = Object.keys(unitData[type].units);

    units.forEach(function(unit) {

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


// ===============================
// CONVERT UNIT
// ===============================

function convertUnit() {

    const type = document.getElementById("unitType")?.value;
    const from = document.getElementById("fromUnit")?.value;
    const to = document.getElementById("toUnit")?.value;
    const value = parseFloat(document.getElementById("unitValue")?.value);
    const result = document.getElementById("unitResult");

    if (!result) return;

    if (isNaN(value)) {
        result.innerHTML = "Please enter a valid value.";
        return;
    }


    // Temperature conversion

    if (type === "temperature") {

        let celsius;

        if (from === "Celsius") {
            celsius = value;
        } 
        else if (from === "Fahrenheit") {
            celsius = (value - 32) * 5 / 9;
        } 
        else if (from === "Kelvin") {
            celsius = value - 273.15;
        }


        let converted;

        if (to === "Celsius") {
            converted = celsius;
        } 
        else if (to === "Fahrenheit") {
            converted = (celsius * 9 / 5) + 32;
        } 
        else if (to === "Kelvin") {
            converted = celsius + 273.15;
        }

        result.innerHTML =
            value + " " + from + " = " +
            converted.toFixed(4) + " " + to;

        return;
    }


    // Length, Weight and Speed conversion

    const fromFactor = unitData[type].units[from];
    const toFactor = unitData[type].units[to];

    const baseValue = value * fromFactor;
    const convertedValue = baseValue / toFactor;

    result.innerHTML =
        value + " " + from + " = " +
        convertedValue.toFixed(4) + " " + to;
}


// ===============================
// LOAD UNIT CONVERTER
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    if (document.getElementById("unitType")) {
        updateUnits();
    }

});
