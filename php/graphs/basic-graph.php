<?php

$arrayVertex = ['A', 'B', 'C', 'D']; // the edge points
$arrayConnection = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0]
];

function printConnection($arrayVertex, $arrayConnection){
    $strCon = "";
    for($i = 0; $i < count($arrayVertex); $i++){
        $strCon = "$arrayVertex[$i]: ";
        for($row = 0; $row < count($arrayConnection); $row++){
            if($arrayConnection[$row][$i] == 1){
                $strCon .= "$arrayVertex[$row] ";
            }
        }
        print_r($strCon."\n");
    }
}

printConnection($arrayVertex, $arrayConnection);