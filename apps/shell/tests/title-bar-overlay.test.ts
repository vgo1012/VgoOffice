import { describe, expect, it } from 'vitest'

import { TAB_STRIP_HEIGHT, tabStripOverlay } from '../src/main/title-bar-overlay'

describe('tabStripOverlay', () => {
  it('matches the tab strip band in both themes and its 40px height', () => {
    expect(tabStripOverlay(false)).toEqual({
      color: '#dce7f5',
      symbolColor: '#263f60',
      height: TAB_STRIP_HEIGHT,
    })
    expect(tabStripOverlay(true)).toEqual({
      color: '#172a45',
      symbolColor: '#e8f0fa',
      height: TAB_STRIP_HEIGHT,
    })
    expect(TAB_STRIP_HEIGHT).toBe(40)
  })
})
