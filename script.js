
function updatePrice(months) {
    const basicPrice = document.getElementById("basic-price");
    const plusPrice = document.getElementById("plus-price");
    const premiumPrice = document.getElementById("premium-price");

    const prices = {
        1: { basic: 300000, plus: 500000, premium: 2000000 },
        6: { basic: 300000 * 6 * 0.93, plus: 500000 * 6 * 0.93, premium: 2000000 * 6 * 0.93 },
        12: { basic: 300000 * 12 * 0.9, plus: 500000 * 12 * 0.9, premium: 2000000 * 12 * 0.9 },
    };

    basicPrice.textContent = prices[months].basic.toLocaleString() + " VND";
    plusPrice.textContent = prices[months].plus.toLocaleString() + " VND";
    premiumPrice.textContent = prices[months].premium.toLocaleString() + " VND";
}
