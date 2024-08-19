import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
// import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Hero />
        <Section />
        {/* <Modal /> */}
      </div>
    </>
  );
}

export default App;
