<?php
  function reverseSeq (int $n): array {
    return range($n, 1);
  };

  print_r(reverseSeq(5));