<?php

function binToDec(string $bin): int {
    if (!preg_match('/^[01]+$/', $bin)) {
        throw new InvalidArgumentException('not valid argument');
    }

    $result = 0;
    $numPower = strlen($bin) - 1;

    foreach (str_split($bin) as $digit) {
        $result += ((int)$digit) * (2 ** $numPower);
        $numPower--;
    }

    return $result;
}

echo binToDec("1001001"); // 73