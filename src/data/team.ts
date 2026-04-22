import type { TeamMember } from '../types'
import { assetUrl } from '../utils/assetUrl'

// Avatars: drop your photo files into public/images/team/ and reference them
// with assetUrl('images/team/filename.jpg') — this ensures the path works on
// both localhost and GitHub Pages (which serves from /EiT_Pyton/).
export const team: TeamMember[] = [
  {
    name: 'Hourshid Bakhtiari',
    role: 'Designer',
    avatar: assetUrl('images/team/hourshid.jpg'),
    description: 'Hourshid studerer Design av tjenester, teknologi og samhandling og er en svært engasjert student.',
  },
  {
    name: 'Kenneth Solvoll',
    role: 'Ordstyrer',
    avatar: assetUrl('images/team/kenneth.jpg'),
    description: 'Kenneth studerer Datateknologi: Programvaresystemer, mens han jobber fulltid som IT-konsulent.',
  },
  {
    name: 'Agnes Hasle Kühle-Hansen',
    role: 'Bama-kontakt',
    avatar: assetUrl('images/team/agnes.jpg'),
    description: 'Agnes studerer Ledelse av innovasjon og digital sikkerhet, og viser mye entusiasme for fremtidens mat.',
  },
  {
    name: 'Victor Lidsheim Abrahamsen',
    role: 'Produktansvarlig',
    avatar: assetUrl('images/team/victor.jpg'),
    description: 'Victor studerer Produktutvikling og Produksjon, og er svært aktiv i frivillig studentorganisasjoner som Revolve.',
  },
  {
    name: 'Oscar Willetts Gaup',
    role: 'Sekretær',
    avatar: assetUrl('images/team/oscar.jpg'),
    description: 'Oscar studerer Økonomi og administrasjon, mens han jobber fulltid i Forsvaret.',
  },
  {
    name: 'Mathias Johansen',
    role: 'Overleaf-expert',
    avatar: assetUrl('images/team/mathias.png'),
    description: 'Mathias studerer Mekatronikk og automasjon, og han er glad i å reise.',
  },
]
