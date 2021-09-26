import { CSSProperties, InputHTMLAttributes } from "react";

type OverrideStyles = {
  wrapper?: CSSProperties;
  input?: CSSProperties;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * To render the red border on the input box
   */
  error?: boolean;

  /**
   * To disable the field
   */
  disabled?: boolean;

  /**
   * Test Id for testing purpose
   */
  testId?: string;

  /**
   * Overriding styles
   */
  overrideStyles?: OverrideStyles;
};

export type { InputProps };
