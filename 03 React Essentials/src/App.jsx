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
  const [selectedTopic, setSelectedTopic] = useState();
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

  //3. with if else statment:-
  let tabContentVal = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContentVal = (
      <div id="tab-content">
        <TabContent {...EXAMPLES[selectedTopic]} />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* {[<p>Hello</p>, <p>World</p>]}
            {['Hello', 'World']} */}
          <ul>
            {/* now we are using map function to automatically iterate through the array of objects:- */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} { ...conceptItem} />
            ))}
          </ul>
          {/* <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            Because our props name and property name are same we can use it like this:-
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul> */}
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components" && true}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx" && true}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props" && true}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state" && true}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* <p>{content}</p> */}
          {/* <p>{selectedTopic}</p> */}
          {/* 3. with if else statement:-  */}
          {tabContentVal}

          {/*2. but with AND operater we only have to use condition and code */}
          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <TabContent {...EXAMPLES[selectedTopic]} />
            </div>
          )} */}

          {/*1. with turnury operater we have to use the null or ELse condiyion in the end */}
          {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <TabContent {...EXAMPLES[selectedTopic]} />
            </div>
          )} */}

          {/* {selectedTopic ? (
            <div id="tab-content">
            <TabContent {...EXAMPLES[selectedTopic]} />
          </div>
          ) : null} */}
        </section>
      </main>
    </div>
  );
}

export default App;
