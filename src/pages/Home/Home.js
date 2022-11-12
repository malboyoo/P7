import Banner from "./Banner/Banner.js";
import Housing from "./Housing/Housing.js";

function Home() {
  return (
    <div className="flex-fill">
      <Banner />
      <Housing />
    </div>
  );
}

export default Home;
