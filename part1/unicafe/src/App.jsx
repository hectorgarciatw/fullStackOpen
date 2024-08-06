import { useState } from 'react';

// Components
import Button from './components/Button';
import StatisticLine from './components/StatisticLine';

const App = () => {
    // Style for buttons
    const buttons = {
        display: 'flex',
    };

    // States
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const total = good + neutral + bad;

    return (
        <>
            <h1>Give feedback</h1>
            <div style={buttons}>
                <Button setValue={setGood} text="good" />
                <Button setValue={setNeutral} text="neutral" />
                <Button setValue={setBad} text="bad" />
            </div>
            <h1>Statistics</h1>
            <table>
                <thead>
                    <tr>
                        <th>Statistic</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={total} />
                    {total !== 0 ? (
                        <>
                            <StatisticLine text="average" value={Math.floor(((good - bad) / total) * 10) / 10} />
                            <StatisticLine text="positive" value={Math.floor((good / total) * 100 * 10) / 10 + '%'} />
                        </>
                    ) : (
                        <tr>
                            <td colSpan="2">No feedback given</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default App;
