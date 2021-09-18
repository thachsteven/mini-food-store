import React from 'react';
import _ from 'lodash';

export default function LastFirstLodash() {
  const arrStudent = [
    { name: 1, name: 'Peter' },
    { name: 2, name: 'Barry' },
    { name: 3, name: 'Iris' },
  ];

  const firstItem = _.first(arrStudent);
  const lastItem = _.last(arrStudent);
  const arr = [
    ['001', 'Alice'],
    ['002', 'John'],
    ['003', 'Smith'],
  ];
  const [id1, name1] = _.first(arr);
  const [id2, name2] = _.first(arr);
  return (
    <div>
      <div>First Item: {firstItem.name}</div>
      <div>Last Item: {lastItem.name}</div>

      <div>
        {id1} - {name1}
      </div>
      <div>
        {id2} - {name2}
      </div>
    </div>
  );
}
