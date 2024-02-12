// we can do this way using props as an object:-
// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
// );
//   }

// in this way:- we are using props with object destrcturing:-
export default function CoreConcept({ title, image, description }) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  