//Components
import Header from './Header';
import Part from './Part';
import Content from './Content';
import Statistics from './Statistics';

const Course = ({ course }) => {
    const { id, name, parts } = course;
    let totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <>
            <Header name={name} />
            <Content parts={parts} />
            <Statistics total={totalExercises} />
        </>
    );
};

export default Course;
