import CardsRenderer from "./CardsRenderer";

const Politics = "https://newsdata.io/api/1/latest?apikey=pub_2cd3e14551cf4484bc8470cd49a700d0&language=en&category=politics"
function PoliticalNews() {
      return ( <CardsRenderer API={Politics} /> );
}

export default PoliticalNews;