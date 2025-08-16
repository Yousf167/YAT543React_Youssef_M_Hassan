function areAnagrams(s1, s2) {
      let map1 = new Map()
      let map2 = new Map()
      for(let i of s1) map1.set(i, (map1.get(i) || 0) + 1)
      for(let i of s2) map2.set(i, (map2.get(i) || 0) + 1)
      if(map1.size != map2.size) return false
      for(let [key, val] of map1){
            if(val != map2.get(key)) return false;
      }
      return true
      
}

s1 = "silent"
s2 = "listen"
console.log(areAnagrams(s1, s2))
