// Routes for Sidebar componentimport

export const routes = {
  homepage: { path: '/', icon: 'house', label: 'Homepage' },
  vehicle: { path: '/vehicle', icon: 'car', label: 'Vehicle' },
  dashboard: { path: '/dashboard', icon: 'file-contract', label: 'Dashboard' },
}

export const getTitle = pathname => {
  const key = pathname.replace('/', '')
  return key === '' ? routes.homepage.label : routes[key].label
}
