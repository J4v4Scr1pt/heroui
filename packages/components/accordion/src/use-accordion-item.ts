import type {AccordionItemVariantProps} from "@nextui-org/theme";

import {HTMLNextUIProps} from "@nextui-org/system";
import {ReactRef} from "@nextui-org/react-utils";
import {DisclosureProps} from "@nextui-org/disclosure";
import {HTMLMotionProps} from "framer-motion";

import {useAccordianContext} from "./accordian-context";

export interface Props extends Omit<HTMLNextUIProps<"div">, "title"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLButtonElement | null>;
  /**
   * The props to modify the framer motion animation. Use the `variants` API to create your own animation.
   */
  motionProps?: HTMLMotionProps<"section">;
  id: string;
}

export type UseAccordionItemProps = Props & AccordionItemVariantProps & DisclosureProps;

export function useAccordionItem(props: UseAccordionItemProps) {
  const state = useAccordianContext();

  const {id, ...otherProps} = props;
  const disclosureProps: DisclosureProps = {
    ...otherProps,
    isExpanded: state.expandedKeys.has(id),
    onExpandedChange(isExpanded) {
      if (state) {
        state.toggleKey(id);
      }
      props.onExpandedChange?.(isExpanded);
    },
  };

  return {
    disclosureProps,
    children: props.children,
  };
}

export type UseAccordionItemReturn = ReturnType<typeof useAccordionItem>;
