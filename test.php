<?php
function calcularSoma($valor1, $valor2) {
    $valor3 = $valor1 + $valor2;
    return $valor3;
}

function calcularSubtracao($valor1, $valor2) {
    $valor3 = $valor1 - $valor2;
    return $valor3;
}

function calcularMultiplicacao($valor1, $valor2) {
    $valor3 = $valor1 * $valor2;
    return $valor3;
}

$resultado = calcularSoma(1, 2);
for ($x = 0; x <= $resultado; $x++) {

    if ($x > 1) {
        print($resultado);
    }
}
