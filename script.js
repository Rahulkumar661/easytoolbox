function calculatePercentage() {
    let number = document.getElementById("number").value;
    let percentage = document.getElementById("percentage").value;

    if (number === "" || percentage === "") {
        document.getElementById("result").innerText =
            "Please enter both values.";
        return;
    }

    let result = (number * percentage) / 100;

    document.getElementById("result").innerText =
        percentage + "% of " + number + " = " + result;
}function showAgeCalculator() {

    document.getElementById("ageTool")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function calculateAge() {

    let dob = document.getElementById("dateOfBirth").value;

    if (dob === "") {

        document.getElementById("ageResult").innerText =
            "Please select your date of birth.";

        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").innerText =
        "Your age is " + age + " years.";
}function showAgeCalculator() {

    document.getElementById("ageTool").scrollIntoView({
        behavior: "smooth"
    });

}


function calculateAge() {

    let dob = document.getElementById("dateOfBirth").value;

    if (dob === "") {

        document.getElementById("ageResult").innerText =
            "Please select your date of birth.";

        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").innerText =
        "Your age is " + age + " years.";
}function showEMICalculator() {

    document.getElementById("emiTool").scrollIntoView({
        behavior: "smooth"
    });

}


function calculateEMI() {

    let loanAmount =
        parseFloat(document.getElementById("loanAmount").value);

    let interestRate =
        parseFloat(document.getElementById("interestRate").value);

    let loanTenure =
        parseFloat(document.getElementById("loanTenure").value);


    if (
        isNaN(loanAmount) ||
        isNaN(interestRate) ||
        isNaN(loanTenure)
    ) {

        document.getElementById("emiResult").innerText =
            "Please enter all values.";

        return;
    }


    let monthlyRate = interestRate / 12 / 100;

    let months = loanTenure * 12;


    let emi =
        loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);


    let totalPayment = emi * months;

    let totalInterest = totalPayment - loanAmount;


    document.getElementById("emiResult").innerText =
        "Monthly EMI: ₹" + emi.toFixed(2);


    document.getElementById("totalInterest").innerText =
        "Total Interest: ₹" + totalInterest.toFixed(2);


    document.getElementById("totalPayment").innerText =
        "Total Payment: ₹" + totalPayment.toFixed(2);
}function showGSTCalculator() {

    document.getElementById("gstTool").scrollIntoView({
        behavior: "smooth"
    });

}


function calculateGST() {

    let amount =
        parseFloat(document.getElementById("gstAmount").value);

    let gstRate =
        parseFloat(document.getElementById("gstRate").value);


    if (isNaN(amount) || isNaN(gstRate)) {

        document.getElementById("gstResult").innerText =
            "Please enter amount and GST rate.";

        return;
    }


    let gstAmount = (amount * gstRate) / 100;

    let totalAmount = amount + gstAmount;


    document.getElementById("gstResult").innerText =
        "GST Amount: ₹" + gstAmount.toFixed(2);


    document.getElementById("gstTotal").innerText =
        "Total Amount: ₹" + totalAmount.toFixed(2);
}function showBMICalculator() {

    document.getElementById("bmiTool").scrollIntoView({
        behavior: "smooth"
    });

}


function calculateBMI() {

    let weight =
        parseFloat(document.getElementById("weight").value);

    let height =
        parseFloat(document.getElementById("height").value);


    if (isNaN(weight) || isNaN(height) || height <= 0) {

        document.getElementById("bmiResult").innerText =
            "Please enter valid height and weight.";

        return;
    }


    let heightInMeters = height / 100;

    let bmi =
        weight / (heightInMeters * heightInMeters);


    document.getElementById("bmiResult").innerText =
        "Your BMI: " + bmi.toFixed(1);


    let category = "";


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
}function searchTools() {

    let searchText =
        document.getElementById("searchBox").value.toLowerCase();

    let tools =
        document.querySelectorAll(".tool-card");


    tools.forEach(function(tool) {

        let toolName =
            tool.querySelector("h3").innerText.toLowerCase();


        if (toolName.includes(searchText)) {

            tool.style.display = "block";

        } else {

            tool.style.display = "none";

        }

    });

}function showDiscountCalculator() {

    document.getElementById("discountTool").scrollIntoView({
        behavior: "smooth"
    });

}


function calculateDiscount() {

    let price =
        parseFloat(document.getElementById("originalPrice").value);

    let discount =
        parseFloat(document.getElementById("discountPercent").value);


    if (isNaN(price) || isNaN(discount)) {

        document.getElementById("discountResult").innerText =
            "Please enter price and discount.";

        return;
    }


    let discountAmount = (price * discount) / 100;

    let finalAmount = price - discountAmount;


    document.getElementById("discountResult").innerText =
        "Discount Amount: ₹" + discountAmount.toFixed(2);


    document.getElementById("finalPrice").innerText =
        "Final Price: ₹" + finalAmount.toFixed(2);
}