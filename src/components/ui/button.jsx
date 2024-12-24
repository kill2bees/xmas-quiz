import { Button as ButtonComponent } from "@/components/ui/button"

const Button = ({ className, ...props }) => {
  return (
    <ButtonComponent
      className={className}
      {...props}
    />
  )
}

export { Button }