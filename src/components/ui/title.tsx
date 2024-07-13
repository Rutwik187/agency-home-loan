import * as React from "react";
import { cn } from "@/lib/utils";

const Title = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-3xl font-semibold leading-none tracking-tight text-primary text-center my-8 ",
      className
    )}
    {...props}
  />
));
Title.displayName = "Title";

export default Title;
