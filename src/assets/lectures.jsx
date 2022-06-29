import React from 'react';
import Svg, { G, Path, Circle, Defs, ClipPath } from 'react-native-svg';

export function LiveLecturesImage(props) {
  return (
    <Svg
      width={120}
      height={110}
      viewBox="0 0 120 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0)">
        <Path
          d="M15.705 70.303C-4.34 59.146-.37 29.22 21.878 23.767L87.022 7.794c18.611-4.563 35.347 12.505 30.425 31.03l-12.092 45.502c-4.216 15.867-22.236 23.502-36.599 15.507l-53.051-29.53z"
          fill="#DCCDE4"
        />
        <Circle
          cx={59.9167}
          cy={46.1548}
          r={28.1548}
          fill="#C5ACD2"
          stroke="#41197F"
          strokeWidth={2}
        />
        <Path
          d="M70.572 44.792c1.333.77 1.333 2.694 0 3.464l-13.93 8.042c-1.332.77-3-.193-3-1.733V38.483c0-1.54 1.668-2.502 3-1.732l13.93 8.042z"
          fill="#41197F"
          stroke="#41197F"
          strokeWidth={2}
        />
        <Path
          stroke="#41197F"
          strokeWidth={2}
          d="M33.7143 89.0715L103.833 89.0715"
        />
        <Circle
          cx={27.8095}
          cy={89.3334}
          r={2.95239}
          fill="#41197F"
          stroke="#41197F"
          strokeWidth={2}
        />
        <Circle
          cx={18.9524}
          cy={89.3334}
          r={2.95239}
          fill="#41197F"
          stroke="#41197F"
          strokeWidth={2}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path fill="#fff" d="M0 0H120V110H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
