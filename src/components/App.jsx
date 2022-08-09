import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, el) => acc + el);
  }

  countPositiveFeedbackPercentage() {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(positivePercentage);
  }

  handleFeedbackClick = e => {
    const { nodeName, textContent } = e.target;

    if (nodeName !== 'BUTTON') {
      return;
    }

    this.setState(prevState => {
      return {
        [textContent.toLowerCase()]: prevState[textContent.toLowerCase()] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="Statistics">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedbackClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
