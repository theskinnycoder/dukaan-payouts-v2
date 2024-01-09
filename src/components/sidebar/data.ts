import { IconType } from "react-icons"
import {
  LuVolume2 as MarketingIcon,
  LuZap as PluginsIcon,
  LuMousePointer2 as ToolsIcon,
} from "react-icons/lu"
import { MdOutlinePayments as PaymentsIcon } from "react-icons/md"
import {
  TbChartBar as AnalyticsIcon,
  TbPalette as AppearanceIcon,
  TbUsers as AudienceIcon,
  TbTruck as DeliveryIcon,
  TbDiscount2 as DiscountsIcon,
  TbHome as HomeIcon,
  TbClipboardList as OrdersIcon,
  TbLayout2 as ProductsIcon,
} from "react-icons/tb"

type LINK = {
  name: string
  href: string
  icon: IconType
}

export type SIDEBAR_DATA = {
  user: {
    name: string
    image: string
  }
  links: LINK[]
  available_credits: string
}

export const sidebarData = {
  user: {
    name: "Rahul",
    image: "https://avatars.githubusercontent.com/u/64031854?v=4",
  },
  links: [
    {
      name: "Home",
      href: "#",
      icon: HomeIcon,
    },
    {
      name: "Orders",
      href: "#",
      icon: OrdersIcon,
    },
    {
      name: "Products",
      href: "#",
      icon: ProductsIcon,
    },
    {
      name: "Delivery",
      href: "#",
      icon: DeliveryIcon,
    },
    {
      name: "Marketing",
      href: "#",
      icon: MarketingIcon,
    },
    {
      name: "Analytics",
      href: "#",
      icon: AnalyticsIcon,
    },
    {
      name: "Payments",
      href: "#",
      icon: PaymentsIcon,
    },
    {
      name: "Tools",
      href: "#",
      icon: ToolsIcon,
    },
    {
      name: "Discounts",
      href: "#",
      icon: DiscountsIcon,
    },
    {
      name: "Audience",
      href: "#",
      icon: AudienceIcon,
    },
    {
      name: "Appearance",
      href: "#",
      icon: AppearanceIcon,
    },
    {
      name: "Plugins",
      href: "#",
      icon: PluginsIcon,
    },
  ],
  available_credits: `222.10`,
} satisfies SIDEBAR_DATA
