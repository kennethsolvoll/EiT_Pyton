import type { ComparisonRow } from '../types'

// TODO: replace with real data sourced from the research report.
// Values below are placeholders to validate layout and typography only.
export const comparison: ComparisonRow[] = [
  {
    source: 'Pyton',
    highlight: true,
    metrics: [
      { icon: '💧', label: 'Vann',   value: '~0.3', unit: 'L/g protein' },
      { icon: '🌾', label: 'FCR',    value: '4:1' },
      { icon: '🏞️', label: 'Areal', value: 'Lavt' },
      { icon: '💨', label: 'CO₂',    value: 'Lavt' },
    ],
  },
  {
    source: 'Storfe',
    metrics: [
      { icon: '💧', label: 'Vann',   value: '~15',  unit: 'L/g protein' },
      { icon: '🌾', label: 'FCR',    value: '25:1' },
      { icon: '🏞️', label: 'Areal', value: 'Svært høyt' },
      { icon: '💨', label: 'CO₂',    value: 'Svært høyt' },
    ],
  },
  {
    source: 'Kylling',
    metrics: [
      { icon: '💧', label: 'Vann',   value: '~4',   unit: 'L/g protein' },
      { icon: '🌾', label: 'FCR',    value: '2:1' },
      { icon: '🏞️', label: 'Areal', value: 'Middels' },
      { icon: '💨', label: 'CO₂',    value: 'Middels' },
    ],
  },
  {
    source: 'Svin',
    metrics: [
      { icon: '💧', label: 'Vann',   value: '~6',   unit: 'L/g protein' },
      { icon: '🌾', label: 'FCR',    value: '3:1' },
      { icon: '🏞️', label: 'Areal', value: 'Høyt' },
      { icon: '💨', label: 'CO₂',    value: 'Høyt' },
    ],
  },
]
