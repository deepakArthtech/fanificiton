import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Plus(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_1049_455)">
        <Rect
          x={4}
          y={8}
          width={60.1352}
          height={60.5714}
          rx={30.0676}
          fill="#640000"
        />
        <G clipPath="url(#clip0_1049_455)">
          <Path
            d="M37.45 26.929h-6.765v7.945h-7.893v6.823h7.893v7.946h6.765v-7.946h7.893v-6.823H37.45V26.93z"
            fill="#fff"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1049_455">
          <Path
            fill="#fff"
            transform="translate(22.792 26.929)"
            d="M0 0H22.5507V22.7143H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Plus
