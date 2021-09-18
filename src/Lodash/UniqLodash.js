import React from 'react';
import _ from 'lodash';

export default function UniqLodash() {
  const arr = [1, 2, 2, 2, 3, 4, 5, 6];
  console.log(_.uniq(arr));

  const arr2 = [
    { id: 1, name: 'iphone', price: 1000 },
    { id: 2, name: 'iphone5S', price: 2000 },
    { id: 3, name: 'iphone6', price: 5000 },
    { id: 3, name: 'iphone6', price: 5000 },
    { id: 3, name: 'iphone6', price: 5000 },
    { id: 4, name: 'iphoneX', price: 7000 },
    { id: 5, name: 'iphoneXS', price: 2000 },
  ];

  console.log('result', _.uniqBy(arr2, 'id'));

  return <div></div>;
}
