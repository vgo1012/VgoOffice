// Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md.
import type { TitleBarOverlay } from 'electron'

/// Windows/Linux draw the caption buttons over the tab strip (titleBarStyle
/// 'hidden'); the overlay must match the strip's --tabstrip-bg / text tokens
/// in renderer/src/tabbar.css or the buttons sit on a visibly different band.
export const TAB_STRIP_HEIGHT = 40

export function tabStripOverlay(dark: boolean): TitleBarOverlay {
  return dark
    ? { color: '#172a45', symbolColor: '#e8f0fa', height: TAB_STRIP_HEIGHT }
    : { color: '#dce7f5', symbolColor: '#263f60', height: TAB_STRIP_HEIGHT }
}
