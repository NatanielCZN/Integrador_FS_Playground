document.addEventListener('DOMContentLoaded', function () {    
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const track = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    /**
     * Función para mostrar el elemento actualmente seleccionado
     * @param {*} index 
     */
    function showItem(index) {
        const newTransformValue = -index * track.offsetWidth + 'px';
        track.style.transform = 'translateX(' + newTransformValue + ')';
        indicadorActual(index);        
    }

    /**
     * Función para pasar al siguiente elemento
     */
    function sigItem() {
        if (currentIndex < totalItems - 1) currentIndex++;
        else currentIndex = 0;

        showItem(currentIndex);
    }

    /**
     * Función para pasar al elemento anterior
     */
    function antItem() {
        if (currentIndex > 0) currentIndex--;
        else currentIndex = totalItems - 1;
        
        showItem(currentIndex);
    }

    /**
     * Funcion para marcar el indicador actual
     * @param {*} index 
     */
    function indicadorActual(index) {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    /**
     * Funcion para desplazar segun el indice
     * @param {*} index 
     */
    function goToIndex(index) {
        if (index >= 0 && index < totalItems) {
            auxIndex = index;
            showItem(auxIndex);
        }
    }

    /**
     * Funcion para dar la accion del indicador seleccionado
     */
    indicators.forEach((indicador, index) => {
        indicador.addEventListener('click', function () {
            goToIndex(index);
        });
    });

    // Eventos de los botones
    document.getElementById('sigBtn').addEventListener('click', sigItem);
    document.getElementById('antBtn').addEventListener('click', antItem);

    /**
     * Evento de redimensionamiento de la ventana
     */
    window.addEventListener('resize', function() {
        // Reajustar el desplazamiento cuando cambie el tamaño de la ventana
        showItem(currentIndex);
    });

    // Mostrar el primer elemento al cargar la página
    showItem(currentIndex);
});