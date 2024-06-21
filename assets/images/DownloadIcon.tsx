import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DownloadIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={21}
      fill="none"
      viewBox="0 0 21 21"
      {...props}
    >
      <Path
        fill="#F8F8F8"
        d="M2.583 20.667c-.71 0-1.318-.253-1.824-.759A2.489 2.489 0 010 18.084v-3.875h2.583v3.875h15.5v-3.875h2.584v3.875c0 .71-.253 1.32-.759 1.826a2.491 2.491 0 01-1.825.758h-15.5zm7.75-5.167L3.875 9.042l1.808-1.873 3.359 3.358V0h2.583v10.527l3.358-3.358 1.809 1.873-6.459 6.458z"
      />
    </Svg>
  );
}

export default DownloadIcon;
