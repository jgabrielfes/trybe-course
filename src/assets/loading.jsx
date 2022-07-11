import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function LoadingImage({ color, ...rest }) {
  return (
    <Svg
      width={36}
      height={83}
      viewBox="0 0 36 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.841 77.807A8.38 8.38 0 01.2 73.651L.15 8.477c0-1.474.357-2.926 1.04-4.233l.086-.144a8.485 8.485 0 0111.448-2.992l.115.058a8.657 8.657 0 012.953 3.088l18.702 32.62a8.283 8.283 0 010 8.39L15.842 77.806z"
        fill={color || '#fff'}
      />
    </Svg>
  );
}
