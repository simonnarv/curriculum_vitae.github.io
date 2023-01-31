
document.getElementById('detalles').addEventListener('click', () => {

    let elemento_contactos = document.getElementById('div-contactos');
    let elemento_nacionalidad = document.getElementById('div-nacionalidad');
    let elemento_fecha = document.getElementById('div-fecha');

    if (elemento_contactos.style.display === 'none') {
        elemento_contactos.style.display = 'inline';
        elemento_nacionalidad.style.display = 'inline';
        elemento_fecha.style.display = 'inline';
    } else {
        elemento_contactos.style.display = 'none';
        elemento_nacionalidad.style.display = 'none';
        elemento_fecha.style.display = 'none';
    }
});

document.getElementById('perfil').addEventListener('click', () => {
    let elemento_parrafo = document.getElementById('parrafo');

    if (elemento_parrafo.style.display === 'none') {
        elemento_parrafo.style.display = 'inline';
    } else {
        elemento_parrafo.style.display = 'none';
    }
});

document.getElementById('educacion').addEventListener('click', () => {
    let elemento_universidad = document.getElementById('universidad');
    let elemento_colegio = document.getElementById('colegio');

    if (elemento_universidad.style.display === 'none') {
        elemento_universidad.style.display = 'inline';
        elemento_colegio.style.display = 'inline';
    } else {
        elemento_universidad.style.display = 'none';
        elemento_colegio.style.display = 'none';
    }
});

document.getElementById('experiencia').addEventListener('click', () => {

    let elemento_libreria = document.getElementById('libreria');

    if (elemento_libreria.style.display === 'none') {
        elemento_libreria.style.display = 'inline';
    } else {
        elemento_libreria.style.display = 'none';
    }
});

document.getElementById('id-encabezado').addEventListener('click', () => {

    let elemento = document.getElementById('id-p-competencias');

    if (elemento.style.display === 'none') {
        elemento.style.display = 'inline';
    } else {
        elemento.style.display = 'none';
    }
});


