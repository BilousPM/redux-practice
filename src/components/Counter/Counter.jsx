const Counter = () => {
  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleResetClick = () => {};
  const handleChangeStep = () => {};
  return (
    <div>
      <div>
        <h1>{1}</h1>
        <input onChange={handleChangeStep} />
        <div>
          <button on onClick={handleMinusClick}>
            minus
          </button>
          <button on onClick={handleResetClick}>
            reset
          </button>
          <button on onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
