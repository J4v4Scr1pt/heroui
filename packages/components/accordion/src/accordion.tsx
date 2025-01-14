import {forwardRef} from "@nextui-org/system";

import {useAccordion, UseAccordionProps} from "./use-accordion";
import {AccordianContext} from "./accordian-context";

export interface AccordionProps extends UseAccordionProps {}

const AccordionGroup = forwardRef<"div", AccordionProps>((props) => {
  const {state} = useAccordion(props);

  return <AccordianContext value={state}>{props.children}</AccordianContext>;
});

AccordionGroup.displayName = "NextUI.Accordion";

export default AccordionGroup;
