```javascript
// ===============================
// Percentage Calculator
// ===============================

function calculatePercentage() {
    const number = parseFloat(document.getElementById("number").value);
    const percentage = parseFloat(document.getElementById("percentage").value);
    const resultElement = document.getElementById("result");

    if (isNaN(number) || isNaN(percentage)) {
        resultElement.innerText = "Please enter both values.";
        return;
    }

    const result = (number * percentage) / 100;

    resultElement.innerText =
        percentage + "% of " + number + " = " + result.toFixed(2);
}


// ===============================
// Age Calculator
// ===============================

function showAgeCalculator() {
    const ageTool = document.getElementById("ageTool");

    if (ageTool) {
        ageTool.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function calculateAge() {
    const dob = document.getElementById("dateOfBirth").value;
    const ageResult = document.getElementById("ageResult");

    if (dob === "") {
        ageResult.innerText = "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        ageResult.innerText = "Date of birth cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    ageResult.innerText =
        "Your age is " + age + " years.";
}


// ===============================
// EMI Calculator
// ===============================

function showEMICalculator() {
    const emiTool = document.getElementById("emiTool");

    if (emiTool) {
        emiTool.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function calculateEMI() {
    const loanAmount = parseFloat(
        document.getElementById("loanAmount").value
    );

    const interestRate = parseFloat(
        document.getElementById("interestRate").value
    );

    const loanTenure = parseFloat(
        document.getElementById("loanTenure").value
    );

    if (
        isNaN(loanAmount) ||
        isNaN(interestRate) ||
        isNaN(loanTenure) ||
        loanAmount <= 0 ||
        interestRate < 0 ||
        loanTenure <= 0
    ) {
        document.getElementById("emiResult").innerText =
            "Please enter valid values.";
        return;
    }

    const months = loanTenure * 12;
    const monthlyRate = interestRate / 12 / 100;

    let emi;

    if (monthlyRate === 0) {
        emi = loanAmount / months;
    } else {
        emi =
            loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, months) /
            (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById("emiResult").innerText =
        "Monthly EMI: ₹" + emi.toFixed(2);

    document.getElementById("totalInterest").innerText =
        "Total Interest: ₹" + totalInterest.toFixed(2);

    document.getElementById("totalPayment").innerText =
        "Total Payment: ₹" + totalPayment.toFixed(2);
}


// ===============================
// GST Calculator
// ===============================

function showGSTCalculator() {
    const gstTool = document.getElementById("gstTool");

    if (gstTool) {
        gstTool.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function calculateGST() {
    const amount = parseFloat(
        document.getElementById("gstAmount").value
    );

    const gstRate = parseFloat(
        document.getElementById("gstRate").value
    );

    if (
        isNaN(amount) ||
        isNaN(gstRate) ||
        amount < 0 ||
        gstRate < 0
    ) {
        document.getElementById("gstResult").innerText =
            "Please enter valid amount and GST rate.";
        return;
    }

    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = amount + gstAmount;

    document.getElementById("gstResult").innerText =
        "GST Amount: ₹" + gstAmount.toFixed(2);

    document.getElementById("gstTotal").innerText =
        "Total Amount: ₹" + totalAmount.toFixed(2);
}


// ===============================
// BMI Calculator
// ===============================

function showBMICalculator() {
    const bmiTool = document.getElementById("bmiTool");

    if (bmiTool) {
        bmiTool.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function calculateBMI() {
    const weight = parseFloat(
        document.getElementById("weight").value
    );

    const height = parseFloat(
        document.getElementById("height").value
    );

    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        document.getElementById("bmiResult").innerText =
            "Please enter valid height and weight.";
        return;
    }

    const heightInMeters = height / 100;

    const bmi =
        weight / (heightInMeters * heightInMeters);

    document.getElementById("bmiResult").innerText =
        "Your BMI: " + bmi.toFixed(1);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById("bmiCategory").innerText =
        "Category: " + category;
}


// ===============================
// Search Tools
// ===============================

function searchTools() {
    const searchBox = document.getElementById("searchBox");

    if (!searchBox) {
        return;
    }

    const searchText =
        searchBox.value.toLowerCase().trim();

    const tools =
        document.querySelectorAll(".tool-card");

    tools.forEach(function(tool) {

        const heading = tool.querySelector("h3");

        if (!heading) {
            return;
        }

        const toolName =
            heading.innerText.toLowerCase();

        if (toolName.includes(searchText)) {
            tool.style.display = "";
        } else {
            tool.style.display = "none";
        }
    });
}


// ===============================
// Discount Calculator
// ===============================

function showDiscountCalculator() {
    const discountTool =
        document.getElementById("discountTool");

    if (discountTool) {
        discountTool.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function calculateDiscount() {
    const price = parseFloat(
        document.getElementById("originalPrice").value
    );

    const discount = parseFloat(
        document.getElementById("discountPercent").value
    );

    if (
        isNaN(price) ||
        isNaN(discount) ||
        price < 0 ||
        discount < 0
    ) {
        document.getElementById("discountResult").innerText =
            "Please enter valid price and discount.";
        return;
    }

    if (discount > 100) {
        document.getElementById("discountResult").innerText =
            "Discount cannot be more than 100%.";
        return;
    }

    const discountAmount =
        (price * discount) / 100;

    const finalAmount =
        price - discountAmount;

    document.getElementById("discountResult").innerText =
        "Discount Amount: ₹" +
        discountAmount.toFixed(2);

    document.getElementById("finalPrice").innerText =
        "Final Price: ₹" +
        finalAmount.toFixed(2);
}


// ===============================
// Unit Converter
// ===============================

const unitOptions = {

    length: {
        meter: "Meter",
        kilometer: "Kilometer",
        centimeter: "Centimeter",
        millimeter: "Millimeter",
        mile: "Mile",
        yard: "Yard",
        foot: "Foot",
        inch: "Inch"
    },

    weight: {
        kilogram: "Kilogram",
        gram: "Gram",
        milligram: "Milligram",
        pound: "Pound",
        ounce: "Ounce"
    },

    temperature: {
        celsius: "Celsius",
        fahrenheit: "Fahrenheit",
        kelvin: "Kelvin"
    },

    volume: {
        liter: "Liter",
        milliliter: "Milliliter",
        cubicMeter: "Cubic Meter",
        gallon: "Gallon",
        quart: "Quart",
        pint: "Pint"
    },

    speed: {
        kmh: "Kilometer / Hour",
        mph: "Mile / Hour",
        ms: "Meter / Second",
        knot: "Knot"
    },

    time: {
        second: "Second",
        minute: "Minute",
        hour: "Hour",
        day: "Day",
        week: "Week"
    }
};


function updateUnits() {

    const typeElement =
        document.getElementById("conversionType");

    const fromElement =
        document.getElementById("fromUnit");

    const toElement =
        document.getElementById("toUnit");

    if (!typeElement || !fromElement || !toElement) {
        return;
    }

    const type = typeElement.value;

    fromElement.innerHTML = "";
    toElement.innerHTML = "";

    Object.entries(unitOptions[type]).forEach(
        function ([value, text]) {

            const fromOption =
                document.createElement("option");

            fromOption.value = value;
            fromOption.textContent = text;

            fromElement.appendChild(fromOption);


            const toOption =
                document.createElement("option");

            toOption.value = value;
            toOption.textContent = text;

            toElement.appendChild(toOption);
        }
    );

    if (toElement.options.length > 1) {
        toElement.selectedIndex = 1;
    }
}


function convertUnit() {

    const type =
        document.getElementById("conversionType").value;

    const from =
        document.getElementById("fromUnit").value;

    const to =
        document.getElementById("toUnit").value;

    const value =
        parseFloat(document.getElementById("unitValue").value);

    const resultElement =
        document.getElementById("unitResult");


    if (isNaN(value)) {

        resultElement.innerText =
            "Please enter a value to convert.";

        return;
    }


    let result;


    // Length
    if (type === "length") {

        const units = {
            meter: 1,
            kilometer: 1000,
            centimeter: 0.01,
            millimeter: 0.001,
            mile: 1609.344,
            yard: 0.9144,
            foot: 0.3048,
            inch: 0.0254
        };

        result =
            value * units[from] / units[to];
    }


    // Weight
    else if (type === "weight") {

        const units = {
            kilogram: 1,
            gram: 0.001,
            milligram: 0.000001,
            pound: 0.45359237,
            ounce: 0.028349523125
        };

        result =
            value * units[from] / units[to];
    }


    // Temperature
    else if (type === "temperature") {

        let celsius;

        if (from === "celsius") {
            celsius = value;
        }

        else if (from === "fahrenheit") {
            celsius = (value - 32) * 5 / 9;
        }

        else if (from === "kelvin") {
            celsius = value - 273.15;
        }


        if (to === "celsius") {
            result = celsius;
        }

        else if (to === "fahrenheit") {
            result = (celsius * 9 / 5) + 32;
        }

        else if (to === "kelvin") {
            result = celsius + 273.15;
        }
    }


    // Volume
    else if (type === "volume") {

        const units = {
            liter: 1,
            milliliter: 0.001,
            cubicMeter: 1000,
            gallon: 3.785411784,
            quart: 0.946352946,
            pint: 0.473176473
        };

        result =
            value * units[from] / units[to];
    }


    // Speed
    else if (type === "speed") {

        const units = {
            kmh: 1,
            mph: 1.609344,
            ms: 3.6,
            knot: 1.852
        };

        result =
            value * units[from] / units[to];
    }


    // Time
    else if (type === "time") {

        const units = {
            second: 1,
            minute: 60,
            hour: 3600,
            day: 86400,
            week: 604800
        };

        result =
            value * units[from] / units[to];
    }


    resultElement.innerText =
        value + " " +
        unitOptions[type][from] +
        " = " +
        result.toFixed(6).replace(/\.?0+$/, "") +
        " " +
        unitOptions[type][to];
}
```javascript
// ===============================
// Unit Converter
// ===============================

const unitOptions = {

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
        "meter/second": 1,
        "kilometer/hour": 0.277777778,
        "mile/hour": 0.44704,
        "foot/second": 0.3048
    }

};


// Update From and To units

function updateUnits() {

    const type = document.getElementById("unitType").value;

    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    if (type === "temperature") {

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

        return;
    }


    Object.keys(unitOptions[type]).forEach(function(unit) {

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


// Convert Units

function convertUnit() {

    const type = document.getElementById("unitType").value;

    const value = parseFloat(
        document.getElementById("unitValue").value
    );

    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;

    const resultElement =
        document.getElementById("unitResult");


    if (isNaN(value)) {

        resultElement.innerText =
            "Please enter a valid value.";

        return;
    }


    let result;


    // Temperature conversion

    if (type === "temperature") {

        if (from === to) {

            result = value;

        } else if (
            from === "Celsius" &&
            to === "Fahrenheit"
        ) {

            result = (value * 9 / 5) + 32;

        } else if (
            from === "Fahrenheit" &&
            to === "Celsius"
        ) {

            result = (value - 32) * 5 / 9;

        } else if (
            from === "Celsius" &&
            to === "Kelvin"
        ) {

            result = value + 273.15;

        } else if (
            from === "Kelvin" &&
            to === "Celsius"
        ) {

            result = value - 273.15;

        } else if (
            from === "Fahrenheit" &&
            to === "Kelvin"
        ) {

            result =
                (value - 32) * 5 / 9 + 273.15;

        } else if (
            from === "Kelvin" &&
            to === "Fahrenheit"
        ) {

            result =
                (value - 273.15) * 9 / 5 + 32;

        }

    }


    // Length, Weight and Speed

    else {

        const baseValue =
            value * unitOptions[type][from];

        result =
            baseValue / unitOptions[type][to];

    }


    resultElement.innerText =
        value + " " + from +
        " = " + result.toFixed(4) +
        " " + to;

}


// Load units when page opens

document.addEventListener("DOMContentLoaded", function() {

    if (document.getElementById("unitType")) {
        updateUnits();
    }

});
```

