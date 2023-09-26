function rgb(r, g, b) {
    // Ограничиваем значения r, g, b диапазоном от 0 до 255
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // Преобразовываем числа в шестнадцатеричную строку и добавляем нули при необходимости
    return (
        ("0" + r.toString(16)).slice(-2) +
        ("0" + g.toString(16)).slice(-2) +
        ("0" + b.toString(16)).slice(-2)
    ).toUpperCase();
}
