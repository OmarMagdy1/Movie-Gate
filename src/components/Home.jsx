import Header from "./Header";
import CardContainer from "./CardContainer";
function Home(props) {
  return (
    <>
      <Header />
      <CardContainer
        filterCategory={props.filterCategory}
        search={props.search}
      />
    </>
  );
}
export default Home;
