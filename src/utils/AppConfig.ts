import type { LocalizationResource } from '@clerk/types';
import { enUS } from '@clerk/localizations';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en'],
  defaultLocale: 'en',
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
};

export const ClerkLocalizations = {
  defaultLocale: enUS,
  supportedLocales,
};
