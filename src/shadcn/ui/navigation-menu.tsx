import * as React from "react"
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenuContext = React.createContext<{ viewport: boolean }>({ viewport: true })

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuContext.Provider value={{ viewport }}>
      <BaseNavigationMenu.Root
        data-slot="navigation-menu"
        className={cn(
          "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
        {viewport && <NavigationMenuViewport />}
      </BaseNavigationMenu.Root>
    </NavigationMenuContext.Provider>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.List>) {
  return (
    <BaseNavigationMenu.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.Item>) {
  return (
    <BaseNavigationMenu.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  asChild,
  render,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.Trigger> & {
  asChild?: boolean
}) {
  let finalRender = render
  let finalChildren = children

  if (asChild && React.isValidElement(children)) {
    finalRender = children
    finalChildren = undefined
  }

  return (
    <BaseNavigationMenu.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      render={finalRender}
      {...props}
    >
      {finalChildren}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180 group-data-[open]:rotate-180"
        aria-hidden="true"
      />
    </BaseNavigationMenu.Trigger>
  )
}

function NavigationMenuContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.Content>) {
  const { viewport } = React.useContext(NavigationMenuContext)

  if (!viewport) {
    return (
      <>
        <BaseNavigationMenu.Content {...props}>
          {children}
        </BaseNavigationMenu.Content>
        <BaseNavigationMenu.Portal>
          <BaseNavigationMenu.Positioner className="z-100">
            <BaseNavigationMenu.Popup
              className={cn(
                "bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[open]:fade-in-0 data-[closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 top-full mt-1.5 overflow-hidden rounded-md border shadow duration-200 focus-visible:ring-0 focus-visible:outline-none z-50",
                className
              )}
            >
              <BaseNavigationMenu.Viewport />
            </BaseNavigationMenu.Popup>
          </BaseNavigationMenu.Positioner>
        </BaseNavigationMenu.Portal>
      </>
    )
  }

  return (
    <BaseNavigationMenu.Content
      data-slot="navigation-menu-content"
      className={className}
      {...props}
    >
      {children}
    </BaseNavigationMenu.Content>
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.Viewport>) {
  return (
    <BaseNavigationMenu.Portal>
      <BaseNavigationMenu.Positioner>
        <div
          className={cn(
            "absolute top-full left-0 isolate z-50 flex justify-center"
          )}
        >
          <BaseNavigationMenu.Popup>
            <BaseNavigationMenu.Viewport
              data-slot="navigation-menu-viewport"
              className={cn(
                "origin-top-center bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[closed]:zoom-out-95 data-[open]:zoom-in-90 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--positioner-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--positioner-width)]",
                className
              )}
              {...props}
            />
          </BaseNavigationMenu.Popup>
        </div>
      </BaseNavigationMenu.Positioner>
    </BaseNavigationMenu.Portal>
  )
}

function NavigationMenuLink({
  className,
  asChild,
  render,
  children,
  ...props
}: React.ComponentProps<typeof BaseNavigationMenu.Link> & {
  asChild?: boolean
}) {
  let finalRender = render
  let finalChildren = children

  if (asChild && React.isValidElement(children)) {
    finalRender = children
    finalChildren = undefined
  }

  return (
    <BaseNavigationMenu.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseNavigationMenu.Link>
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </div>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
