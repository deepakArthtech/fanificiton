import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({height,width,fill}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={height}
      height={width}
      fill={fill}
    >
      <Path d="M251.6 185.7c-36.9 0-67 31.5-67 70.3 0 38.7 30 70.3 67 70.3 36.9 0 67-31.5 67-70.3 0-38.7-30.1-70.3-67-70.3z" />
      <Path d="M251.6 367.1c-59.4 0-107.8-49.8-107.8-111.1s48.4-111.1 107.8-111.1S359.4 194.7 359.4 256 311 367.1 251.6 367.1zm246.3-121.9C434.1 142.8 348.1 86.4 256 86.4S77.9 142.8 14.1 245.2c-4.1 6.6-4.1 15 0 21.6C77.9 369.2 163.9 425.6 256 425.6s178-56.4 241.9-158.8c4.1-6.6 4.1-15 0-21.6z" />
    </Svg>
  )
}

export default SvgComponent
