import React from 'react';
import _ from 'lodash';

export default function SortLodash() {
  const users = [
    { id: 5, name: 'Ered', age: 48 },
    { id: 6, name: 'Nionel', age: 23 },
    { id: 7, name: 'Nionel', age: 55 },
    { id: 9, name: 'Nionel', age: 12 },
    { id: 2, name: 'Deymar', age: 29 },
    { id: 1, name: 'Aonaldo', age: 36 },
  ];

  const resultSortByAge = _.sortBy(users, [(item) => item.age]);

  console.log('resultSortByAge', resultSortByAge);

  const result = _.sortBy(users, ['name', 'age']);

  console.log(result);

  return <div></div>;
}
