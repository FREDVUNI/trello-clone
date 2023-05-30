import { useRef, useEffect } from "react";

export const UseFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus;
  }, []);

  return ref;
};
