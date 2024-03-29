import { Input } from "@/components/ui/input"
import { TbSearch } from "react-icons/tb"

export default function HeaderSearchbar() {
  return (
    <div className="relative">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <TbSearch
          size={20}
          className="stroke-primary/40"
        />
      </div>

      {/* Search Input */}
      <Input
        placeholder="Search features, tutorials, etc."
        className="min-w-[28rem] pl-10"
      />
    </div>
  )
}
