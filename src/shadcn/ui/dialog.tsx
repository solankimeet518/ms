import * as React from "react"
import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
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
      data-slot="dialog-trigger"
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseDialog.Trigger>
  )
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
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
      data-slot="dialog-close"
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseDialog.Close>
  )
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Backdrop>) {
  return (
    <BaseDialog.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <BaseDialog.Popup
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <BaseDialog.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[open]:bg-accent data-[state=open]:bg-accent absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </BaseDialog.Close>
        )}
      </BaseDialog.Popup>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
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
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseDialog.Title>
  )
}

function DialogDescription({
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
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      render={finalRender}
      {...props}
    >
      {finalChildren}
    </BaseDialog.Description>
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
