import Banner from "./Banner";
import New from "./New";
import Recommend from "./Recommend";
import TopSeller from "./TopSeller";

const home = () => {
  return (
    <>
      <Banner />
      <TopSeller />
      <Recommend />
      <New />
    </>
  );
};

export default home;
