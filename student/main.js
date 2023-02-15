// Jméno a příjemní studenta

let jmeno = document.querySelector ("#jmenoUzivatele");
let vstupUzivatelJMENO = prompt("Zadejte Vaše jméno bez diakritiky").trim().toLocaleLowerCase().slice(0,3)

jmenoUzivatele.innerHTML = vstupUzivatelJMENO

let prijmeni = document.querySelector ("#prijmeniUzivatele");
let vstupUzivatelPrijmeni = prompt("Zadejte Vaše příjmení bez diakritiky").trim().toLocaleLowerCase().slice(0,5)

prijmeniUzivatele.innerHTML = vstupUzivatelPrijmeni

document.getElementById("emailstudent").innerText = vstupUzivatelJMENO + vstupUzivatelPrijmeni + "@fit.cvut.cz";
