// Receive a prop to change the button's text
// Lifting State Up
export default function Button(
  { text, onClick } /* this is a prop, i guess */
) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}
