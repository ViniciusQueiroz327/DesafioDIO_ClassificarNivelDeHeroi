// like a box (data structure) which contains groups of data that can be transfered
// JSON --> JavaScript Object Notation --> composed by key and value

//-----------------------------------------------------------------------------------------------------------

//Without JSON:
//  let name = "Vinicius"
//  let age = 21
//  let products = ["Monitor 144hz 1ms", "RTX 4070ti", "2x Memória RAM 16gb DDR5", "SSD 2tb nvme2.0"]
//  let productsValues = [2000, 3500, 700, 390]
//  
//  function generateInvoice(name, products) {
//      return `
//          The buyer is ${name}, and the bought products were: 
//          ${products[0]}, ${products[1]}, ${products[2]}, ${products[3]}.
//      `
//  }
//  
//  console.log(generateInvoice(name, products))

//-----------------------------------------------------------------------------------------------------------

//With JSON:
let invoice = {
    name: 'Vinicius',
    age: 21,
    products: {
        0: ["Monitor 144hz 1ms", 2000],
        1: ["RTX 4070ti", 3500],
        2: ["2x Memória RAM 16gb DDR5", 700],
        3: ["SSD 2tb nvme2.0", 390]
    }
}

function generateInvoice(invoice) {
    // Converting object values into an array:
    const productsArray = Object.values(invoice.products)

    // Mapping products and handling the name and the price:
    const formattedProducts = productsArray.map(product => `${product[0]} (US$${product[1]})`);

    return `
        The buyer's name is ${invoice.name}, and the purchased products were: 
        ${formattedProducts.join(', ')}.
    `
}

console.log(generateInvoice(invoice))
