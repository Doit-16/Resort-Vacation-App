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
]);

var customer1 = db.customers.findOne({ name: "John" });
var customerId1 = customer1._id;
var customer2 = db.customers.findOne({ name: "Bob" });
var customerId2 = customer2._id;

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
        customerId: customerId1
      },
      {
        startDate: "27-05-2021",
        endDate: "02-06-2021",
        customerId: customerId2
      }
    ]
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
        customerId: customerId1
      }
    ]
  },
  {
    number: 103,
    price: 600,
    category: "Premium",
    features: ["Ocean View"],
    occupant: "",
    status: "vacant",
    bookings: [
      {
        startDate: "22-05-2021",
        endDate: "27-05-2021",
        customerId: customerId1
      }
    ]
  },
]);

var room1 = db.rooms.findOne({ number: 101 });
var roomId1 = room1._id;
var room2 = db.rooms.findOne({ number: 102 });
var roomId2 = room2._id;

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
    status: "free",
  },
  {
    name: "Sam",
    status: "assigned",
  },
  {
    name: "Tina",
    status: "free",
  },
  {
    name: "Julian",
    status: "free",
  },
  {
    name: "Kim",
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
    feedback: "abc"
  },
  {
    type: "room service",
    staff: staffId2,
    customer: customerId2,  
    status: "pending",
    feedback: ""
  }
]);


db.createCollection("food");
db.food.insertMany([
  {
    name: "food1",
    price: "50",
  },
  {
    name: "food2",
    price: "65",
  },
  {
    name: "food3",
    price: "40",
  },
]);

var food1 = db.food.findOne({ name: "food1" });
var foodId1 = food1._id;
var food2 = db.food.findOne({ name: "food2" });
var foodId2 = food2._id;

db.createCollection("drinks");
db.drinks.insertMany([
  {
    name: "drink1",
    price: "15",
  },
  {
    name: "drink2",
    price: "20",
  },
  {
    name: "drink3",
    price: "25",
  },
]);

var drink1 = db.drinks.findOne({ name: "drink1" });
var drinkId1 = drink1._id;
var drink2 = db.drinks.findOne({ name: "drink2" });
var drinkId2 = drink2._id;

db.createCollection("desserts");
db.desserts.insertMany([
  {
    name: "dessert1",
    price: "15",
  },
  {
    name: "dessert2",
    price: "10",
  },
  {
    name: "dessert3",
    price: "20",
  },
]);

var dessert1 = db.desserts.findOne({ name: "dessert1" });
var dessertId1 = dessert1._id;
var dessert2 = db.desserts.findOne({ name: "dessert2" });
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

db.createCollection("orderStatus");
db.orderStatus.insertMany([
  {
    customer: customerId2,
    assigned: staffId1,
    Items: [foodId1, drinkId2, dessertId2],
    serviceLocation: serviceLocationId2,
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

db.createCollection("chatBot");
db.chatBot.insertOne({
  Question1: "Reply1",
  Question2: "Reply2",
  Question3: "Reply3",
});

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
      time:"15:00-18:00",
      maxSize:10,
      bookings: [customerId2]
    }
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
      time:"09:00-12:00",
      maxSize:5,
      bookings: [customerId2]
    }

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
    location:
    {
      lat: 15.2222,
      lng: 50.3333
    }
  },
]);

var regroupLandmark1 = db.activities.findOne({ name: "Hallowed Church" });
var regroupLandmarkID1 = regroupLandmark1;

db.createCollection("currentLocation");
db.currentLocation.insertMany([
  {
    person: customerId1,
    location:
    {
      lat: -72.7738706,
      lng: 41.6332836
    }
  },
  {
    person: staffId4,
    location:
    {
      lat: 15.2222,
      lng: 50.3333
    }
  },
]);

db.createCollection("interests");
db.interests.insertMany([
  {
    name: "shopping"
  },
  {
    name: "photography"
  }
]);

db.createCollection("placesOfInterest");
db.placesOfInterest.insertMany([
  {
    name: "place1",
    location:
    {
      lat: -72.7738706,
      lng: 41.6332836
    }
  },
  {
    name: "place2",
    location:
    {
      lat: 15.2222,
      lng: 50.3333
    }
  },
]);

db.createCollection("accessControl");
db.accessControl.insertMany([
  {
    room: roomId1,
    QRCode: "path/to/image",
    pin: 1234
  },
  {
    room: roomId2,
    QRCode: "path/to/image",
    pin:5678
  }
]);

db.createCollection("roomChangeReasons");
db.roomChangeReasons.insertOne(
  {
    reasons: ["reason1", "reason2", "reason3"]
  }
);

db.createCollection("roomsForCleaning");
db.roomsForCleaning.insertOne(
  {
    rooms: [roomId1, roomId2]
  }
);


