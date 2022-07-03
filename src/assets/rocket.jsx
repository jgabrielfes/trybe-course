import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export function RocketImage(props) {
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
          fill="#D8F8EA"
        />
        <Path
          d="M81.121 81.09a15.505 15.505 0 012.697 5.61c.998 4.178-.393 11.609-2.101 13.326a.969.969 0 01-1.073.334c-1.919-.76-2.826-3.627-3.551-5.921l-.002-.005a12.046 12.046 0 00-.892-2.325c-.876-1.413-3.114-2.006-5.215-2.218-.333.607-.771 1.352-.998 1.747-.227.395-.378.699-.665 1.17-.287.471-.59 1.003-.922 1.52-.08.142-.182.27-.302.38a2.115 2.115 0 01-1.603.577l-5.88.06a1.912 1.912 0 01-1.83-.941 7.902 7.902 0 00-.483-.775 5.513 5.513 0 01-.333-.487l-.997-1.64-.907-1.627a8.212 8.212 0 00-4.762 1.718c-.152.149-.284.317-.393.5a11.128 11.128 0 00-.892 2.326 13.31 13.31 0 01-2.48 5.181c-.296.328-.656.591-1.058.775a.906.906 0 01-.982-.288c-1.739-1.535-3.205-9.118-2.132-13.387a15.215 15.215 0 014.006-7.097 16.036 16.036 0 013.311-2.552 114.462 114.462 0 01-4.414-19.222 72.91 72.91 0 01-.998-14.01 52.416 52.416 0 012.555-13.813 39.45 39.45 0 016.621-12.293 41.436 41.436 0 015.185-5.47c1.028-.942 2.48-2.052 3.31-2.629l.605-.41.62.41a38.92 38.92 0 0115.193 21 55.231 55.231 0 012.479 13.539 66.153 66.153 0 01-1.043 14.101 128.684 128.684 0 01-4.354 18.751 15.412 15.412 0 014.68 4.085z"
          fill="#2FC18C"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.54 8l1.187.786.008.005a39.92 39.92 0 0115.58 21.53 56.233 56.233 0 012.521 13.776l.001.011v.012a67.158 67.158 0 01-1.056 14.3 129.68 129.68 0 01-4.153 18.13 16.419 16.419 0 014.289 3.934 16.502 16.502 0 012.871 5.972l.003.011c.543 2.275.425 5.328-.022 7.985-.226 1.34-.542 2.619-.92 3.688-.357 1.009-.81 1.95-1.38 2.547a1.967 1.967 0 01-2.14.622l-.027-.009-.026-.01c-1.306-.517-2.156-1.697-2.747-2.863-.594-1.172-1.023-2.527-1.378-3.65l-.012-.037-.008-.026-.005-.02a11.058 11.058 0 00-.797-2.09c-.28-.427-.817-.812-1.631-1.119-.644-.242-1.392-.41-2.169-.521a116.054 116.054 0 01-.675 1.172c-.066.114-.132.234-.203.362a20.9 20.9 0 01-.476.83l-.286.477c-.197.332-.414.698-.635 1.041-.128.221-.288.421-.476.594a3.114 3.114 0 01-2.31.845l-5.807.06a2.912 2.912 0 01-2.74-1.436l-.007-.013-.007-.013a6.906 6.906 0 00-.412-.663 6.479 6.479 0 01-.381-.558l-1.008-1.657-.605-1.086a7.216 7.216 0 00-3.535 1.424c-.07.074-.131.154-.184.24-.34.66-.606 1.356-.794 2.076a14.315 14.315 0 01-2.663 5.558l-.022.028-.025.027a4.253 4.253 0 01-1.382 1.012l-.051.024-.054.018a1.899 1.899 0 01-2.012-.541c-.606-.565-1.075-1.504-1.438-2.492-.391-1.063-.717-2.35-.95-3.705-.46-2.685-.58-5.804.004-8.13a16.216 16.216 0 014.268-7.56c.86-.863 1.807-1.63 2.828-2.29A115.466 115.466 0 0145.28 57.98a73.906 73.906 0 01-1.009-14.188v-.011l.001-.012a53.423 53.423 0 012.604-14.075 40.45 40.45 0 016.787-12.603 42.44 42.44 0 015.301-5.593c1.069-.979 2.553-2.112 3.408-2.706l.01-.006L63.54 8zm-.032 2.438l.045-.03.053.035A37.92 37.92 0 0178.4 30.897l.002.01.003.008a54.235 54.235 0 012.434 13.283c.154 4.649-.191 9.301-1.028 13.876l-.002.014-.002.013a127.697 127.697 0 01-4.32 18.606l-.241.77.703.398a14.412 14.412 0 014.376 3.82 14.502 14.502 0 012.522 5.242c.453 1.904.375 4.653-.05 7.183-.212 1.254-.502 2.416-.833 3.353-.345.973-.692 1.583-.956 1.847l-.047.048-.024.03c-.584-.262-1.122-.885-1.624-1.875-.512-1.009-.895-2.212-1.262-3.37-.234-.863-.555-1.7-.96-2.497l-.02-.038-.022-.036c-.604-.973-1.617-1.58-2.645-1.968-1.043-.393-2.221-.607-3.32-.718l-.659-.067-.318.582c-.242.441-.538.952-.772 1.355l-.216.374c-.101.177-.18.319-.254.454-.116.213-.224.408-.398.694-.112.184-.22.365-.326.544-.188.317-.375.63-.583.954l-.016.026-.015.026a.522.522 0 01-.103.13l-.009.007-.008.008a1.114 1.114 0 01-.843.304l-.04-.003-5.961.062-.04.004a.911.911 0 01-.87-.442 8.889 8.889 0 00-.536-.857l-.01-.015-.012-.015a4.491 4.491 0 01-.272-.398l-.988-1.625-1.195-2.142-.609.02a9.213 9.213 0 00-5.342 1.926l-.047.036-.042.042c-.213.21-.398.446-.55.703l-.016.025-.013.025a12.12 12.12 0 00-.972 2.534l-.003.013-.003.012a12.31 12.31 0 01-2.269 4.761c-.162.174-.35.32-.557.435l-.058-.051c-.237-.209-.585-.766-.94-1.734-.34-.924-.64-2.088-.857-3.353-.438-2.557-.515-5.363-.027-7.307l.001-.003a14.213 14.213 0 013.742-6.63l.002-.001a15.03 15.03 0 013.104-2.394l.697-.404-.247-.767a113.464 113.464 0 01-4.376-19.054l-.002-.014-.002-.014a71.912 71.912 0 01-.984-13.806 51.42 51.42 0 012.505-13.538 38.448 38.448 0 016.454-11.982l.002-.004a40.44 40.44 0 015.06-5.338l.008-.007.008-.007c.985-.902 2.395-1.982 3.2-2.542z"
          fill="#036B52"
        />
        <Path
          d="M65.623 50.643l2.309 4.019a.61.61 0 00.552.32.642.642 0 00.654-.642l.011-8.037a.638.638 0 00-1.205-.322l-2.32 4.007a.62.62 0 00-.084.321.66.66 0 00.083.334zM63.232 52.01l2.32 4.007a.716.716 0 01.095.333.665.665 0 01-.654.642.645.645 0 01-.322-.084l-6.96-4.03a.622.622 0 01-.322-.546.655.655 0 01.654-.666l4.63.024a.622.622 0 01.559.32zM62.661 48.897h-4.628a.646.646 0 01-.594-.89c.054-.13.15-.24.273-.31l6.971-4.009a.71.71 0 01.334-.095.658.658 0 01.643.654.668.668 0 01-.096.32l-2.343 4.008a.636.636 0 01-.56.322z"
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