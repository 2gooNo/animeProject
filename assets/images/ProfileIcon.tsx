import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ProfileIcon(props: any) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 23.75c6.213 0 11.25-5.037 11.25-11.25S18.713 1.25 12.5 1.25 1.25 6.287 1.25 12.5 6.287 23.75 12.5 23.75zm0 1.25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25z"
        fill="#fff"
      />
      <Path
        d="M5 19.769c0-.646.482-1.191 1.125-1.263 4.822-.534 7.95-.485 12.761.012a1.244 1.244 0 01.693 2.17c-5.679 4.95-8.923 4.881-14.18.005a1.261 1.261 0 01-.4-.924z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.822 19.14c-4.773-.494-7.856-.54-12.629-.012a.643.643 0 00-.368 1.107c2.605 2.416 4.579 3.508 6.508 3.515 1.936.007 4.016-1.076 6.835-3.533a.62.62 0 00-.346-1.077zM6.056 17.884c4.873-.54 8.046-.49 12.895.011a1.868 1.868 0 011.039 3.263c-2.86 2.493-5.24 3.85-7.66 3.84-2.428-.008-4.704-1.388-7.354-3.848a1.887 1.887 0 01-.601-1.382 1.892 1.892 0 011.681-1.885v.001z"
        fill="#fff"
      />
      <Path d="M17.5 10a5 5 0 11-10 0 5 5 0 0110 0z" fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 13.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm0 1.25a5 5 0 100-10 5 5 0 000 10z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ProfileIcon;
