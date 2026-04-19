export interface Persona {
  name: string
  segment: string
  percentage: number
  description: string
  avatar: string
}

export interface TeamMember {
  name: string
  role?: string
  avatar: string
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
