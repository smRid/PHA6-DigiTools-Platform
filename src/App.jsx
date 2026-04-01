import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import Tools from "./components/Tools";

// API fetch
const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productsPromise = getData();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Activity />
      <Tools productsPromise={productsPromise} />
    </>
  );
}

export default App;
