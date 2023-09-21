let passwordoutput =  document.getElementById('passwordoutput');
let tableauMinuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
let tableauMajuscule = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
let tableauNumero = [1,2,3,4,5,6,7,8,9,0];
let tableauSymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];


function generateur() {
    let tableauxGroupe = [].concat( // on concatène plusieurs tableau pour n'en faire qu'un 
        lowercase.checked ? tableauMinuscule : [], // est-ce l'input lowercase est coché ? si oui, on prend des données du tableau 'tableauMinuscule', sinon on renvoie un tableau vide 
        uppercase.checked ? tableauMajuscule : [], // est-ce l'input uppercase est coché ? si oui, on prend des données du tableau 'tableauMajuscule', sinon on renvoie un tableau vide 
        numbers.checked ? tableauNumero : [], // est-ce l'input numbers est coché ? si oui, on prend des données du tableau 'tableauNumero', sinon on renvoie un tableau vide 
        symbols.checked ? tableauSymbole : [] // est-ce l'input symbols est coché ? si oui, on prend des données du tableau 'tableauSymbole', sinon on renvoie un tableau vide 
    ); 
	
    let passwordLength = parseInt(document.getElementById('taille').value); // transforme la valeur de l'input id='taille' en integer 
    let mdp = ''; // variable mdp vide 
  
    if (tableauxGroupe.length < 1 && passwordLength < 12) { 
        alert('Tu dois séléctionner au moins un critère');
	    alert('Le minimum est de 12 caractères');
    }
    else if (tableauxGroupe.length >= 1 && passwordLength < 12) {
        alert('Le minimum est de 12 caractères');
	}

  ///// si l'utilisateur saisi aucun critère
    else if (tableauxGroupe.length < 1 && passwordLength < 12) {
	    alert('Tu dois séléctionner au moins un critère');
    }
    else if (tableauxGroupe.length < 1 && passwordLength >= 12) {
        alert('Tu dois séléctionner au moins un critère');
    }
    else {
        for (let i = 0; i < passwordLength; i++) {
		    mdp += tableauxGroupe[Math.floor(Math.random() * tableauxGroupe.length)]; 
	    }
        passwordoutput.value = mdp; 
    }
}

function copie(){
	if (document.getElementById('passwordoutput').value == 0) {
		alert('Case vide , il n y a rien à copier')
	}
	else {
        passwordoutput.select();
        alert('Copié')
    }
}
 
function best() {
    document.getElementById('taille').value = 16;
	document.getElementById('lowercase').checked = true;
	document.getElementById('uppercase').checked = true;
	document.getElementById('numbers').checked = true;
	document.getElementById('symbols').checked = true;
	
    generateur();
}
