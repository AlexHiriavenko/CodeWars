<?php
require_once '../constants.php';
// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

function arrayFind(array $array, callable $predicate): mixed
{
  foreach($array as $item) {
    if ($predicate($item)) {
      return $item;
    }
  }

  return null;
}

function get_first_python(array $users): string {
  $predicate = fn($user) => $user['language'] === 'Python';
  $pythonUser = arrayFind($users, $predicate);
  if (!$pythonUser) return 'There will be no Python developers';

  return "{$pythonUser['first_name']}, {$pythonUser['country']}";
}

echo get_first_python(USERS); // Victoria, Puerto Rico
echo BR;

// function get_first_python($a) {
//   $key = array_search('Python',array_column($a, 'language'));
  
//   return ($key === false) ? 'There will be no Python developers' : $a[$key]['first_name'].', '.$a[$key]['country'];
// }

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function count_developers($users) {
  $predicate = fn($user) => $user['continent'] === 'Europe' && $user['language'] === 'JavaScript';
  return count(array_filter($users, $predicate));
}

print_r(count_developers(USERS));
echo BR;

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

function greet_developers(array $users): array
{
    $cb = fn(array &$user): string =>
        $user['greeting'] = "Hi {$user['first_name']}, what do you like the most about {$user['language']}?";

    array_walk($users, $cb);

    return $users;
}

print_r(greet_developers(USERS));
echo BR;

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

// function is_ruby_coming($users) {
//   return in_array("Ruby", array_map(fn($user) => $user['language'], $users));
// }

function is_ruby_coming($users) {
  return in_array('Ruby',array_column($users,'language'));
}

echo is_ruby_coming(USERS);