import { useState } from "react";
import TabButton from "../components/TabButton.jsx";

export default function TabButtons() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    // content = selectedButton;  
    // console.log(content);
    
    let tabContentVal = <p>Please select a topic.</p>;
    if (selectedTopic) {
      tabContentVal = (
        <div id="tab-content">
          <TabContent {...EXAMPLES[selectedTopic]} />
        </div>
      );
    }

  }

  return (
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
  );
}
