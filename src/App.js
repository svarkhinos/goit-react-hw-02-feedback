import { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

let total = 0;
let positiveFeedback = 0;
let positivePercentage;

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    total += 1;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    positivePercentage = Math.round((positiveFeedback / total) * 100);
    return positivePercentage;
  };

  onLeaveFeedback = index => {
    this.countTotalFeedback();
    if (index === 0) {
      positiveFeedback += 1;
    }

    this.countPositiveFeedbackPercentage();
    return this.setState(prevState => {
      const value = Object.keys(prevState)[index];
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        Homework-2
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
