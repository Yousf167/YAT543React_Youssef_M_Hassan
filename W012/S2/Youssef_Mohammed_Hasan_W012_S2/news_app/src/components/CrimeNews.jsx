import CardsRenderer from "./CardsRenderer";

const Crimes = "https://newsdata.io/api/1/latest?apikey=pub_2cd3e14551cf4484bc8470cd49a700d0&category=crime&language=en"
function CrimeNews() {
      return ( <CardsRenderer API={Crimes} /> );
}

export default CrimeNews;