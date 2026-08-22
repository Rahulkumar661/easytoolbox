function calculatePercentage() {
const number = parseFloat(document.getElementById("number").value);
const percentage = parseFloat(document.getElementById("percentage").value);
const resultElement = document.getElementById("result");

```
if (isNaN(number) || isNaN(percentage)) {
    resultElement.innerText = "Please enter both values.";
    return;
}

const result = (number * percentage) / 100;

resultElement.innerText =
    percentage + "% of " + number + " = " + result.toFixed(2);
```

}

function showAgeCalculator() {
const ageTool = document.getElementById("ageTool");

```
if (ageTool) {
    ageTool.scrollIntoView({
        behavior: "smooth"
    });
}
```

}

function calculateAge() {
const dob = document.getElementById("dateOfBirth").value;
const ageResult = document.getElementById("ageResult");

```
if (dob === "") {
    ageResult.innerText = "Please select your date of birth.";
    return;
}

const birthDate = new Date(dob);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const month = today.getMonth() - birthDate.getMonth();

if (
    month < 0 ||
    (month === 0 && today.getDate() < birthDate.getDate())
) {
    age--;
}

ageResult.innerText = "Your age is " + age + " years.";
```

}

function showEMICalculator() {
const emiTool = document.getElementById("emiTool");

```
if (emiTool) {
    emiTool.scrollIntoView({
        behavior: "smooth"
    });
}
```

}

function calculateEMI() {
const loanAmount = parseFloat(
document.getElementById("loanAmount").value
);

```
const interestRate = parseFloat(
    document.getElementById("interestRate").value
);

const loanTenure = parseFloat(
    document.getElementById("loanTenure").value
);

if (
    isNaN(loanAmount) ||
    isNaN(interestRate) ||
    isNaN(loanTenure)
) {
    document.getElementById("emiResult").innerText =
        "Please enter all values.";
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
```

}

function showGSTCalculator() {
const gstTool = document.getElementById("gstTool");

```
if (gstTool) {
    gstTool.scrollIntoView({
        behavior: "smooth"
    });
}
```

}

function calculateGST() {
const amount = parseFloat(
document.getElementById("gstAmount").value
);

```
const gstRate = parseFloat(
    document.getElementById("gstRate").value
);

if (isNaN(amount) || isNaN(gstRate)) {
    document.getElementById("gstResult").innerText =
        "Please enter amount and GST rate.";
    return;
}

const gstAmount = (amount * gstRate) / 100;
const totalAmount = amount + gstAmount;

document.getElementById("gstResult").innerText =
    "GST Amount: ₹" + gstAmount.toFixed(2);

document.getElementById("gstTotal").innerText =
    "Total Amount: ₹" + totalAmount.toFixed(2);
```

}

function showBMICalculator() {
const bmiTool = document.getElementById("bmiTool");

```
if (bmiTool) {
    bmiTool.scrollIntoView({
        behavior: "smooth"
    });
}
```

}

function calculateBMI() {
const weight = parseFloat(
document.getElementById("weight").value
);

```
const height = parseFloat(
    document.getElementById("height").value
);

if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("bmiResult").innerText =
        "Please enter valid height and weight.";
    return;
}

const heightInMeters = height / 100;
const bmi = weight / (heightInMeters * heightInMeters);

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
```

}

function searchTools() {
const searchBox = document.getElementById("searchBox");

```
if (!searchBox) {
    return;
}

const searchText = searchBox.value.toLowerCase();
const tools = document.querySelectorAll(".tool-card");

tools.forEach(function(tool) {
    const heading = tool.querySelector("h3");

    if (!heading) {
        return;
    }

    const toolName = heading.innerText.toLowerCase();

    if (toolName.includes(searchText)) {
        tool.style.display = "block";
    } else {
        tool.style.display = "none";
    }
});
```

}

function showDiscountCalculator() {
const discountTool = document.getElementById("discountTool");

```
if (discountTool) {
    discountTool.scrollIntoView({
        behavior: "smooth"
    });
}
```

}

function calculateDiscount() {
const price = parseFloat(
document.getElementById("originalPrice").value
);

```
const discount = parseFloat(
    document.getElementById("discountPercent").value
);

if (isNaN(price) || isNaN(discount)) {
    document.getElementById("discountResult").innerText =
        "Please enter price and discount.";
    return;
}

const discountAmount = (price * discount) / 100;
const finalAmount = price - discountAmount;

document.getElementById("discountResult").innerText =
    "Discount Amount: ₹" + discountAmount.toFixed(2);

document.getElementById("finalPrice").innerText =
    "Final Price: ₹" + finalAmount.toFixed(2);
```

}
