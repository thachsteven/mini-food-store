import React from 'react';

export default function PaddingMarginDemo() {
  return (
    <div className="container">
      <button style={{ width: 'auto', margin: 15 }} className="bg-red-200 px-5">
        padding
      </button>
      <br />
      <button className="bg-purple-400">margin</button>
    </div>
  );
}
