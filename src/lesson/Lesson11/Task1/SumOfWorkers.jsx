import React from 'react';

const SumOfWorkers = ({ workers }) => {
  const getSumOfAll = () => {
    const result = workers.reduce((previousValue, currentValue) => {
      return previousValue += currentValue.dayOfWorked.value * currentValue.payRate.value;
    }, 0);

    return result;
  };

  return (
    <div>
      <p> Total sum - {getSumOfAll()}</p>
    </div>
  );
};

export default SumOfWorkers;
