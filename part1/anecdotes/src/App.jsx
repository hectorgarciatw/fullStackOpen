import { useState } from 'react';

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.',
    ];

    //States
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(() => Array(8).fill(0));

    let maxVotes,
        index = 0;

    //Update votes
    const vote = () => {
        const copy = [...points];
        copy[selected] += 1;
        setPoints(copy);
    };

    //Get random Anecdote
    const nextAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    //Update index of max value
    maxVotes = Math.max(...points);
    index = points.findIndex((num) => num === maxVotes);

    return (
        <>
            <h1>Anecdote of the day</h1>
            <div>{anecdotes[selected]}</div>
            <div>has {points[selected]} votes</div>
            <button onClick={vote}>vote</button>
            <button onClick={nextAnecdote}>next anecdote</button>
            <br />
            <br />
            <h1>Anecdote with most votes</h1>
            <div>{anecdotes[index]}</div>
            <div>has {points[index]} votes</div>
        </>
    );
};

export default App;
