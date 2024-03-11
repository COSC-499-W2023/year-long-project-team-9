import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const statuses = [
  {
    value: "NOT STARTED",
    label: "Not Started",
    icon: CircleIcon,
  },
  {
    value: "PROCESSING",
    label: "Processing",
    icon: StopwatchIcon,
  },
  {
    value: "COMPLETED",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "FAILED",
    label: "Failed",
    icon: CrossCircledIcon,
  }
]
