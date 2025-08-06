// Calculate tax using progressive brackets
function calculateTax(income) {
    let tax = 0;

    if (income <= 10000) {
        tax = income * 0.05;
    } else if (income <= 20000) {
        tax = 10000 * 0.05 + (income - 10000) * 0.10;
    } else {
        tax = 10000 * 0.05 + 10000 * 0.10 + (income - 20000) * 0.15;
    }

    return tax;
}