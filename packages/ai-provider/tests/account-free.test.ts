import { describe, expect, it } from 'vitest'
import { defaultAiSettings } from '../src/providers'
import { withoutAccountLogin } from '../src/account-free'

describe('desktop without account login', () => {
  it('uses API settings and free search instead of account-dependent defaults', () => {
    const original = defaultAiSettings()
    const snapshot = JSON.stringify(original)
    const result = withoutAccountLogin(original)
    expect(result.provider).toBe('custom')
    expect(result.gskToolsEnabled).toBe(false)
    expect(result.media?.imageProvider).toBe('openai')
    expect(result.media?.videoAnalysisProvider).toBe('gemini')
    expect(result.search?.provider).toBe('parallel')
    expect(JSON.stringify(original)).toBe(snapshot)
  })

  it('preserves a configured endpoint and its credentials', () => {
    const settings = defaultAiSettings()
    settings.provider = 'custom'
    settings.providers.custom = {
      baseUrl: 'http://localhost:11434/v1',
      model: 'local-model',
      apiKey: '',
    }
    const result = withoutAccountLogin(settings)
    expect(result.provider).toBe('custom')
    expect(result.providers).toEqual(settings.providers)
  })

  it('keeps the selected API provider while the user is still configuring it', () => {
    const settings = defaultAiSettings()
    settings.provider = 'openai'
    settings.providers.openai.apiKey = ''
    const result = withoutAccountLogin(settings)
    expect(result.provider).toBe('openai')
    expect(result.providers).toEqual(settings.providers)
  })

  it('preserves CLI access and existing API media and search selections', () => {
    const settings = defaultAiSettings()
    settings.provider = 'codex'
    settings.media!.imageProvider = 'openai'
    settings.media!.analysisProvider = 'openai'
    settings.media!.videoAnalysisProvider = 'gemini'
    settings.search!.provider = 'tavily'
    const result = withoutAccountLogin(settings)
    expect(result.provider).toBe('codex')
    expect(result.media).toEqual(settings.media)
    expect(result.search).toEqual(settings.search)
  })
})
