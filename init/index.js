const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");




main()
  .then(() =>{
      console.log("connection to DB");
   })
   .catch((err) =>{
       console.log(err);
   });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

// const initDB = async () => {
//     await Listing.deleteMany({});
//     await Listing.insertMany(initData.data);
//     console.log("data was initialized");
// }

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({...obj, owner: '697bab23842ff394326243e3'}));
        await Listing.insertMany(initData.data);
        console.log("data was initialized");
    } catch (err) {
        console.error("Error initializing DB:", err);
    }
};


 initDB();

