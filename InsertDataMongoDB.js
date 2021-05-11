conn = new Mongo();
db = conn.getDB("HOTEL");
db.dropDatabase();

db = conn.getDB("HOTEL");
db.createCollection("customers");
db.customers.insertMany([
  {
    name: "John",
    address: "abc",
  },
  {
    name: "Bob",
    address: "xyz",
  },
  {
    name: "Markus",
    address: "a1b2c3",
  },
  {
    name: "Julia",
    address: "123",
  },
  {
    name: "Jinny",
    address: "456",
  },
]);

var customer1 = db.customers.findOne({ name: "John" });
var customerId1 = customer1._id;
var customer2 = db.customers.findOne({ name: "Bob" });
var customerId2 = customer2._id;
var customer3 = db.customers.findOne({ name: "Markus" });
var customerId3 = customer3._id;
var customer4 = db.customers.findOne({ name: "Julia" });
var customerId4 = customer4._id;
var customer5 = db.customers.findOne({ name: "Jinny" });
var customerId5 = customer5._id;

db.createCollection("rooms");
db.rooms.insertMany([
  {
    number: 101,
    price: 800,
    category: "Deluxe",
    features: ["City View"],
    occupant: customerId1,
    status: "occupied",
    bookings: [
      {
        startDate: "20-05-2021",
        endDate: "25-05-2021",
        customerId: customerId1,
      },
      {
        startDate: "27-05-2021",
        endDate: "02-06-2021",
        customerId: customerId2,
      },
    ],
  },
  {
    number: 102,
    price: 600,
    category: "Premium",
    features: ["Ocean View"],
    occupant: customerId2,
    status: "occupied",
    bookings: [
      {
        startDate: "22-05-2021",
        endDate: "27-05-2021",
        customerId: customerId1,
      },
    ],
  },
  {
    number: 103,
    price: 600,
    category: "Premium",
    features: ["Ocean View"],
    occupant: "",
    status: "vacant",
    bookings: [{}],
  },
  {
    number: 104,
    price: 1000,
    category: "Delux Plus",
    features: ["Ocean View"],
    occupant: customerId3,
    status: "occupied",
    bookings: [
      {
        startDate: "25-05-2021",
        endDate: "29-05-2021",
        customerId: customerId3,
      },
    ],
  },
  {
    number: 105,
    price: 800,
    category: "Delux",
    features: ["Ocean View"],
    occupant: "",
    status: "vacant",
    bookings: [{}],
  },
  {
    number: 106,
    price: 1500,
    category: "Super Delux",
    features: ["Ocean View", "City View"],
    occupant: customerId4,
    status: "occupied",
    bookings: [
      {
        startDate: "01-06-2021",
        endDate: "05-06-2021",
        customerId: customerId4,
      },
    ],
  },
  {
    number: 107,
    price: 600,
    category: "Premium",
    features: ["Ocean View"],
    occupant: "",
    status: "vacant",
    bookings: [{}],
  },
  {
    number: 108,
    price: 600,
    category: "Premium",
    features: ["City View"],
    occupant: customerId5,
    status: "occupied",
    bookings: [
      {
        startDate: "28-05-2021",
        endDate: "30-05-2021",
        customerId: customerId5,
      },
    ],
  },
]);

var room1 = db.rooms.findOne({ number: 101 });
var roomId1 = room1._id;
var room2 = db.rooms.findOne({ number: 102 });
var roomId2 = room2._id;
var room3 = db.rooms.findOne({ number: 103 });
var roomId3 = room3._id;
var room4 = db.rooms.findOne({ number: 104 });
var roomId4 = room4._id;
var room5 = db.rooms.findOne({ number: 105 });
var roomId5 = room5._id;
var room6 = db.rooms.findOne({ number: 106 });
var roomId6 = room6._id;
var room7 = db.rooms.findOne({ number: 107 });
var roomId7 = room7._id;
var room8 = db.rooms.findOne({ number: 108 });
var roomId8 = room8._id;

db.createCollection("services");
db.services.insertMany([
  {
    name: "cleaning",
    price: 0,
  },
  {
    name: "bedsheet",
    price: 0,
  },
  {
    name: "creche",
    price: 20,
  },
]);

var service1 = db.services.findOne({ name: "cleaning" });
var serviceId1 = service1._id;
var service2 = db.services.findOne({ name: "bedsheet" });
var serviceId2 = service2._id;

db.createCollection("staff");
db.staff.insertMany([
  {
    name: "Alex",
    type: "chef",
    status: "free",
  },
  {
    name: "Sam",
    type: "server",
    status: "assigned",
  },
  {
    name: "Tina",
    type: "guide",
    status: "free",
  },
  {
    name: "Julian",
    type: "manager",
    status: "free",
  },
  {
    name: "Kim",
    type: "cleaning",
    status: "free",
  },
]);

var staff1 = db.staff.findOne({ name: "Alex" });
var staffId1 = staff1._id;
var staff2 = db.staff.findOne({ name: "Sam" });
var staffId2 = staff2._id;
var staff3 = db.staff.findOne({ name: "Julian" });
var staffId3 = staff3._id;
var staff4 = db.staff.findOne({ name: "Kim" });
var staffId4 = staff4._id;

db.createCollection("tasks");
db.tasks.insertMany([
  {
    type: "luggage",
    staff: staffId1,
    customer: customerId1,
    status: "completed",
    feedback: "abc",
  },
  {
    type: "room service",
    staff: staffId2,
    customer: customerId2,
    status: "pending",
    feedback: "",
  },
]);

db.createCollection("menu");
db.menu.insertMany([
  {
    item: "foodItem1",
    description: "abc",
    price: 50
  },
  {
    item: "foodItem2",
    description: "xyz",
    price: 65
  },
  {
    item: "drinkItem1",
    description: "abc",
    price: 15
  },
  {
    item: "drinkItem2",
    description: "xyz",
    price: 20
  },

  {
    item: "dessertItem1",
    description: "abc",
    price: 15
  },
  {
    item: "dessertItem2",
    description: "xyz",
    price: 10
  }
]
);

db.createCollection("itemDetails");
db.itemDetails.insertMany([
  {
    item: "foodItem1",
    details: {
      ingredients: ["ingredient1", "ingredient2"],
      preparation: "Prepared using xyz",
      nutrional_rating: 4
    }
  } 
]
);

var food1 = db.menu.findOne({ item: "foodItem1" });
var foodId1 = food1._id;
var food2 = db.menu.findOne({ item: "foodItem2" });
var foodId2 = food2._id;

var drink1 = db.menu.findOne({ item: "drinkItem1" });
var drinkId1 = drink1._id;
var drink2 = db.menu.findOne({ item: "drinkItem2" });
var drinkId2 = drink2._id;

var dessert1 = db.menu.findOne({ item: "dessertItem1" });
var dessertId1 = dessert1._id;
var dessert2 = db.menu.findOne({ item: "dessertItem2" });
var dessertId2 = dessert2._id;

db.createCollection("serviceLocations");
db.serviceLocations.insertMany([
  {
    name: "pool",
    serviceCharge: "5",
  },
  {
    name: "lobby",
    serviceCharge: "5",
  },
  {
    name: "room",
    price: "0",
  },
]);

var serviceLocation1 = db.serviceLocations.findOne({ name: "pool" });
var serviceLocationId1 = serviceLocation1._id;
var serviceLocation2 = db.serviceLocations.findOne({ name: "lobby" });
var serviceLocationId2 = serviceLocation2._id;
var serviceLocation3 = db.serviceLocations.findOne({ name: "room" });
var serviceLocationId3 = serviceLocation3._id;

db.createCollection("orders");
db.orders.insertMany([
  {
    _id: 1,
    customer: customerId2,
    assigned: staffId1,
    Items: [foodId1, drinkId2, dessertId2],
    serviceLocation: serviceLocationId2,
    status: "complete",
  },
  {
    _id: 2,
    customer: customerId1,
    assigned: staffId2,
    Items: [foodId2, drinkId2, dessertId1],
    serviceLocation: serviceLocationId1,
    status: "pending",
  },
]);

db.createCollection("chatBot");
db.chatBot.insertMany([
  { "answer" : "Go to main menu and select services for placing an order"},
  { "answer" : "Go to main menu and select activities for booking an activity"}
//   { "_id" : 100, "sku" : "order123", "description" : "Single line description." },
// { "_id" : 101, "sku" : "abc789", "description" : "First line\nSecond line" },
// { "_id" : 102, "sku" : "xyz456", "description" : "Many spaces before     line" },
// { "_id" : 103, "sku" : "xyz789", "description" : "Multiple\nline description" }
]);

db.createCollection("activities");
db.activities.insertMany([
  {
    name: "cycling",
    price: "100",
    guide: [staffId3],
    type: ["outdoor", "family"],
    description: "abc",
    reviews: ["review1", "review2"],
    bookings: {
      date: "14-06-2021",
      time: "15:00-18:00",
      maxSize: 10,
      bookings: [customerId2],
    },
  },
  {
    name: "pottery",
    price: "200",
    guide: [staffId4],
    type: ["indoor", "couple"],
    description: "xyz",
    reviews: ["review1", "review2"],
    bookings: {
      date: "15-06-2021",
      time: "09:00-12:00",
      maxSize: 5,
      bookings: [customerId2],
    },
  },
]);

var activity1 = db.activities.findOne({ name: "cycling" });
var activitiesId1 = activity1._id;
var activity2 = db.activities.findOne({ name: "pottery" });
var activityId2 = activity2._id;

db.createCollection("regroupLocations");
db.regroupLocations.insertMany([
  {
    name: "Hallowed Church",
    activity: [activitiesId1],
    location: {
      lat: 15.2222,
      lng: 50.3333,
    },
  },
]);

var regroupLandmark1 = db.activities.findOne({ name: "Hallowed Church" });
var regroupLandmarkID1 = regroupLandmark1;

db.createCollection("currentLocation");
db.currentLocation.insertMany([
  {
    person: customerId1,
    location: {
      lat: -72.7738706,
      lng: 41.6332836,
    },
  },
  {
    person: staffId4,
    location: {
      lat: 15.2222,
      lng: 50.3333,
    },
  },
]);

db.createCollection("interests");
db.interests.insertMany([
  {
    name: "shopping",
  },
  {
    name: "photography",
  },
]);

db.createCollection("placesOfInterest");
db.placesOfInterest.insertMany([
  {
    name: "place1",
    location: {
      lat: -72.7738706,
      lng: 41.6332836,
    },
  },
  {
    name: "place2",
    location: {
      lat: 15.2222,
      lng: 50.3333,
    },
  },
]);

db.createCollection("accessControl");
db.accessControl.insertMany([
  {
    room: roomId1,
    QRCode: "path/to/image",
    pin: 1234,
  },
  {
    room: roomId2,
    QRCode: "path/to/image",
    pin: 5678,
  },
  {
    room: roomId4,
    QRCode: "path/to/image",
    pin: 9123,
  },
  {
    room: roomId6,
    QRCode: "path/to/image",
    pin: 1209,
  },
  {
    room: roomId8,
    QRCode: "path/to/image",
    pin: 1208,
  },
]);

db.createCollection("roomChangeReasons");
db.roomChangeReasons.insertOne({
  reasons: ["Not as per expectations", "Want a city view"],
});

db.createCollection("roomsForCleaning");
db.roomsForCleaning.insertOne(
  {
    rooms: [roomId1, roomId2]
  }
);

db.createCollection("cleaningPlan");
db.roomsForCleaning.insertMany([
  {
    staff: staffId1,
    plan: {
      room: roomId1,
      time: 9
    }
  },
  {
    staff: staffId2,
    plan: {
      room: roomId2,
      time: 10
    }
  }
]
);

db.createCollection("serviceBookings");
db.serviceBookings.insertMany([
  {
    customer: customerId2,
    assigned: staffId1,
    service: serviceId1,
    status: "complete",
  },
  {
    customer: customerId1,
    assigned: staffId2,
    Items: [foodId2, drinkId2, dessertId1],
    serviceLocation: serviceLocationId1,
    status: "pending",
  },
]);

db.createCollection("billing");
db.billing.insertMany([
  {
    customer: customerId1,
    finalAmount: 500
  },
  {
    customer: customerId2,
    finalAmount: 800
  },
]);
