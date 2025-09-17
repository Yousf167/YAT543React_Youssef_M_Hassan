import CardsRenderer from "./CardsRenderer";

const Sports = "https://newsdata.io/api/1/latest?apikey=pub_2cd3e14551cf4484bc8470cd49a700d0&language=en&category=sports"
function SportsNews() {
      return ( <CardsRenderer API={Sports} /> );
}

export default SportsNews;