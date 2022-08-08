export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul onClick={onLeaveFeedback}>
      {Object.keys(options).map(el => (
        <li>
          <button type="button">{el[0].toUpperCase() + el.slice(1)}</button>
        </li>
      ))}
    </ul>
  );
}
