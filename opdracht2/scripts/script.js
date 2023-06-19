// JavaScript Document.

// Log text, om te kijken of het script doorgevoerd wordt.
console.log("yo, deze script werkt");

// verschil tussen let en var:

// Variabelen gedeclareerd door "let" zijn alleen beschikbaar 
// binnen het blok waarin ze zijn gedefinieerd.

// Variabelen die zijn gedeclareerd door "var" zijn beschikbaar 
// in de functie waarin ze zijn gedeclareerd.

// Variabele gemaakt voor list en favolist.
var list = document.querySelector('main section ul');
var favolist = document.querySelector('main section:nth-of-type(2) ul')

// Variabele gemaakt voor de filter opties (all, survival en royale).
var optionAll = document.querySelector("#filter-all");
var optionsurvival = document.querySelector("#filter-survival");
var optionroyale = document.querySelector("#filter-royale");

// AddeventListener toegevoegd die zorgt ervoor dat de
// new Sortable list en favolist aangeroepen worden.
optionAll.addEventListener("change", filterList);
optionsurvival.addEventListener("change", filterList);
optionroyale.addEventListener("change", filterList);

// Sorteeer optie "list" aangemaakt.
new Sortable(list, {
    group: {
        // Je kan elmenten uit deze lijst delen.
        name: 'shared',
        // Het element word gekopieerd naar de andere lijst (gedupliceerd).
        pull: 'clone',
        // Er kan niks in deze lijst toegevoegd worden.
        put: false
    },
    // De tijd hoe lang de animatie duurt om verplaatst te worden.
    // Hoe hoger de tijd hoe langzamer de animatie gaat.
    animation: 150
});

// Sorteeer optie "favolist" aangemaakt.
new Sortable(favolist, {
    group: {
        // Je kan elmenten uit deze lijst delen.
        name: 'shared',
    },
    // De tijd hoe lang de animatie duurt om verplaatst te worden.
    // Hoe hoger de tijd hoe langzamer de animatie gaat.
    animation: 150
});

// Functie aangemaakt "filterList"
function filterList(event){
    // De let is alleen beschikbaar in het blok waarin hij is gedefineerd.
    // deLijst is gelijk aan ul.
    let deLijst = document.querySelector("ul");
    // nieuweFilter is aangemaakt met let.
    // Event zorgt voor het triggeren van de onclick.
    // Target retouneert het element waarop de gebeurtenis plaats vind.
    // Value geeft de waarde aan.
    let nieuweFilter = event.target.value;
    // Aan deLijst (ul) word een class toegevoegd.
    deLijst.className = "";
    // Aan de class van "deLijst" word de let (nieuweFilter) toegevoegd.
    deLijst.classList.add(nieuweFilter);
}