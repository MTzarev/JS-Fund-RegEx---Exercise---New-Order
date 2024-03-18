function newOrder(input) {
    let command = input.shift();
    let pattern = /(?<product>[A-Z]+[a-z]*), (?<price>\d+(?:\.\d+)?), (?<qty>\d+)/
    let list = [];
    let totalMoney = 0;
    while (command !== "Final") {
        let matches = pattern.exec(command);
        if (matches !== null) {
            let { product, price, qty } = matches.groups;
            price = Number(price);
            qty = Number(qty);
            list.push(product);
            totalMoney += price * qty;
        }
        command = input.shift();
    }
    console.log(`Bought components:`);
    for (let product of list) {
        console.log(product);
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
newOrder(['Ram, 357.763, 3',
    'CPU, 300, 3',
    'Invalid, 5',
    'Final']);
