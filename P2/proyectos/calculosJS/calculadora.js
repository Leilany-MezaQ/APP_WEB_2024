function calcular() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let operacion = document.getElementById('operacion').value;
    let resultado = 0;
    let descripcionOperacion = '';

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingresa ambos números.');
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            descripcionOperacion = `La suma de ${numero1} más ${numero2} es igual a ${resultado}`;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            descripcionOperacion = `La resta de ${numero1} menos ${numero2} es igual a ${resultado}`;
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2;
            descripcionOperacion = `La multiplicación de ${numero1} por ${numero2} es igual a ${resultado}`;
            break;
        case 'division':
            if (numero2 === 0) {
                alert('No se puede dividir entre 0');
                return;
            }
            resultado = numero1 / numero2;
            descripcionOperacion = `La división de ${numero1} entre ${numero2} es igual a ${resultado}`;
            break;
    }

    document.getElementById('resultado').innerHTML = descripcionOperacion;
}

function borrar() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('operacion').value = 'suma'; 
    document.getElementById('resultado').innerHTML = '';
}
