let UbicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if (UbicacionPrincipal >= Desplazamiento_Actual) {
        document.getElementById('header').style.top = '0';

    } else {
        document.getElementById('header').style.top = '-100px';
    }
    UbicacionPrincipal = Desplazamiento_Actual;
}