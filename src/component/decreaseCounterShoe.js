export const decreaseCounterShoe = (data) => {
    const counterElement = document.getElementById("counterShoe");
    const totalElement = document.getElementById("totalPriceShoe");
  
    // Handle missing elements
    if (!counterElement || !totalElement) {
        console.error("Required elements not found");
        return;
    }
  
    // Parse and retrieve values
    let counterShoe = Number(counterElement.textContent);
    const { price } = data;
  
    // Check if counter is greater than 1
    if (counterShoe > 1) {
        counterShoe --;
        const newTotalPriceShoe = counterShoe * price;
  
        // Update elements with new values
        counterElement.textContent = counterShoe;
        totalElement.textContent = "$ " + newTotalPriceShoe.toFixed(2);
    }
  };
  