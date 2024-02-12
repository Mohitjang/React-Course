// components:-
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
// import TabButton from "./components/TabButton.jsx";
// import TabButtons from "./components/TabButtons.jsx";

function App() {
  console.log("App component executing");

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
