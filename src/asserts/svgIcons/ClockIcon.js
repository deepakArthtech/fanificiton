import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ClockIcon({height,width,fill}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <Path d="M100 15a85 85 0 1085 85 84.93 84.93 0 00-85-85zm0 150a65 65 0 1165-65 64.87 64.87 0 01-65 65zm24-76.5l-14 6V60a10 10 0 00-20 0v50a9.82 9.82 0 004.5 8.5 9.28 9.28 0 009.5.5l28-12.5c5-2.5 7.5-8 5-13s-8-7.5-13-5z" />
    </Svg>
  )
}

export default ClockIcon
