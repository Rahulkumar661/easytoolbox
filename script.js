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
// AGE CALCULATOR
// ===============================

function calculateAge() {

    const birthDateValue =
        document.getElementById("birthDate").value;

    const result =
        document.getElementById("ageResult");

    if (!birthDateValue) {

        result.textContent =
            "Please select your date of birth.";

        return;
    }

    const birthDate =
        new Date(birthDateValue + "T00:00:00");

    const today = new Date();

    if (birthDate > today) {

        result.textContent =
            "Date of birth cannot be in the future.";

        return;
    }

    let years =
        today.getFullYear() -
        birthDate.getFullYear();

    let months =
        today.getMonth() -
        birthDate.getMonth();

    let days =
        today.getDate() -
        birthDate.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    result.textContent =
        "Your age is " +
        years +
        " years, " +
        months +
        " months and " +
        days +
        " days.";

}


// ===============================
// PERCENTAGE CALCULATOR
// ===============================

function calculatePercentage() {

    const value =
        parseFloat(
            document.getElementById(
                "percentageValue"
            ).value
        );

    const total =
        parseFloat(
            document.getElementById(
                "percentageTotal"
            ).value
        );

    const result =
        document.getElementById(
            "percentageResult"
        );


    if (
        isNaN(value) ||
        isNaN(total) ||
        total === 0
    ) {

        result.textContent =
            "Please enter valid values.";

        return;
    }


    const percentage =
        (value / total) * 100;


    result.textContent =
        value +
        " is " +
        percentage.toFixed(2) +
        "% of " +
        total;

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

    const type =
        document.getElementById("unitType");

    if (!type) return;


    const fromUnit =
        document.getElementById("fromUnit");

    const toUnit =
        document.getElementById("toUnit");


    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";


    if (type.value === "temperature") {

        const temperatureUnits = [
            "Celsius",
            "Fahrenheit",
            "Kelvin"
        ];


        temperatureUnits.forEach(function(unit) {

            const option1 =
                document.createElement("option");

            option1.value = unit;
            option1.textContent = unit;


            const option2 =
                document.createElement("option");

            option2.value = unit;
            option2.textContent = unit;


            fromUnit.appendChild(option1);
            toUnit.appendChild(option2);

        });

    }

    else {

        Object.keys(units[type.value])
            .forEach(function(unit) {

                const option1 =
                    document.createElement("option");

                option1.value = unit;
                option1.textContent = unit;


                const option2 =
                    document.createElement("option");

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

    const type =
        document.getElementById("unitType").value;

    const from =
        document.getElementById("fromUnit").value;

    const to =
        document.getElementById("toUnit").value;


    const value =
        parseFloat(
            document.getElementById(
                "unitValue"
            ).value
        );


    const result =
        document.getElementById(
            "unitResult"
        );


    if (isNaN(value)) {

        result.textContent =
            "Please enter a value.";

        return;
    }


    // TEMPERATURE

    if (type === "temperature") {

        let celsius;


        if (from === "Celsius") {

            celsius = value;

        }

        else if (from === "Fahrenheit") {

            celsius =
                (value - 32) * 5 / 9;

        }

        else if (from === "Kelvin") {

            celsius =
                value - 273.15;

        }


        let converted;


        if (to === "Celsius") {

            converted = celsius;

        }

        else if (to === "Fahrenheit") {

            converted =
                (celsius * 9 / 5) + 32;

        }

        else if (to === "Kelvin") {

            converted =
                celsius + 273.15;

        }


        result.textContent =
            value +
            " " +
            from +
            " = " +
            converted.toFixed(4) +
            " " +
            to;

        return;
    }


    // LENGTH / WEIGHT / SPEED

    const baseValue =
        value * units[type][from];


    const convertedValue =
        baseValue / units[type][to];


    result.textContent =
        value +
        " " +
        from +
        " = " +
        convertedValue.toFixed(4) +
        " " +
        to;

}


// ===============================
// START UNIT CONVERTER
// ===============================

if (
    document.getElementById("unitType")
) {

    updateUnits();

}
// ===============================
// EMI CALCULATOR
// ===============================
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

    const emiResult = document.getElementById("emiResult");
    const totalInterest = document.getElementById("totalInterest");
    const totalPayment = document.getElementById("totalPayment");

    if (
        isNaN(loanAmount) ||
        isNaN(interestRate) ||
        isNaN(loanTenure) ||
        loanAmount <= 0 ||
        interestRate < 0 ||
        loanTenure <= 0
    ) {
        emiResult.textContent = "Please enter valid loan details.";
        totalInterest.textContent = "";
        totalPayment.textContent = "";
        return;
    }

    const monthlyRate = interestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;

    let emi;

    if (monthlyRate === 0) {
        emi = loanAmount / numberOfMonths;
    } else {
        emi =
            loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, numberOfMonths) /
            (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    }

    const totalPaid = emi * numberOfMonths;
    const interest = totalPaid - loanAmount;

    emiResult.textContent =
        "Monthly EMI: ₹" + emi.toFixed(2);

    totalInterest.textContent =
        "Total Interest: ₹" + interest.toFixed(2);

    totalPayment.textContent =
        "Total Payment: ₹" + totalPaid.toFixed(2);
}
// ===============================
// GST CALCULATOR
// ===============================
function calculateGST() {
    const amount = parseFloat(
        document.getElementById("gstAmount").value
    );

    const rate = parseFloat(
        document.getElementById("gstRate").value
    );

    const gstResult = document.getElementById("gstResult");
    const gstTotal = document.getElementById("gstTotal");

    if (
        isNaN(amount) ||
        isNaN(rate) ||
        amount < 0 ||
        rate < 0
    ) {
        gstResult.textContent = "Please enter valid values.";
        gstTotal.textContent = "";
        return;
    }

    const gst = (amount * rate) / 100;
    const total = amount + gst;

    gstResult.textContent =
        "GST Amount: ₹" + gst.toFixed(2);

    gstTotal.textContent =
        "Total Amount: ₹" + total.toFixed(2);
}
// ===============================
// BMI CALCULATOR
// ===============================

function calculateBMI() {

    const weight = parseFloat(
        document.getElementById("weight").value
    );

    const height = parseFloat(
        document.getElementById("height").value
    );

    const bmiResult =
        document.getElementById("bmiResult");

    const bmiCategory =
        document.getElementById("bmiCategory");


    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {

        bmiResult.textContent =
            "Please enter valid weight and height.";

        bmiCategory.textContent = "";

        return;
    }


    const heightInMetres =
        height / 100;


    const bmi =
        weight /
        (heightInMetres * heightInMetres);


    let category;


    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Healthy weight";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obesity";

    }


    bmiResult.textContent =
        "Your BMI: " + bmi.toFixed(2);


    bmiCategory.textContent =
        "Category: " + category;
}
// ===============================
// DISCOUNT CALCULATOR
// ===============================

function calculateDiscount() {

    const originalPrice = parseFloat(
        document.getElementById("originalPrice").value
    );

    const discountPercent = parseFloat(
        document.getElementById("discountPercent").value
    );

    const discountResult =
        document.getElementById("discountResult");

    const finalPrice =
        document.getElementById("finalPrice");


    if (
        isNaN(originalPrice) ||
        isNaN(discountPercent) ||
        originalPrice < 0 ||
        discountPercent < 0
    ) {

        discountResult.textContent =
            "Please enter valid values.";

        finalPrice.textContent = "";

        return;
    }


    const discountAmount =
        (originalPrice * discountPercent) / 100;

    const priceAfterDiscount =
        originalPrice - discountAmount;


    discountResult.textContent =
        "Discount Amount: ₹" +
        discountAmount.toFixed(2);


    finalPrice.textContent =
        "Final Price: ₹" +
        priceAfterDiscount.toFixed(2);
}
