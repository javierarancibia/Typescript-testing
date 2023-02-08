import React, {FC, Fragment, useState, ChangeEvent } from 'react';

interface Props {
  name?: string;
  age?: number;
  email: string;
}

export const Person: FC<Props> = ({ name, age, email }) => {
  const [ country, setCountry ] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  return (
    <Fragment>
      <h1>{name}</h1>
      {age && <h1>{age}</h1>}
      <h1>{email}</h1>
      <input placeholder="Country" onChange={handleChange} />

      <p>{ country } </p>
    </Fragment>
  );
};

