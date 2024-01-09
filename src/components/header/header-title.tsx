import { HiOutlineQuestionMarkCircle as QuestionMarkIcon } from "react-icons/hi2"

export default function HeaderTitle() {
  return (
    <div className="flex space-x-3.5 items-center">
      <span className="text-lg">Payments</span>
      <div className="flex space-x-0.5 items-center text-sm font-light text-neutral-700 hover:underline underline-offset-4">
        <QuestionMarkIcon size={17} />
        <span className="tracking-normal">How it works</span>
      </div>
    </div>
  )
}
