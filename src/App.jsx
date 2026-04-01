import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import Tools from "./components/Tools";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

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
      <Process />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
