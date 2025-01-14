import {forwardRef} from "@nextui-org/system";

import {useAccordion, UseAccordionProps} from "./use-accordion";
import {AccordianContext} from "./accordian-context";

export interface AccordionProps extends UseAccordionProps {}

const AccordionGroup = forwardRef<"div", AccordionProps>((props) => {
  const {state, values, children, Component, getBaseProps} = useAccordion(props);

  return (
    <AccordianContext value={{state, values}}>
      <Component {...getBaseProps()}>{children}</Component>
    </AccordianContext>
  );
});

AccordionGroup.displayName = "NextUI.Accordion";

export default AccordionGroup;
