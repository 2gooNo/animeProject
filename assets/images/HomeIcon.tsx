import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon(props: any) {
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
        d="M0 25V8.333L12.5 0 25 8.333V25h-9.375v-9.722h-6.25V25H0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default HomeIcon;
