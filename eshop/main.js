// Eshop

const pocet = document.querySelector ("#pocetKusu");
const vstupUzivatelKS = Number(prompt("Kolik kusů triček potřebujete?"))

pocetKusu.innerHTML = vstupUzivatelKS

let cenaObjednavky

if (vstupUzivatelKS >= 50) {
    cenaObjednavky = vstupUzivatelKS * 300;
}

else if (vstupUzivatelKS >= 200) {
    cenaObjednavky = vstupUzivatelKS * 250;
}

else if (vstupUzivatelKS >= 500) {
    cenaObjednavky = vstupUzivatelKS * 200;
}

else if (vstupUzivatelKS >= 1000) {
    cenaObjednavky = vstupUzivatelKS * 150;
}

else {
    cenaObjednavky = vstupUzivatelKS * 120;
}

document.getElementById("cena").innerText = cenaObjednavky + "Kč"