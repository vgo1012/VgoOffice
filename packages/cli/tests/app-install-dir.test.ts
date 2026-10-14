import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { appBinaryForResources } from '../src/resources'

describe('appBinaryForResources', () => {
  it('finds the app in a custom Windows install directory', () => {
    expect(
      appBinaryForResources(join('D:\\Apps\\GenOffice', 'resources'), 'win32', (p) =>
        p.endsWith('GenOffice.exe'),
      ),
    ).toBe(join('D:\\Apps\\GenOffice', 'GenOffice.exe'))
  })

  it('resolves the same binary for the default Windows install directory', () => {
    const localAppData = 'C:\\Users\\test\\AppData\\Local'
    const resources = join(localAppData, 'Programs', 'GenOffice', 'resources')
    expect(appBinaryForResources(resources, 'win32', (p) => p.endsWith('GenOffice.exe'))).toBe(
      join(localAppData, 'Programs', 'GenOffice', 'GenOffice.exe'),
    )
  })

  it('finds the app in a custom macOS bundle location', () => {
    expect(
      appBinaryForResources(join('/Volumes/Work/GenOffice.app/Contents/Resources'), 'darwin', (p) =>
        p.endsWith('GenOffice'),
      ),
    ).toBe(join('/Volumes/Work/GenOffice.app/Contents/MacOS/GenOffice'))
  })

  it('finds the app in a custom Linux prefix', () => {
    expect(appBinaryForResources(join('/opt/genoffice-custom/resources'), 'linux')).toBe(
      join('/opt/genoffice-custom/genoffice'),
    )
  })

  it('uses VgoOffice independently of directory names and prefers it over legacy binaries', () => {
    const install = join('D:\\Company Tools', '办公软件')
    const resources = join(install, 'resources')
    expect(appBinaryForResources(resources, 'win32', () => false)).toBe(
      join(install, 'VgoOffice.exe'),
    )
    expect(appBinaryForResources(resources, 'win32', () => true)).toBe(
      join(install, 'VgoOffice.exe'),
    )
    expect(
      appBinaryForResources(
        join('/Volumes/Work/Custom.app/Contents/Resources'),
        'darwin',
        () => true,
      ),
    ).toBe(join('/Volumes/Work/Custom.app/Contents/MacOS/VgoOffice'))
  })

  it('still finds Eoffice installations after the executable is renamed', () => {
    for (const platform of ['win32', 'darwin'] as const) {
      const resources = join('D:\\Company Tools', 'resources')
      expect(
        appBinaryForResources(resources, platform, (p) =>
          p.endsWith(`Eoffice${platform === 'win32' ? '.exe' : ''}`),
        ),
      ).toBe(
        platform === 'win32'
          ? join('D:\\Company Tools', 'Eoffice.exe')
          : join('D:\\Company Tools', 'MacOS', 'Eoffice'),
      )
    }
  })
})
