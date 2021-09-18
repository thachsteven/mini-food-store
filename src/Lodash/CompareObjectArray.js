import React from 'react';
import _ from 'lodash';

export default function CompareObjectArray() {
  //So sánh mảng
  const arrA = [1, 2];
  const arrB = [2, 1];
  const result1 = _.isEqual(arrA.sort(), arrB.sort());
  console.log('result1', result1);

  //So sánh mảng object
  const arrObject1 = [
    { id: 1, name: 'Minh' },
    { id: 2, name: 'Hoa' },
  ];
  const arrObject2 = [
    { id: 1, name: 'Minh' },
    { id: 2, name: 'Hang' },
    { id: 3, name: 'Giang' },
  ];

  const result2 = _.differenceWith(arrObject2, arrObject1, _.isEqual);
  console.log('result2', result2);

  return <div></div>;
}
