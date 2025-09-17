import CardsRenderer from "./CardsRenderer";

const Ent = "https://newsdata.io/api/1/latest?apikey=pub_2cd3e14551cf4484bc8470cd49a700d0&language=en&category=entertainment"
function EntertainmentNews() {
      return ( <CardsRenderer API={Ent} /> )
}

export default EntertainmentNews;