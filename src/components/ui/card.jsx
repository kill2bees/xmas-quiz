import { Card as CardComponent, CardContent } from "@/components/ui/card"

const Card = ({ className, ...props }) => {
  return <CardComponent className={className} {...props} />
}

export { Card, CardContent }
