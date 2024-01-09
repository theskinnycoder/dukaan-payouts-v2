import HeaderActions from "./header-actions"
import HeaderSearchbar from "./header-searchbar"
import HeaderTitle from "./header-title"

interface HeaderProps {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="sticky top-0 drop-shadow-sm border-b inset-x-0 w-full flex justify-between items-center bg-white px-8 py-4 z-50">
      {children}
    </div>
  )
}

Header.Title = HeaderTitle
Header.Searchbar = HeaderSearchbar
Header.Actions = HeaderActions
