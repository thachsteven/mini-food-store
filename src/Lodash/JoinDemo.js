import React from 'react';
import _ from 'lodash';
export default function JoinDemo() {
  let arr = ['Hòa', 'Minh', 'Nam'];
  let arrPerson = [
    { id: 1, name: 'Hòa' },
    { id: 2, name: 'Minh' },
    { id: 3, name: 'Nam' },
  ];

  //es6
  const result = arr.join('-');

  //lodash
  const resultLodash = _.join(arr, '*');

  const person = _.find(arrPerson, (item) => item.id === 2);

  return (
    <div>
      {result}
      {resultLodash}
      <br />
      {person.name}
      <br />
      {person.id}
    </div>
  );
}
