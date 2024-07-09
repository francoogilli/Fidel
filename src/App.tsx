import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#fffbf2] bg-[linear-gradient(to_right,#faeded_1px,transparent_1px),linear-gradient(to_bottom,#faeded_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Header />
      <Hero />
    </>
  );
}

export default App;
