import CardsRenderer from "./CardsRenderer";

const Tech = "https://newsdata.io/api/1/latest?apikey=pub_2cd3e14551cf4484bc8470cd49a700d0&language=en&category=technology"
function TechNews() {
      return ( <CardsRenderer API={Tech} /> )
}

export default TechNews;