use bookings;
db.dropDatabase();

db.sightings.insertMany([
  {
    name: "Alan",
    email: "plum@gmail.com",
    booked_in: true
  },
  {
    name: "Martin",
    email: "super_love@gmail.com",
    booked_in: false
  },
  {
    name: "Robin",
    email: "I_love_martin@gmail.com",
    booked_in: true
  },
  {
    name: "Paulo",
    email: "oneTrueGod@gmail.com",
    booked_in: false
  },

]);
