import type { Persona } from '../types'

export const personas: Persona[] = [
  {
    name: 'Kari Hansen',
    segment: 'Den skeptiske mainstream',
    percentage: 60,
    description:
      'Forbinder slanger med reptiler og giftighet. Sosiale normer og følelsesmessig avsky overstyrer miljøargumenter, selv når bærekraftsgevinstene er dokumentert.',
    avatar: '/images/personas/kari.png',
    quote: '«Slanger er jo ikke mat. Det høres bare ekkelt ut.»',
    traits: [
      'Litt negativ holdning: forbinder slanger med gift og krypdyr',
      'Lav eksotisk matvareerfaring; bryter med norske matnormer',
      'Sosial norm og omdømme stopper før smak vurderes',
    ],
    scores: {
      openness: 20,
      sustainability: 35,
      changeReadiness: 30,
    },
  },
  {
    name: 'Lena Simensen',
    segment: 'Den miljøbevisste pragmatiker',
    percentage: 25,
    description:
      'Rasjonell og datadrevet. Åpen for å prøve pytonkjøtt dersom forskning bekrefter at det er mer bærekraftig enn kylling og har sammenlignbar ernæringsprofil.',
    avatar: '/images/personas/lena.png',
    quote: '«Hvis forskning viser at det er mer bærekraftig enn kylling, vil jeg prøve!»',
    traits: [
      'Nøytral holdning — bestemmer seg på bakgrunn av fakta',
      'Ville inkludert slange ved bevist bærekraft',
      'Er miljøbevisst rasjonell og datadrevet',
    ],
    scores: {
      openness: 92,
      sustainability: 80,
      changeReadiness: 90,
    },
  },
]
