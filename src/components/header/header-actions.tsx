import { Button } from "@/components/ui/button"
import { HiChatBubbleBottomCenterText as ChatIcon } from "react-icons/hi2"
import { TbCaretDownFilled as ChevronDownIcon } from "react-icons/tb"

export default function HeaderActions() {
  return (
    <div className="flex space-x-3.5 items-center">
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full p-2"
      >
        <ChatIcon size={30} />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="rounded-full p-2"
      >
        <ChevronDownIcon size={20} />
      </Button>
    </div>
  )
}
