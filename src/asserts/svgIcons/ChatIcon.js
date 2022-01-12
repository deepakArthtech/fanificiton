import * as React from "react"

const ChatIcon = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 3.333c-9.19 0-16.667 5.982-16.667 13.334 0 4.846 3.164 9.191 8.334 11.556v8.444l8.9-6.675c8.928-.239 16.1-6.125 16.1-13.325C36.667 9.315 29.19 3.333 20 3.333Zm0 23.334h-.555L15 30v-4.028l-1.068-.412c-4.482-1.725-7.265-5.133-7.265-8.893 0-5.515 5.981-10 13.333-10s13.333 4.485 13.333 10-5.981 10-13.333 10Z"
      fill="#F7931A"
    />
    <path
      d="M11.667 11.667h16.666V15H11.667v-3.333Zm0 6.666h11.666v3.334H11.667v-3.334Z"
      fill="#F7931A"
    />
  </svg>
)

export default ChatIcon
