import SidebarContent from "./sidebar-content"
import SidebarFooter from "./sidebar-footer"
import SidebarHeader from "./sidebar-header"
import SidebarProvider from "./sidebar-provider"

interface SidebarProps {
  children: React.ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <SidebarProvider>
      <aside className="flex flex-col space-y-12 text-left bg-primary text-primary-foreground py-4 px-5 h-full max-h-screen">
        {children}
      </aside>
    </SidebarProvider>
  )
}

Sidebar.Header = SidebarHeader
Sidebar.Content = SidebarContent
Sidebar.Footer = SidebarFooter
