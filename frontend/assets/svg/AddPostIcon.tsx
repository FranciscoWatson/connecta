import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const AddPostIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 600.000000 600.000000"
        preserveAspectRatio="xMidYMid meet"
        {...props}
    >
        <G
        transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
        
        >
        <Path d="M2911 4733 c-48 -17 -110 -73 -138 -125 -17 -31 -18 -79 -21 -695 l-3 -663 -642 0 c-721 0 -706 1 -778 -71 -60 -60 -74 -93 -74 -179 0 -64 4 -82 28 -122 31 -53 79 -94 134 -114 30 -10 171 -13 685 -14 l647 0 3 -663 3 -664 30 -49 c101 -163 329 -163 430 0 l30 49 3 664 3 663 647 0 c514 1 655 4 685 14 55 20 103 61 134 114 24 40 28 58 28 122 0 63 -4 82 -27 121 -15 25 -43 58 -62 73 -75 57 -63 56 -762 56 l-643 0 -3 663 -3 662 -27 46 c-64 108 -189 154 -307 112z" />
        </G>
    </Svg>
);
export default AddPostIcon;
