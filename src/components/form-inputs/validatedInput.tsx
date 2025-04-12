import React from "react"
import { useState, useCallback } from "react"
import  Input  from "./Input"
// className={fieldErrors.length > 0 ? "border-red-500" : ""}
const ValidatedInput = ({
  name,
  wasSubmitted,
  errors,
  fieldSchema,
  ...props
}) => {
  const [value, setValue] = useState("")
  const [touched, setTouched] = useState(false)

  const getErrors = useCallback(() => {
    const validationResult = fieldSchema.safeParse(value)
    return validationResult.success
      ? []
      : validationResult.error.flatten().formErrors
  }, [fieldSchema, value])

  const fieldErrors = errors || getErrors()
  const shouldRenderErrors = errors || wasSubmitted || touched

  const handleBlur = () => setTouched(true)
  const handleChange = (e) => setValue(e.currentTarget.value)

  return (
    <>
      <Input
        id={name}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
      {shouldRenderErrors && (
        <span className="text-sm text-red-500">{fieldErrors}</span>
      )}
    </>
  )
}
export { ValidatedInput }