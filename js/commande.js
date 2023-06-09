window.addEventListener('DOMContentLoaded', function() {
    var catéSelect = document.getElementById('caté');
    var formuleSelect = document.getElementById('Formule');
    var resultat = document.getElementById('resultat');

    catéSelect.addEventListener('change', afficherPrix);
    formuleSelect.addEventListener('change', afficherPrix);

    function afficherPrix() {
      var catéValue = catéSelect.value;
      var formuleValue = formuleSelect.value;
      var prix = '';
      var abo = 'Le prix de l\'abonnement est de ';
      switch(catéValue+'-'+formuleValue){
        case 'Musculation-Mensuelle':
            prix = abo+'42 euros par mois.';
            break;
        case 'Musculation-Trimestrielle':
            prix = abo+'110 euros par trimestre';
            break;
            case 'Musculation-Annuelle':
            prix = abo+'390 euros par an';
            break;
            case 'Fitness-Mensuelle':
            prix = abo+'49 euros par mois';
            break;
            case 'Fitness-Trimestrielle':
            prix = abo+'130 euros par trimestre';
            break;
            case 'Fitness-Annuelle':
            prix = abo+'460 euros par an';
            break;
            case 'Etudiant-Mensuelle':
            prix = abo+'37.80 euros par mois';
            break;
            case 'Etudiant-Trimestrielle':
            prix = abo+'99 euros par trimestre';
            break;
            case 'Etudiant-Annuelle':
            prix = abo+'351 euros par an';
            break;
        default:
            prix = 'Le prix n\'est pas disponible pour cette combinaison.';

      }
      resultat.textContent = prix;
    }
  });