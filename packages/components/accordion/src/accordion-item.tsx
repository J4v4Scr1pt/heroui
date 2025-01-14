import {forwardRef} from "@nextui-org/system";
import {Disclosure} from "@nextui-org/disclosure";

import {UseAccordionItemProps, useAccordionItem} from "./use-accordion-item";

export interface AccordionItemProps extends UseAccordionItemProps {}

const AccordionItem = forwardRef<"button", AccordionItemProps>((props, ref) => {
  const {disclosureProps, children} = useAccordionItem(props);

  return (
    <Disclosure {...disclosureProps} ref={ref}>
      {children}
    </Disclosure>
  );
});

AccordionItem.displayName = "NextUI.AccordionItem";

export default AccordionItem;
