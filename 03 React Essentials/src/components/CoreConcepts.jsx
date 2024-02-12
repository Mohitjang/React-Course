import Section from "../Section.jsx";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}

//     {[<p>Hello</p>, <p>World</p>]}
// {['Hello', 'World']} */}
//     <ul>
//       {/* now we are using map function to automatically iterate through the array of objects:-
//   <CoreConcepts
//     title={CORE_CONCEPTS[0].title}
//     description={CORE_CONCEPTS[0].description}
//     image={CORE_CONCEPTS[0].image}
//   />
//   Because our props name and property name are same we can use it like this:-
//   <CoreConcepts {...CORE_CONCEPTS[1]} />
//   <CoreConcepts {...CORE_CONCEPTS[2]} />
//   <CoreConcepts {...CORE_CONCEPTS[3]} />
// </ul>
