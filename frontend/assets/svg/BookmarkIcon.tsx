import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";


const BookmarkIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 450.000000 450.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <G
      transform="translate(0.000000,450.000000) scale(0.100000,-0.100000)"
    >
      <Path d="M1275 3986 c-108 -34 -195 -110 -242 -211 l-28 -60 -3 -1542 c-1 -849 0 -1543 2 -1543 2 0 297 126 655 279 l651 279 651 -279 c358 -153 653 -279 655 -279 2 0 3 699 2 1553 l-3 1552 -34 63 c-40 74 -104 134 -181 171 l-55 26 -1015 2 c-802 1 -1023 -1 -1055 -11z m1975 -1572 c0 -969 -3 -1215 -12 -1211 -7 2 -218 93 -469 201 l-456 196 -454 -196 c-250 -108 -462 -198 -471 -201 -17 -5 -18 57 -18 1204 0 665 3 1213 7 1216 3 4 426 7 940 7 l933 0 0 -1216z" />
    </G>
  </Svg>
);
export default BookmarkIcon;
