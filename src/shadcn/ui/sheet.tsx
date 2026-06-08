import * as React from "react"
import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  asChild,
  render,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Trigger> & {
  asChild?: boolean
}) {
  let finalRender = render
  let finalChildren = children

  if (asChild && React.isValidElement(children)) {
    finalRender = children
    finalChildren = undefined
  }

  return (
    <BaseDialog.Trigger
      data-slot="sheet-trigger"
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseDialog.Trigger>
  )
}

function SheetClose({
  asChild,
  render,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Close> & {
  asChild?: boolean
}) {
  let finalRender = render
  let finalChildren = children

  if (asChild && React.isValidElement(children)) {
    finalRender = children
    finalChildren = undefined
  }

  return (
    <BaseDialog.Close
      data-slot="sheet-close"
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseDialog.Close>
  )
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Backdrop>) {
  return (
    <BaseDialog.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <BaseDialog.Popup
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[open]:animate-in data-[closed]:animate-out data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[closed]:duration-300 data-[open]:duration-500 data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[closed]:slide-out-to-right data-[open]:slide-in-from-right data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[closed]:slide-out-to-left data-[open]:slide-in-from-left data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[closed]:slide-out-to-top data-[open]:slide-in-from-top data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[closed]:slide-out-to-bottom data-[open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <BaseDialog.Close className="ring-offset-background focus:ring-ring data-[open]:bg-secondary data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </BaseDialog.Close>
      </BaseDialog.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  asChild,
  render,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Title> & {
  asChild?: boolean
}) {
  let finalRender = render
  let finalChildren = children

  if (asChild && React.isValidElement(children)) {
    finalRender = children
    finalChildren = undefined
  }

  return (
    <BaseDialog.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseDialog.Title>
  )
}

function SheetDescription({
  className,
  asChild,
  render,
  children,
  ...props
}: React.ComponentProps<typeof BaseDialog.Description> & {
  asChild?: boolean
}) {
  let finalRender = render
  let finalChildren = children

  if (asChild && React.isValidElement(children)) {
    finalRender = children
    finalChildren = undefined
  }

  return (
    <BaseDialog.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseDialog.Description>
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
