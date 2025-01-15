import {forwardRef} from "@nextui-org/system";
import {Disclosure} from "@nextui-org/disclosure";
import {Divider} from "@nextui-org/divider";

import {UseAccordionItemProps, useAccordionItem} from "./use-accordion-item";

export interface AccordionItemProps extends UseAccordionItemProps {}

const AccordionItem = forwardRef<"button", AccordionItemProps>((props, ref) => {
  const {disclosureProps, hideIndicator, children, dividerProps, hidden, getBaseProps} =
    useAccordionItem(props);

  return (
    <div {...getBaseProps()}>
      <Disclosure {...disclosureProps} ref={ref}>
        {children}
      </Disclosure>
      {!hideIndicator && !hidden && <Divider {...dividerProps} />}
    </div>
  );
});

AccordionItem.displayName = "NextUI.AccordionItem";

export default AccordionItem;
