import { Notification } from '../Notification/Notification';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return total === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <ul>
      <li>Good : {good}</li>
      <li>Neutral : {neutral}</li>
      <li>Bad : {bad}</li>
      <li>Total : {total}</li>
      <li>Positive feedback : {positivePercentage}%</li>
    </ul>
  );
}
