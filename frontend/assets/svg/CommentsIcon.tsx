import * as React from "react";
import Svg, { G, Path, SvgProps} from "react-native-svg";

const CommentsIcon = (props: SvgProps) => (
    <Svg
        width="350.000000pt"
        height="350.000000pt"
        viewBox="0 0 350.000000 350.000000"
        preserveAspectRatio="xMidYMid meet"
        {...props}
    >
        <G
        transform="translate(0.000000,350.000000) scale(0.100000,-0.100000)"
        >
        <Path d="M253 3486 c-101 -32 -179 -102 -225 -202 l-23 -49 0 -1135 0 -1135 33 -67 c37 -77 90 -128 172 -167 l55 -26 1270 -3 1270 -2 348 -348 347 -347 -2 1615 -3 1615 -33 67 c-37 77 -90 128 -172 167 l-55 26 -1470 2 c-1196 1 -1478 -1 -1512 -11z m2897 -1488 l0 -1153 -103 103 -102 102 -1298 0 -1297 0 0 1050 0 1050 1400 0 1400 0 0 -1152z" />
        </G>
    </Svg>
);
export default CommentsIcon;
