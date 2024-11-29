export const increasCounterShoes = (data) => {
    const counterElement = document.getElementById("counterShoe");
    const totalElement = document.getElementById("totalPriceShoe");
  
    // Check for missing elements
    if (!counterElement || !totalElement) {
        console.error("Required elements not found");
        return;
    }
  
    // Retrieve and parse counter and price
    let counterShoe = Number(counterElement.textContent);
    const { price } = data;
  
    // Update counter and calculate new total price
    const newCounterShoe = counterShoe + 1;
    const newTotalPriceShoe = newCounterShoe * price;
  
    // Update the DOM with the new values
    counterElement.textContent = newCounterShoe;
    totalElement.textContent = "$ " + newTotalPriceShoe.toFixed(2);
  };
  
  export default increasCounterShoes;