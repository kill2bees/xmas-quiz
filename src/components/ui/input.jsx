import { Input as InputComponent } from "@/components/ui/input"

const Input = ({ className, ...props }) => {
  return <InputComponent className={className} {...props} />
}

export { Input }
