const inventory = [
      { name: "apples", quantity: 2 },
      { name: "bananas", quantity: 0 },
      { name: "cherries", quantity: 5 },
    ];
    
//     function isCherries(fruit) {
//       return fruit.name === "cherries";
//     }
    const isCherries = inventory.find(f=>f.name.startsWith('cherries'));
    console.log(isCherries);
    
//     console.log(inventory.find(isCherries));