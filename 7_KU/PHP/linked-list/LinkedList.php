<?php

/**
 * Узел связного списка
 */
class Node
{
    public mixed $data;
    public ?Node $next;

    public function __construct(mixed $data)
    {
        $this->data = $data;
        $this->next = null;
    }
}

/**
 * Односвязный список
 */
class LinkedList
{
    private ?Node $head;
    private int $size;

    public function __construct()
    {
        $this->head = null;
        $this->size = 0;
    }

    // ----------------------------------------------------------------
    // Базовые операции
    // ----------------------------------------------------------------

    /**
     * Добавить узел в конец списка
     */
    public function push(mixed $data): void
    {
        $newNode = new Node($data);

        if ($this->head === null) {
            $this->head = $newNode;
        } else {
            $current = $this->head;
            while ($current->next !== null) {
                $current = $current->next;
            }
            $current->next = $newNode;
        }

        $this->size++;
    }

    /**
     * Добавить узел в начало списка
     */
    public function prepend(mixed $data): void
    {
        $newNode = new Node($data);
        $newNode->next = $this->head;
        $this->head = $newNode;
        $this->size++;
    }

    // ----------------------------------------------------------------
    // Вставка
    // ----------------------------------------------------------------

    /**
     * Вставить узел после узла с указанным значением
     *
     * @throws RuntimeException если узел с таким значением не найден
     */
    public function insertAfterValue(mixed $targetValue, mixed $data): void
    {
        $target = $this->findNode($targetValue);

        if ($target === null) {
            throw new RuntimeException("Узел со значением «{$targetValue}» не найден.");
        }

        $newNode       = new Node($data);
        $newNode->next = $target->next;
        $target->next  = $newNode;
        $this->size++;
    }

    /**
     * Вставить узел перед узлом с указанным значением
     *
     * @throws RuntimeException если узел с таким значением не найден
     */
    public function insertBeforeValue(mixed $targetValue, mixed $data): void
    {
        if ($this->head === null) {
            throw new RuntimeException('Список пуст.');
        }

        // Целевой узел — голова
        if ($this->head->data === $targetValue) {
            $this->prepend($data);
            return;
        }

        $current = $this->head;
        while ($current->next !== null && $current->next->data !== $targetValue) {
            $current = $current->next;
        }

        if ($current->next === null) {
            throw new RuntimeException("Узел со значением «{$targetValue}» не найден.");
        }

        $newNode       = new Node($data);
        $newNode->next = $current->next;
        $current->next = $newNode;
        $this->size++;
    }

    /**
     * Вставить узел по индексу (0 = начало)
     *
     * @throws OutOfRangeException если индекс выходит за пределы списка
     */
    public function insertAtIndex(int $index, mixed $data): void
    {
        if ($index < 0 || $index > $this->size) {
            throw new OutOfRangeException("Индекс {$index} выходит за пределы списка (размер: {$this->size}).");
        }

        if ($index === 0) {
            $this->prepend($data);
            return;
        }

        $current = $this->head;
        for ($i = 0; $i < $index - 1; $i++) {
            $current = $current->next;
        }

        $newNode       = new Node($data);
        $newNode->next = $current->next;
        $current->next = $newNode;
        $this->size++;
    }

    // ----------------------------------------------------------------
    // Удаление (без возврата значения)
    // ----------------------------------------------------------------

    /**
     * Удалить первый найденный узел с указанным значением
     *
     * @throws RuntimeException если узел не найден
     */
    public function deleteByValue(mixed $value): void
    {
        $this->removeNode($value, false);
    }

    /**
     * Удалить узел по индексу
     *
     * @throws OutOfRangeException если индекс выходит за пределы списка
     */
    public function deleteAtIndex(int $index): void
    {
        $this->cutAtIndex($index); // просто игнорируем возвращённое значение
    }

    // ----------------------------------------------------------------
    // Вырезка (с возвратом значения)
    // ----------------------------------------------------------------

    /**
     * Вырезать первый найденный узел с указанным значением и вернуть его данные
     *
     * @throws RuntimeException если узел не найден
     */
    public function cutByValue(mixed $value): mixed
    {
        return $this->removeNode($value, true);
    }

    /**
     * Вырезать узел по индексу и вернуть его данные
     *
     * @throws OutOfRangeException если индекс выходит за пределы списка
     */
    public function cutAtIndex(int $index): mixed
    {
        if ($this->head === null || $index < 0 || $index >= $this->size) {
            throw new OutOfRangeException("Индекс {$index} выходит за пределы списка (размер: {$this->size}).");
        }

        if ($index === 0) {
            $data       = $this->head->data;
            $this->head = $this->head->next;
            $this->size--;
            return $data;
        }

        $current = $this->head;
        for ($i = 0; $i < $index - 1; $i++) {
            $current = $current->next;
        }

        $data          = $current->next->data;
        $current->next = $current->next->next;
        $this->size--;

        return $data;
    }

    // ----------------------------------------------------------------
    // Поиск и информация
    // ----------------------------------------------------------------

    /**
     * Найти узел по значению, вернуть его или null
     */
    public function findNode(mixed $value): ?Node
    {
        $current = $this->head;
        while ($current !== null) {
            if ($current->data === $value) {
                return $current;
            }
            $current = $current->next;
        }
        return null;
    }

    /**
     * Получить данные узла по индексу
     *
     * @throws OutOfRangeException если индекс выходит за пределы списка
     */
    public function get(int $index): mixed
    {
        if ($index < 0 || $index >= $this->size) {
            throw new OutOfRangeException("Индекс {$index} выходит за пределы списка (размер: {$this->size}).");
        }

        $current = $this->head;
        for ($i = 0; $i < $index; $i++) {
            $current = $current->next;
        }

        return $current->data;
    }

    public function size(): int
    {
        return $this->size;
    }

    public function isEmpty(): bool
    {
        return $this->size === 0;
    }

    // ----------------------------------------------------------------
    // Вывод
    // ----------------------------------------------------------------

    /**
     * Преобразовать список в массив
     */
    public function toArray(): array
    {
        $result  = [];
        $current = $this->head;
        while ($current !== null) {
            $result[] = $current->data;
            $current  = $current->next;
        }
        return $result;
    }

    /**
     * Строковое представление: [1] -> [2] -> [3] -> null
     */
    public function __toString(): string
    {
        $parts   = [];
        $current = $this->head;
        while ($current !== null) {
            $parts[] = '[' . (is_array($current->data) ? json_encode($current->data) : $current->data) . ']';
            $current = $current->next;
        }
        return ($parts ? implode(' -> ', $parts) : '(пусто)') . ' -> null';
    }

    // ----------------------------------------------------------------
    // Приватные вспомогательные методы
    // ----------------------------------------------------------------

    /**
     * Внутренний метод: удалить/вырезать узел по значению.
     * Если $returnData = true — возвращает данные удалённого узла.
     */
    private function removeNode(mixed $value, bool $returnData): mixed
    {
        if ($this->head === null) {
            throw new RuntimeException('Список пуст.');
        }

        if ($this->head->data === $value) {
            $data       = $this->head->data;
            $this->head = $this->head->next;
            $this->size--;
            return $returnData ? $data : null;
        }

        $current = $this->head;
        while ($current->next !== null && $current->next->data !== $value) {
            $current = $current->next;
        }

        if ($current->next === null) {
            throw new RuntimeException("Узел со значением «{$value}» не найден.");
        }

        $data          = $current->next->data;
        $current->next = $current->next->next;
        $this->size--;

        return $returnData ? $data : null;
    }
}


// ====================================================================
// ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ
// ====================================================================

echo "=== 1. Создание списка и push ===\n";

$list = new LinkedList();
$list->push(10);
$list->push(20);
$list->push(30);
$list->push(40);

echo $list . "\n";           // [10] -> [20] -> [30] -> [40] -> null
echo "Размер: {$list->size()}\n\n";


echo "=== 2. Prepend (добавить в начало) ===\n";

$list->prepend(5);
echo $list . "\n\n";         // [5] -> [10] -> [20] -> [30] -> [40] -> null


echo "=== 3. Вставка после указанного значения ===\n";

$list->insertAfterValue(20, 25);
echo $list . "\n\n";         // [5] -> [10] -> [20] -> [25] -> [30] -> [40] -> null


echo "=== 4. Вставка перед указанным значением ===\n";

$list->insertBeforeValue(10, 7);
echo $list . "\n\n";         // [5] -> [7] -> [10] -> [20] -> [25] -> [30] -> [40] -> null


echo "=== 5. Вставка по индексу (index = 3) ===\n";

$list->insertAtIndex(3, 15);
echo $list . "\n\n";         // [5] -> [7] -> [10] -> [15] -> [20] -> [25] -> [30] -> [40] -> null


echo "=== 6. Удаление узла по значению ===\n";

$list->deleteByValue(15);
echo $list . "\n\n";         // [5] -> [7] -> [10] -> [20] -> [25] -> [30] -> [40] -> null


echo "=== 7. Удаление узла по индексу (index = 0, то есть голова) ===\n";

$list->deleteAtIndex(0);
echo $list . "\n\n";         // [7] -> [10] -> [20] -> [25] -> [30] -> [40] -> null


echo "=== 8. Вырезка узла по значению (возвращает значение) ===\n";

$cut = $list->cutByValue(25);
echo "Вырезано: {$cut}\n";
echo $list . "\n\n";         // [7] -> [10] -> [20] -> [30] -> [40] -> null


echo "=== 9. Вырезка узла по индексу (index = 2) ===\n";

$cut = $list->cutAtIndex(2);
echo "Вырезано: {$cut}\n";
echo $list . "\n\n";         // [7] -> [10] -> [30] -> [40] -> null


echo "=== 10. Получение значения по индексу ===\n";

echo "get(0): {$list->get(0)}\n";   // 7
echo "get(2): {$list->get(2)}\n\n"; // 30


echo "=== 11. Поиск узла ===\n";

$node = $list->findNode(10);
echo "Найден узел: {$node->data}\n\n";


echo "=== 12. toArray ===\n";

print_r($list->toArray());