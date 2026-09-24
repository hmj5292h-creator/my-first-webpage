//list of the menu
const products = [
    {
        name: "Classic Milk Bread",
        price: 6.00
    },
    {
        name: "Signature Loaf",
        price: 4.00
    },
    {
        name: "Cheese Cat Bread",
        price: 4.00
    },
    {
        name: "Cat Paw Danish",
        price: 4.50
    },
    {
        name: "Moonlight Croissant",
        price: 6.50
    },
    {
        name: "Rocket Cream Puff",
        price: 4.00
    },
    {
        name: "Future Cat Cake",
        price: 8.00
    },
    {
        name: "Galaxy Cheesecake",
        price: 7.50
    }
];

//Store favourites to local storage//
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//change colour of the heart
function addFavorite(button) {
    button.textContent = "♥ Favorited";

    const productName = button.parentElement.querySelector(".product-name").textContent;

    // no repeating fav item
    if (!favorites.includes(productName)) {
        favorites.push(productName);
    }

    // store the data, data will save even if the page is refreshed
    localStorage.setItem("favorites", JSON.stringify(favorites));

    displayFavorites();
}

//display the fav list//
function displayFavorites() {
    const favoritesList = document.getElementById("favorites-list");

    if (!favoritesList) {
        return;
    }

    favoritesList.innerHTML = "";

    favorites.forEach(function(productName) {
        const listItem = document.createElement("li");
        listItem.textContent = productName;
        favoritesList.appendChild(listItem);
    });

}

displayFavorites();





//make the validation for the form
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById("userName");
        const nameError = document.getElementById("name-error");

        if (fullName.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            return;
        }

        nameError.textContent = "";
        console.log("Form submitted");
    });
}

