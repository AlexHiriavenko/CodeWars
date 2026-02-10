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

class Node {
  public $data, $next;
  public function __construct($data, $next = NULL) {
    $this->data = $data;
    $this->next = $next;
  }
}

function build_one_two_three() {
  return new Node(1, new Node(2, new Node(3)));
}

$linkedList = build_one_two_three();

print_r($linkedList);

echo BR;

function stringify($list): string {
  $arrow = ' -> ';
  $res = "";

  for ($n = $list; $n != null; $n = $n->next) {
    $res .= $n->data . $arrow;
  }

  return $res . 'NULL';
}

echo stringify($linkedList);

// Linked Lists - Get Nth Node;

echo BR;

function get_nth(Node|null $head, int $index) {
  if (!$head) throw new InvalidArgumentException();

  for ($i = 0; $i <= $index; $i +=1) {
    if ($i === $index) {
      return $head->data;
    } else {
      $head = $head->next;
      if (!$head) throw new InvalidArgumentException();
    }   
  }
}

echo get_nth($linkedList, 1); //2

// Linked Lists - Push & BuildOneTwoThree

echo BR;

function push($head, $data) {
 return new Node($data, $head);
}

print_r(push($linkedList, 8));

// Linked Lists - Append

echo BR;

function append($list_a, $list_b) {

  if (!$list_a) return $list_b;
  if (!$list_b) return $list_a;

  $a = $list_a;
  while ($a->next !== null) {
      $a = $a->next;
  }

  $a->next = $list_b; // прицепили B к концу A
  return $list_a;
}

// function append($list_a, $list_b) {
//   if (!$list_a) {
//     return $list_b;
//   }
//   if (!$list_b) {
//     return $list_a;
//   }
//   list($head, $tail) = cloneList($list_a);
//   $tail->next = cloneList($list_b)[0];
//   return $head;
// }

// function cloneList($list) {
//   $head = new Node($list->data, $list->next);
//   $tail = $head;
//   while ($tail->next) {
//     $tail->next = new Node($tail->next->data, $tail->next->next);
//     $tail = $tail->next;
//   }
//   return [$head, $tail];
// }

print_r(append($linkedList, new Node(4, new Node(5, new Node(6)))));