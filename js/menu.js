// Attend que le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Ajoute une classe d'animation lorsque la page est entièrement chargée
    animateOnLoad();
    
    // Fonction pour ajouter une classe d'animation lorsque la page est entièrement chargée
    function animateOnLoad() {
        // Sélectionne les éléments à animer
        var elementsToAnimate = document.querySelectorAll('.animate-on-load');
        
        // Parcours tous les éléments à animer
        elementsToAnimate.forEach(function(element) {
            // Ajoute les classes d'animation d'entrée
            element.classList.add('animate__animated', 'animate__fadeIn');
        });
    }
    
    // Fonction pour ajouter une classe d'animation lorsque l'utilisateur fait défiler la page
    function animateOnScroll() {
        // Sélectionne les éléments à animer lors du défilement
        var elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        
        // Parcours tous les éléments à animer
        elementsToAnimate.forEach(function(element) {
            // Vérifie si l'élément est dans la fenêtre visible
            if (isElementInViewport(element)) {
                // Ajoute les classes d'animation d'entrée
                element.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }
    
    // Fonction pour vérifier si un élément est dans la fenêtre visible
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Écoute les événements de défilement pour déclencher les animations au fur et à mesure que l'utilisateur fait défiler la page
    window.addEventListener('scroll', function() {
        animateOnScroll();
    });
});
