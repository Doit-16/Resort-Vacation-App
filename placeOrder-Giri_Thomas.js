conn = new Mongo();
db = conn.getDB("HOTEL");

// Ids of customer, items, serviceLocation will be recived at the api endpoint for order placement
var customer = "John"
var items = ["foodItem1", "drinkItem2"]
var serviceLocation = "pool"

var customerObject = db.customers.findOne({ name: customer })
var customerId = customerObject._id

var itemsId = []
for (i = 0; i < items.length; i++) {
    var itemObject = db.menu.findOne({ item: items[i] })
    itemsId[i] = itemObject._id
  }

var serviceLocationObject = db.serviceLocations.findOne({ name: serviceLocation })
var serviceLocationId = serviceLocationObject._id

// staff who is a "chef" status is "free" is assigned for the order. After preparation a server will be assigned
var staffObject = db.staff.findOne( { type: "chef", status: "free" } )
var staffId = staffObject._id

var orderCount =  db.orders.count();
db.orders.insertOne(
  {
    _id: orderCount + 1,
    customer: customerId,
    assigned: staffId,
    Items: itemsId,
    serviceLocation: serviceLocationId,
    status: "pending"
  }
)
