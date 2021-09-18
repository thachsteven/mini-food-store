import React from 'react';
import _ from 'lodash';

export default function FillLodash() {
  var arr = [
    { id: 1, name: 'Iphone' },
    { id: 2, name: 'Oppo' },
    { id: 3, name: 'SamSung' },
  ];
  _.fill(arr, { id: 5, name: 'Hello' }, 1, 2);

  console.log('arr', arr);

  return <div></div>;
}
