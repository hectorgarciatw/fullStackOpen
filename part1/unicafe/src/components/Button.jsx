const Button = ({ setValue, text }) => {
    const updateValue = () => {
        setValue((prevValue) => prevValue + 1);
    };

    return (
        <div>
            <button onClick={updateValue}>{text}</button>
        </div>
    );
};

export default Button;
