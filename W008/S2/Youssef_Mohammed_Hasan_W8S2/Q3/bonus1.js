//Assuming correct input; so no "Date12.create(13, 5423,323, "pm")". In other words, no impossible dates are given
const Date12 = {
      h: null,
      m: null,
      s: null,
      meridean: null,
      create : function(H,M,S,Meridean){
            ret = new Object()
            if(Number.isNaN(H) || Number.isNaN(M) || Number.isNaN(S) || !["pm", "am"].includes(Meridean))
                  throw new Error(`Wrong Args: ${H} ${M} ${S} ${Meridean}`);
                  
            ret["h"] = H
            ret["m"] = M
            ret["s"] = S
            ret["meridean"] = Meridean
            return ret
      }
}

const Date24 = {
      h: null,
      m: null,
      s: null,
      create : function(H,M,S){
            ret = new Object()
            if(Number.isNaN(H) || Number.isNaN(M) || Number.isNaN(S))
                  throw new Error(`Wrong Args: ${H} ${M} ${S}`);
                  
            ret["h"] = H
            ret["m"] = M
            ret["s"] = S
            return ret
      },
}


function convertTo24(date12) {
      if(!(date12.hasOwnProperty("h") || date12.hasOwnProperty("m") || date12.hasOwnProperty("s") || date12.hasOwnProperty("meridean")))
            throw new Error(`Wrong Object: ${date12}`);
      return Date24.create(((date12["h"] + (date12["meridean"] == "pm" ? 12 : 0)) % 24), date12["m"], date12["s"])
}


const date12Format = Date12.create(1,40,12,"pm");
const date24Format = convertTo24(date12Format);
console.log(date24Format)