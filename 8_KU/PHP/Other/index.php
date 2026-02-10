<?php

// Grasshopper - Terminal game combat function

$br = "<br>";

function combat($health, $damage) {
  return max(0, $health - $damage);
}

echo combat(100, 5) . $br; // 95

// No zeros for heroes

function noBoringZeros(int $n): int
{
    if ($n === 0 || $n % 10 !== 0) {
        return $n;
    }

    return noBoringZeros(intdiv($n, 10));
}

echo noBoringZeros(96000000) . $br; // 96


// Contamination #1 -String-

function contamination(string $text, string $char): string {
  return str_repeat($char, strlen($text));
}


// Sentence Smash

function smash(array $words): string {
  
  // $resStr = array_reduce($words, fn($sentence, $word) => $sentence . ' ' . $word, '');

  $resStr = implode(' ', $words);
  
  return trim($resStr);
}

echo smash(['hello', 'world']); // 'hello world'

// Invert values

echo $br;

function invert(array $a): array {
  return array_map(fn($e) => -$e, $a);
}

print_r(invert([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5] 

// The Wide-Mouthed frog!

function mouth_size($animal) {
  
  switch(strtolower($animal)) {
    case 'alligator':
      return 'small';
    default: 
      return 'wide';
  }    

}

// Holiday VIII - Duty Free
echo $br;

function dutyFree(int $n, int $d, int $h): int {
   $savePerOne = $n * $d /100;
  
   return floor($h / $savePerOne);
}      

echo dutyFree(12, 50, 100); // 16

// Duck Duck Goose

function duck_duck_goose(array $players, int $goose) {
  $index = ($goose - 1) % count($players);
  return $players[$index]['name'];
}

echo $br;

echo duck_duck_goose(
  [["name" => "Andre"], ["name" => "Beatrice"], ["name" => "Christina"], ["name" => "Daniel"]],
   7
); // 'Christina'


// Beginner - Reduce but Grow

echo $br;

function grow(array $a): int {
  return array_product($a);
}

echo grow([1, 2, 3]); // 6


// 

echo $br;