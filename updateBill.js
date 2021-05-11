conn = new Mongo();
db = conn.getDB("HOTEL");

// Once the order is served, customer and items in the order will be received to api endpoint of update bill
var customer = "John"
var items = ["foodItem1", "drinkItem2"]

var customerObject = db.customers.findOne({ name: customer })
var customerId = customerObject._id

var billAmount = 0;
for (i = 0; i < items.length; i++) {
    var itemObject = db.menu.findOne({ item: items[i] })
    billAmount += itemObject.price;
  }

  db.billing.update( { customer: customerId },{ $inc: { finalAmount: billAmount }});
