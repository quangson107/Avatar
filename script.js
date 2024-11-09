
function displaySubscriptionDetails(plan, monthlyPrice, months) {
    const detailsElement = document.getElementById(`${plan}-details`);

    // Hide details of other plans
    document.querySelectorAll(".price-details").forEach((el) => {
        if (el !== detailsElement) el.innerHTML = "";
    });

    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + parseInt(months));

    const discountRates = { 6: 0.93, 12: 0.9 };
    const price = months === 1 
        ? monthlyPrice 
        : Math.round(monthlyPrice * months * (discountRates[months] || 1));

    const currentMonth = startDate.getMonth() + 1;
    const currentYear = startDate.getFullYear();

    detailsElement.innerHTML = `
        <p><strong>Phí tháng ${currentMonth}/${currentYear}:</strong> ${price.toLocaleString()} VND</p>
        <p><strong>Thời gian sử dụng:</strong> ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}</p>
    `;
}
