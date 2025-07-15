import NotFound from '@/components/not-found'
import { useThemeStore } from '@/store/themeStore'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
})

function RootComponent() {
  useThemeStore();
  return (
      <Outlet />
  )
}
