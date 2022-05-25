var header = document.querySelector('header');
var section = document.querySelector('section');
var mySelect = document.querySelector('select');
var affichage = document.createElement('div');

var requestURL = 'https://swapi.dev/api/people';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var starWarsHeroes = request.response;
    getHeroes(starWarsHeroes);
    getHeroesInformations(starWarsHeroes);
}

function getHeroes(jsonObj){

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

