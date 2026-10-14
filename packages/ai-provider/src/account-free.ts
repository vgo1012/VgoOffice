import type { AiSettings } from './types'

/** Keep configured API/CLI access while removing account-dependent desktop routes. */
export function withoutAccountLogin(settings: AiSettings): AiSettings {
  return {
    ...settings,
    provider: settings.provider === 'genspark' ? 'custom' : settings.provider,
    gskToolsEnabled: false,
    ...(settings.media
      ? {
          media: {
            ...settings.media,
            imageProvider:
              settings.media.imageProvider === 'genspark' ? 'openai' : settings.media.imageProvider,
            analysisProvider:
              settings.media.analysisProvider === 'genspark'
                ? 'openai'
                : settings.media.analysisProvider,
            videoAnalysisProvider:
              settings.media.videoAnalysisProvider === 'genspark'
                ? 'gemini'
                : settings.media.videoAnalysisProvider,
          },
        }
      : {}),
    ...(settings.search
      ? {
          search: {
            ...settings.search,
            provider:
              settings.search.provider === 'genspark' ? 'parallel' : settings.search.provider,
          },
        }
      : {}),
  }
}
