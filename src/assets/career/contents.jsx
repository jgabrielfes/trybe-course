import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function ContentsImage(props) {
  return (
    <Svg
      width={90}
      height={90}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M44.5 83.5c21.54 0 39-17.46 39-39s-17.46-39-39-39-39 17.46-39 39 17.46 39 39 39z"
        fill="#2FC18C"
        stroke="#41197F"
        strokeWidth={3}
      />
      <Path
        d="M45.04 10.234a1 1 0 01-1.732 0l-2.2-3.812a1 1 0 01.865-1.5h4.402a1 1 0 01.866 1.5l-2.2 3.812zM45.04 79.115a1 1 0 00-1.732 0l-2.2 3.812a1 1 0 00.865 1.5h4.402a1 1 0 00.866-1.5l-2.2-3.812zM10.234 43.308a1 1 0 010 1.732l-3.812 2.201a1 1 0 01-1.5-.866v-4.401a1 1 0 011.5-.866l3.812 2.2zM79.115 43.308a1 1 0 000 1.732l3.812 2.201a1 1 0 001.5-.866v-4.401a1 1 0 00-1.5-.866l-3.812 2.2z"
        fill="#41197F"
      />
      <Path
        d="M55.374 25.747c2.15-1 4.556.773 4.237 3.123l-3.085 22.781a3 3 0 01-1.708 2.318l-20.845 9.693c-2.15 1-4.556-.773-4.238-3.123l3.086-22.78a3 3 0 011.708-2.318l20.845-9.694z"
        fill="#036B52"
      />
      <Path
        d="M45 48.716a4.541 4.541 0 100-9.083 4.541 4.541 0 000 9.083z"
        fill="#2FC18C"
      />
    </Svg>
  );
}
