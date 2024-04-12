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
import { Archive } from "lucide-react"

export const statuses = [
  {
    value: "TODO",
    label: "To do",
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
  },
  {
    value: "ARCHIVED",
    label: "Archived",
    icon: Archive,
  }
]
