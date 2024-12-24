"use client"

import * as React from "react"

const Card = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} />
))
Card.displayName = "Card"

const CardContent = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }