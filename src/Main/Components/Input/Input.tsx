import React, { forwardRef, Ref } from "react";

import { InputProps } from "./type";

function Input(
  { className, children, error, disabled, overrideStyles, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div style={overrideStyles?.wrapper} className={className}>
      <input style={overrideStyles?.input} ref={ref} {...rest} />
      {children}
    </div>
  );
}

Input.displayName = "Input";

export default forwardRef(Input);
