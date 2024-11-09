
function calculateFee(monthlyFee) {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const remainingDays = daysInMonth - today.getDate();
    
    const dailyFee = monthlyFee / 30;
    const proRatedFee = Math.round(dailyFee * remainingDays);
    
    const fee6Months = Math.round(monthlyFee * 6 * 0.93);
    const fee12Months = Math.round(monthlyFee * 12 * 0.90);

    const resultHtml = `
        <p><strong>Phí lẻ tháng:</strong> ${proRatedFee.toLocaleString()} VND (bắt đầu từ hôm nay)</p>
        <p><strong>Phí trả trước 6 tháng:</strong> ${fee6Months.toLocaleString()} VND</p>
        <p><strong>Phí trả trước 12 tháng:</strong> ${fee12Months.toLocaleString()} VND</p>
        <a href="http://bit.ly/zaloEntrade" class="cta-button">Đăng Ký Ngay</a>
    `;

    if (monthlyFee === 300000) {
        document.getElementById("basic-fee").innerHTML = resultHtml;
    } else if (monthlyFee === 500000) {
        document.getElementById("plus-fee").innerHTML = resultHtml;
    } else if (monthlyFee === 2000000) {
        document.getElementById("premium-fee").innerHTML = resultHtml;
    }
}
