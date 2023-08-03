import { atom, useAtom } from "jotai"

const sidebarAtom = atom(false)
export const useSidebar = () => {
  const [open, setOpen] = useAtom(sidebarAtom)

  const openSidebar = () => setOpen(true)
  const closeSidebar = () => setOpen(false)

  return { openSidebar, closeSidebar, open }
}
