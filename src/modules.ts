import type { ReactNode } from 'react';
import {
  IconTaminot, IconNaryad, IconShartnoma, IconHR, IconTulov, IconPlus,
} from './icons';

export type ModuleStatus = 'live' | 'beta' | 'soon' | 'planned';

export interface AppModule {
  id: string;
  /** i18n kaliti (UZ/RU/EN dan title/desc/tag olinadi) */
  i18nKey: string;
  /** Qaysi URL'ga olib boradi (live/beta uchun) */
  href?: string;
  /** Status — interaktivlikni belgilaydi */
  status: ModuleStatus;
  /** CSS class suffix (hover glow rangi uchun) — ta/nr/sh/hr/tl/empty */
  variant: 'ta' | 'nr' | 'sh' | 'hr' | 'tl' | 'empty';
  /** Footer'dagi kichik statistika (masalan "284 so'rov") */
  statLabel?: string;
  /** Icon SVG */
  icon: ReactNode;
}

export const MODULES: AppModule[] = [
  {
    id: 'taminot',
    i18nKey: 'taminot',
    href: 'https://taminot.xonapps.uz',
    status: 'live',
    variant: 'ta',
    statLabel: '284',
    icon: IconTaminot,
  },
  {
    id: 'naryad',
    i18nKey: 'naryad',
    href: 'https://naryad.xonapps.uz',
    status: 'soon',
    variant: 'nr',
    statLabel: '42',
    icon: IconNaryad,
  },
  {
    id: 'shartnoma',
    i18nKey: 'shartnoma',
    href: 'https://shartnoma.xonapps.uz',
    status: 'soon',
    variant: 'sh',
    statLabel: '127',
    icon: IconShartnoma,
  },
  {
    id: 'hr',
    i18nKey: 'hr',
    href: 'https://hr.xonapps.uz',
    status: 'beta',
    variant: 'hr',
    statLabel: '316',
    icon: IconHR,
  },
  {
    id: 'tulov',
    i18nKey: 'tulov',
    href: 'https://tulov.xonapps.uz',
    status: 'soon',
    variant: 'tl',
    statLabel: '98.7%',
    icon: IconTulov,
  },
  {
    id: 'slot',
    i18nKey: 'slot',
    status: 'planned',
    variant: 'empty',
    statLabel: 'Q3 · 2026',
    icon: IconPlus,
  },
];
