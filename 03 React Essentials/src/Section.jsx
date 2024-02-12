export default function Section({ children, title, ...props}) {
  return (
    <section id={props.id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
