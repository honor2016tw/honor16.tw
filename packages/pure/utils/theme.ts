export function getTheme() {
  return localStorage.getItem('theme')
}

export function listenThemeChange(theme?: string) {
  // Dark mode is disabled: no-op
  return
}

export function setTheme(theme?: string, save = false) {
  // Always use light theme, ignore requested theme and system preference
  const appliedTheme = 'light'
  if (save) {
    localStorage.setItem('theme', appliedTheme)
  }

  document.documentElement.classList.remove('dark')
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', '#FCFCFD')

  return appliedTheme
}
