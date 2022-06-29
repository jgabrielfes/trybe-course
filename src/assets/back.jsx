import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export function BackEndImage(props) {
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
          d="M14.705 70.303C-5.34 59.146-1.37 29.22 20.878 23.767L86.022 7.794c18.611-4.563 35.347 12.505 30.425 31.03l-12.092 45.502c-4.216 15.867-22.236 23.502-36.599 15.507l-53.051-29.53z"
          fill="#D8F8EA"
        />
        <Path
          d="M12.5 20a3.5 3.5 0 013.5-3.5h89a3.5 3.5 0 013.5 3.5v19.535h-96V20z"
          fill="#2FC18C"
          stroke="#036B52"
        />
        <Path d="M33.088 26.301h68.673v3.434H33.088V26.3z" fill="#036B52" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.832 30.52a2.688 2.688 0 100-5.376 2.688 2.688 0 000 5.376zm0 1.418a4.106 4.106 0 100-8.212 4.106 4.106 0 000 8.212z"
          fill="#036B52"
        />
        <Path
          fill="#2FC18C"
          stroke="#036B52"
          d="M12.5 39.6772H108.5V62.712599999999995H12.5z"
        />
        <Path fill="#036B52" d="M33.0884 49.4782H101.761V52.91183H33.0884z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.832 53.697a2.688 2.688 0 100-5.376 2.688 2.688 0 000 5.376zm0 1.418a4.106 4.106 0 100-8.212 4.106 4.106 0 000 8.212z"
          fill="#036B52"
        />
        <Path
          d="M12.5 62.854h96v19.535a3.5 3.5 0 01-3.5 3.5H16a3.5 3.5 0 01-3.5-3.5V62.854z"
          fill="#2FC18C"
          stroke="#036B52"
        />
        <Path fill="#036B52" d="M33.0884 72.655H101.761V76.08863H33.0884z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.832 76.874a2.688 2.688 0 100-5.376 2.688 2.688 0 000 5.376zm0 1.418a4.106 4.106 0 100-8.212 4.106 4.106 0 000 8.212z"
          fill="#036B52"
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
