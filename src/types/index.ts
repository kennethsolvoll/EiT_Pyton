export interface Persona {
  name: string
  segment: string
  percentage: number
  description: string
  avatar: string
  quote?: string
  traits?: string[]
  scores?: PersonaScore
}

export interface TeamMember {
  name: string
  role?: string
  avatar: string
  description?: string
}

export interface PersonaScore {
  openness: number        // Åpenhet for nytt (0–100)
  sustainability: number  // Bærekraft-fokus (0–100)
  changeReadiness: number // Endringspotensial (0–100)
}

export interface FindingCard {
  icon: string
  title: string
  summary: string
  details: string[]
}

export interface ComparisonMetric {
  icon: string
  label: string
  value: string
  unit?: string
}

export interface ComparisonRow {
  source: string
  highlight?: boolean
  metrics: ComparisonMetric[]
}

export interface NavLink {
  hash: string
  label: string
}
