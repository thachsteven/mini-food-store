import React from 'react';
import _ from 'lodash';

export default function FlattenLodash() {
  const arr = [[1, [2, [3, [4]]], 5]];

  const resultFlattent = _.flatten(arr);
  const resultFlattentDeep = _.flattenDeep(arr);

  console.log('resultFlattent', resultFlattent);
  console.log('resultFlattentDeep', resultFlattentDeep);

  return <div></div>;
}
