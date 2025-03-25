let form = document.querySelector('form');
let table = document.querySelector('.myTable table');
let countryCounter = 0;
let countryRecords = [];

const displayRecords = () => {
    let table = document.querySelector('.myTable table');
    if (!table) {
        console.error("Your element cant be found.");
        return;
    }

    table.innerHTML = `
        <tr>
            <th>Country Visited</th>
            <th>Date Visited</th>
            <th>Rating</th>
            <th>Action</th>
        </tr>
    `;

    countryRecords.forEach((record, index) => {
        table.insertAdjacentHTML(
            "beforeend",
            `<tr>
                <td>${record.Country}</td>
                <td>${record.dateVisited}</td>
                <td>${record.Rating}</td>
                <td>
                    <button onclick="removeRecord(${index})">Delete</button>
                </td>
            </tr>`
        );
    });
    document.getElementById("countryCount").textContent = `You have visited: ${countryCounter} countries.`;
};

const removeRecord = (index) => {
    countryRecords.splice(index, 1);
    countryCounter -= 1;
    displayRecords();
};

const addRecord = (evt) => {
    evt.preventDefault();
    let newRecord = {
        Country: form.elements['country'].value,
        dateVisited: form.elements['dateVisited'].value,
        Rating: form.elements['Rating'].value
    };
    countryRecords.push(newRecord);
    countryCounter += 1;
    displayRecords();
    form.reset();
    form.elements['country'].focus();
};

form.addEventListener('submit', addRecord);

const search = () => {
    let searchFor = document.getElementById("search").value.toLowerCase();
    let errorSearching = document.getElementById("error");

    if (!searchFor) {
        errorSearching.style.display = "none";
    }

    let countryFound = countryRecords.find(record => record.Country.toLowerCase() === searchFor);

    if (countryFound) {
        errorSearching.style.display = "none";
        alert(`Country Found!: ${countryFound.Country}\nDate Visited: ${countryFound.dateVisited}\nRating: ${countryFound.Rating}`);
    } else {
        errorSearching.style.display = "block";
    }
}

document.getElementById("signUp").addEventListener("click", function() {
    let signUpForm = document.getElementById("sign-up");

    if (signUpForm.style.display === "none" || signUpForm.style.display === "") {
        signUpForm.style.display = "block";
    } else {
        signUpForm.style.display = "none";
    }
});

document.getElementById("logIn").addEventListener("click", function() {
    let signInForm = document.getElementById("sign-in");

    if (signInForm.style.display === "none" || signInForm.style.display === "") {
        signInForm.style.display = "block";
    } else {
        signInForm.style.display = "none";
    }
});

document.getElementById("submitSU").addEventListener("click", function () {
    let signUpComplete = document.getElementById("suComplete");

    if (suComplete.style.display === "none" || suComplete.style.display === "") {
        suComplete.style.display = "block";
    } else {
        suComplete.style.display = "none";
    }
});

document.getElementById("submitSI").addEventListener("click", function () {
    let signInComplete = document.getElementById("siComplete");

    if (siComplete.style.display === "none" || siComplete.style.display === "") {
        siComplete.style.display = "block";
    } else {
        siComplete.style.display = "none";
    }
});

document.getElementById("submitSU").addEventListener("click", function() {
    let switchItems = document.getElementById("suComplete");
    let switchItems2 = document.getElementById("sign-up")

    if (switchItems.style.display === "block" && switchItems2.style.display === "block") {
        switchItems2.style.display = "none";
    } else {
        switchItems2.style.display = "block"
    }
});

document.getElementById("submitSI").addEventListener("click", function() {
    let switchItems = document.getElementById("siComplete");
    let switchItems2 = document.getElementById("sign-in")

    if (switchItems.style.display === "block" && switchItems2.style.display === "block") {
        switchItems2.style.display = "none";
    } else {
        switchItems2.style.display = "block"
    }
});