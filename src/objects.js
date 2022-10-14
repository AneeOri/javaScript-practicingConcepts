console.clear();

var mAndrea = {
  name: "Andrea",
  manucaturer: {
    name: "honoluluPs",
    location: "Hawai"
  },
  age: 80,
  color: "white",
  spoilers: false,
  applyJobs: function () {
    setTimeout(function () {
      console.log("Im here");
    }, 5000);
  }
};

//console.log(mAndrea.applyJobs());
console.log(mAndrea.manucaturer.location);

var mFriends = ["luz", "andrea", "luis", "javier", "diaz"];
console.log(mFriends);
console.log(mFriends[0]);
//add more items
mFriends[mFriends.length - 1] = "jose";
mFriends.push("irina");
mFriends.pop();

mFriends.splice(3, 0, "Diana", "Raymond");
//1rst tells where to start
//2nd tells how many times to be declared
//3rd and 4th tells what items to be added
console.log(mFriends);
// use 1 in the second position to remove an item
mFriends.splice(2, 1);
console.log(mFriends);

mFriends.splice(0, 2);
console.log(mFriends);

let my2Friends = mFriends.concat(mFriends);
console.log(my2Friends);

my2Friends.sort();
console.log(my2Friends);

my2Friends.reverse();
console.log(my2Friends);
