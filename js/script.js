var header = document.querySelector('header');
var section = document.querySelector('section');
var mySelect = document.querySelector('select');
var affichage = document.createElement('div');
// Sélection de plusieurs élements HTML + création d'une div qui contiendra les infos d'un personnage

var requestURL = 'https://swapi.dev/api/people';
// Récupération du lien de l'API dans une variable

var request = new XMLHttpRequest();
// Nouvelle requête XMLHttpRequest
request.open('GET', requestURL);
// Pour ouvrir une nouvelle requête, on utilisera la méthode open(), qui attend au moins deux paramètres
// Ici, GET sera le premier paramètre, et celui-ci va demander une représentation de la ressource spécifiée en deuxième paramètre, qui sera notre variable requestURL, qui contient le lien du json
request.responseType = 'json';
// On indique que l'on attend une réponse de type json
request.send();
// On envoie la requête

request.onload = function() {
// Au chargement de la requête, on lance une fonction qui va récupérer la réponse dans une variable, et traîter cette réponse via 2 fonctions que nous décrirons plus bas
    var starWarsHeroes = request.response;
    getHeroes(starWarsHeroes);
    getHeroesInformations(starWarsHeroes);
}

function getHeroes(jsonObj){
// Fonction qui va permettre de récupérer les 'results' de la requête dans une variable, et de créer des <option> pour chaque personnage de liste grâce à leur nom
// Ces <option> seront enfant du <select> déjà existant : c'est ce qui va nous permettre de faire la liste déroulante
    var heroes = jsonObj['results'];

    for(var i = 0; i < heroes.length; i++){

        var myOption = document.createElement('option');
        myOption.textContent = heroes[i].name;
        myOption.setAttribute('value', i)

        mySelect.appendChild(myOption);
        
    }

}

function $_GET(param) {
// Superglobale $_GET de php : récupérer un élement de l'url
// Fonction trouvée sur https://www.creativejuiz.fr/blog/javascript/recuperer-parametres-get-url-javascript
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace( 
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );
    if ( param ) {
        return vars[param] ? vars[param] : null;    
    }
    return vars;
}

function getHeroesInformations(parametre){
// Fonction qui va nous permettre de récupérer l'id du personnage dans l'url (affiché au moment du click sur le <input> de type submit, l'identifiant ayanyt pour nom 'heroes'), et de crééer les éléments HTML qui vot permettre d'afficher ses informations
// Les liens de parenté sont gérés avec appendChild
    var personnageID = $_GET("heroes")
    var heroName = document.createElement('h2');
    heroName.textContent = parametre.results[personnageID].name;
    var myPara1 = document.createElement('p');
    myPara1.textContent = "- Height = " + parametre.results[personnageID].height + " cm"
    var myPara2 = document.createElement('p');
    myPara2.textContent = "- Mass = " + parametre.results[personnageID].mass + " kg"
    var myPara3 = document.createElement('p');
    myPara3.textContent = "- Hair color = " + parametre.results[personnageID].hair_color;
    var myPara4 = document.createElement('p');
    myPara4.textContent = "- Skin color = " + parametre.results[personnageID].skin_color;
    var myPara5 = document.createElement('p');
    myPara5.textContent = "- Eye color = " + parametre.results[personnageID].eye_color;
    var myPara6 = document.createElement('p');
    myPara6.textContent = "- Birth year = " + parametre.results[personnageID].birth_year;
    var myPara7 = document.createElement('p');
    myPara7.textContent = "- Gender = " + parametre.results[personnageID].gender;
        
    affichage.appendChild(heroName);
    affichage.appendChild(myPara1);
    affichage.appendChild(myPara2);
    affichage.appendChild(myPara3);
    affichage.appendChild(myPara4);
    affichage.appendChild(myPara5);
    affichage.appendChild(myPara6);
    affichage.appendChild(myPara7);
    section.appendChild(affichage);

}

