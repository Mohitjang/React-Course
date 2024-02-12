import { useState } from "react";
import TabButton from "./TabButton.jsx";
import TabContent from "./TabContent.jsx";
import { EXAMPLES } from "../data.js";
import Section from "../Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContentVal = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContentVal = (
      <div id="tab-content">
        <TabContent {...EXAMPLES[selectedTopic]} />
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {tabContentVal}
      </Tabs>
    </Section>
  );
  {
    /* <menu>
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

      {tabContentVal} */
  }
}
// 2. but with AND operater we only have to use condition and code */}
{
  /* {!selectedTopic && <p>Please select a topic.</p>}
{selectedTopic && (
<div id="tab-content">
  <TabContent {...EXAMPLES[selectedTopic]} />
</div>
)} */
}

{
  /*1. with turnury operater we have to use the null or ELse condiyion in the end */
}
{
  /* {!selectedTopic ? (
<p>Please select a topic.</p>
) : (
<div id="tab-content">
  <TabContent {...EXAMPLES[selectedTopic]} />
</div>
)} */
}

// {/* {selectedTopic ? (
// <div id="tab-content">
// <TabContent {...EXAMPLES[selectedTopic]} />
// </div>
// ) : null}
// }
