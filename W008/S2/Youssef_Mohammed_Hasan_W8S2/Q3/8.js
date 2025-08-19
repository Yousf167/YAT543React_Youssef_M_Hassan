function obj2Arr(obj) {
      let result = [];

      for (let key in obj) {
            let value = obj[key];
            if(typeof value === "object" && value !== null) {
                  result.push([key, obj2Arr(value)]);
            }
            else{
                  result.push([key, value]);
            }
      }
      return result;
}


let obj = {
      name: "sdfs",
      age: 12,
      id: 32,
      obj2: {
            ds: 20,
            as: 54,
            fb: 632,
            obj3:{
                  er: 12,
                  tf: 53,
                  ve: 43,
                  obj4:{
                        tg: 20,
                        gt: 16,
                        hg: 45
                  }
            }
      }
}

let arr = obj2Arr(obj)
console.log(JSON.stringify(obj2Arr(obj)));
