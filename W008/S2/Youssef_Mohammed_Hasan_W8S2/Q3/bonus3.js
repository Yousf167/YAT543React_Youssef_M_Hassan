let users = [
      {
            name: "Jane",
            age: 25,
            city: "Los Angeles"
      },
      {
            name: "Mike",
            age: 35,
            city: "Chicago"
      },
      {
            name: "John",
            age: 30,
            city: "New York"
      },
      {
            name: "Emily",
            age: 28,
            city: "San Francisco"
      }
]

function findUser(target, arr) {
      for(let user of arr){
            if(user["name"] == target) return true
      }
      return false
}


console.log(findUser("John", users));
