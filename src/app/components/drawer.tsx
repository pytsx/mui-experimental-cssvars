"use client"

import MuiDrawer, {
  type DrawerProps as MuiDrawerProps
} from "@mui/material/Drawer"
import React from "react"

interface DrawerProps extends MuiDrawerProps {
  trigger?: React.ReactNode
}

const Drawer = React.forwardRef(({
  children,
  trigger,
  open: _open,
  ...props
}: DrawerProps, ref) => {

  const [open, setOpen] = React.useState<boolean>(_open || false)
  const closeDrawer = () => setOpen(false)
  const openDrawer = () => setOpen(true)

  return (
    <React.Fragment>
      <span onClick={openDrawer}>
        {trigger && trigger}
      </span>

      <MuiDrawer
        {...props}
        open={open}
        onClose={closeDrawer}
      >
        {children}
      </MuiDrawer>
    </React.Fragment>
  )
})

Drawer.displayName = "Drawer"
export default Drawer