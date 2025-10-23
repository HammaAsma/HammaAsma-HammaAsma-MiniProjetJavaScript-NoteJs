/*Article 1:Phone*/
class Phone {
    constructor(name, model, color, prix,quantity) {
        this.name = name; 
        this.model = model;
        this.color = color;
        this.prix = prix;
        this.quantity = quantity;
    }   
    getDetails() {
        return `name: ${this.name}, Model: ${this.model}, Color: ${this.color}, prix: $${this.prix}`;
    }   
 
}
/*Article 2:Smart TV */
class SmartTV {
    constructor(name, model, size, prix,quantity) {
        this.name = name; 
        this.model = model;
        this.size = size;
        this.prix = prix;
        this.quantity = quantity;
    }   
    getDetails() {
        return `name: ${this.name}, Model: ${this.model}, Size: ${this.size}, prix: $${this.prix}`;
    }   
}
/*Article 3:Gaming Console*/
class GamingConsole  {
    constructor(name, model, type, prix,quantity) {
        this.name = name; 
        this.model = model; 
        this.type = type;
        this.prix = prix;
        this.quantity = quantity;
    }
    getDetails() {
        return `name: ${this.name}, Model: ${this.model}, Type: ${this.type}, prix: $${this.prix}`;
    }   
}

/**initialisation */
let tab_objet = {
    Phone: new Phone("iPhone", "13 Pro Max", "purple", 300, 1),
    SmartTV: new SmartTV("HP", "Q80T", "55 inches", 220, 3),
    GamingConsole: new GamingConsole("PlayStation", "5", "Console", 150, 5)
};

/**************************************************************/
let shoppingCart = [];let somme =0;
/*************************************************************/
function addItem(libelle) {
    let item=tab_objet[libelle];
    if (!item) {
        console.log(`ce article ${libelle} n'existe pas.`);
        return;
    }
    if(item.quantity >0)
    {
        shoppingCart.push(item);
        console.log(`L'article ${item.name} a été ajouté au panier.`);
        item.quantity--;
        let id="stock_"+libelle;
        document.getElementById(id).innerText = `Stock restant de ${item.name} : ${item.quantity}`;
        if(item.quantity === 0){
            console.log(`L'article ${item.name} n' est plus en stock.!!!!!!!`);
        }
        somme += item.prix;
        console.log(`Le prix total est: ${somme}`);
        document.getElementById("totalPrice").innerText = `Le prix total est: $${calculateTotalPrice(shoppingCart)} `;
        document.createElement("li");
        document.getElementById("listpanier").innerHTML = "";
        for (let i = 0; i < shoppingCart.length; i++) {
            let li = document.createElement("li");
    
            li.textContent = shoppingCart[i].getDetails();
            
            document.getElementById("listpanier").appendChild(li);
        }

    }
    else{
        alert(`Nous ne vendons pas cet article ${item.name}`);
    }
    
}
/********************************************************************/
function calculateTotalPrice(shoppingCart) {
    let totalPrice = 0; 
    for (let item of shoppingCart) {
        totalPrice += item.prix;
    }  
    
    
    return totalPrice; 
}


/********************************************************************/
function pay(payment_amount){
    let totalPrice = calculateTotalPrice(shoppingCart); 
    if (totalPrice > 400) {
        totalPrice *= 0.9; // Appliquer une réduction de 10%
        alert('totalPrice avec une réduction de 10% est: $' + totalPrice);
    }
    if(payment_amount >= totalPrice){
        let rendue = payment_amount - totalPrice;
        if(rendue > 0){
            alert(`le rendu est: ${rendue}`);
        }
        alert('Merci pour votre achat !');
        shoppingCart = []; // Vider le panier après le paiement
        somme = 0;  
        document.getElementById("totalPrice").innerText = `Le prix total est: $0 `;
        document.getElementById("listpanier").innerHTML = "";

    }
    else if(payment_amount <= totalPrice){
        alert('le client n’a pas assez d’argent pour acheter les articles');
    }
}
document.getElementById("btn").addEventListener("click", function() {
    let payment_amount = parseFloat(prompt("Entrez le montant du paiement:"));
        if (!isNaN(payment_amount)) {
            pay(payment_amount);    
        } else {
            alert("Montant de paiement invalide.");
        }
});



   