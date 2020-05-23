import React, { useState, useCallback } from "react";

import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function Parent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(20000);

  const incrementAge = useCallback(() => setAge(age + 1), [age]);
  const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary]);

  return (
    <div>
      <Title />
      <Count count={age} text="Age" />
      <Button handleClick={incrementAge}> Increment Age</Button>
      <Count count={salary} text="Salary" />
      <Button handleClick={incrementSalary}> Increment Salary </Button>
    </div>
  );
}

export default Parent;
