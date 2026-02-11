<?php

const BR = "<br>";

// First Fibonacci

function solution(int $first, int $second): array
{
    $canSwitchToPrev = static function (int $first, int $second): bool {
        $prev = $second - $first;
        return $prev >= 0 && $prev <= $first;
    };

    while ($canSwitchToPrev($first, $second)) {
        [$first, $second] = [$second - $first, $first];
    }

    return [$first, $second];
}

print_r(solution(25, 40)); // [0, 5]

echo BR;

// Sum of odd numbers

function rowSumOddNumbers(int $n): int
{

  // return $n ** 3;

  $countOddTotal = 0;
  for ($i = $n; $i >= 0; $i--) {
    $countOddTotal += $i;
  }

  $lastOddNumber = $countOddTotal * 2 - 1;

  $lastNOddNumbers = [$lastOddNumber];

  for ($i = $n; $i > 1; $i--) {
    array_push($lastNOddNumbers, end($lastNOddNumbers) - 2);
  }

  return array_sum($lastNOddNumbers);
}

echo rowSumOddNumbers(93); // 804357


// Nth power rules them all!
echo BR;

function modified_sum(array $a, int $n): int {
  $powArrSum = array_sum(array_map(fn($el) => $el ** $n, $a));
  $initialArraySum = array_sum($a);

  return $powArrSum - $initialArraySum;
}

echo modified_sum([1, 2], 5); // 30

// Convert a linked list to a string

echo BR;