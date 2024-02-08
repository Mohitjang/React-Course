// Hooks:-
import { useState } from "react";
// data:-
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

// components:-
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import TabContent from "./components/TabContent.jsx";
import Examples from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  // let content = "click on any button";

  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    // content = selectedButton;
    // console.log(content);
  }

  console.log("App component executing");
  console.log(selectedTopic);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Because our props name and property name are same we can use it like this:- */}
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* <p>{content}</p> */}
          {/* <p>{selectedTopic}</p> */}
          <div id="tab-content">
            <TabContent {...EXAMPLES[selectedTopic]}/>
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
