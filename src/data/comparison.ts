import type { ComparisonRow } from '../types'

// TODO: replace with real data sourced from the research report.
// Values below are placeholders to validate layout and typography only.
export const comparison: ComparisonRow[] = [
  {
    source: 'Pyton',
    highlight: true,
    metrics: [
      { icon: '💧', label: 'Vann',   value: '~0.3', unit: 'L/g kjøtt' },
      { icon: '🌾', label: 'FCR',    value: '4:1' },
      { icon: '🏞️', label: 'Areal', value: '< 1', unit: 'm²/kg kjøtt' },
      { icon: '💨', label: 'CO₂',    value: 'Svært lavt*' },
    ],
  },
  {
    source: 'Storfe',
    metrics: [
      { icon: '💧', label: 'Vann',   value: '~15',  unit: 'L/g kjøtt' },
      { icon: '🌾', label: 'FCR',    value: '25:1' },
      { icon: '🏞️', label: 'Areal', value: '~326', unit: 'm²/kg kjøtt' },
      { icon: '💨', label: 'CO₂',    value: '~100', unit: 'kg/kg kjøtt' },
    ],
  },
  {
    source: 'Kylling',
    metrics: [
      { icon: '💧', label: 'Vann',   value: '~4', unit: 'L/g kjøtt' },
      { icon: '🌾', label: 'FCR',    value: '2:1' },
      { icon: '🏞️', label: 'Areal', value: '~12', unit: 'm²/kg kjøtt' },
      { icon: '💨', label: 'CO₂',    value: '~10', unit: 'kg/kg kjøtt' },
    ],
  },
  {
    source: 'Svin',
    metrics: [
      { icon: '💧', label: 'Vann',   value: '~6', unit: 'L/g kjøtt' },
      { icon: '🌾', label: 'FCR',    value: '3:1' },
      { icon: '🏞️', label: 'Areal', value: '~17', unit: 'm²/kg kjøtt' },
      { icon: '💨', label: 'CO₂',    value: '~12', unit: 'kg/kg kjøtt' },
    ],
  },
]
