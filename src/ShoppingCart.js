class ShoppingCart {
  constructor() {
    this.items = []

  }
  addItem(name, quantity, pricePerUnit) {
    this.items.push({ name, quantity, pricePerUnit })
  }

  getItems() {
    return this.items
  }

  clear() {
    return this.items = []
  }

  total() {
    const prices = this.items.map(item => {
      return item.pricePerUnit * item.quantity
    }
    )
    return prices.reduce((acc, curr) => { return acc + curr }, 0)
  }
}

module.exports = ShoppingCart