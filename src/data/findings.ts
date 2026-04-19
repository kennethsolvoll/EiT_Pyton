import type { FindingCard } from '../types'

export const findings: FindingCard[] = [
  {
    icon: '🌿',
    title: 'Miljø & klima',
    summary:
      'Ekstremt effektiv fôrutnyttelse og lav ressursbruk sammenlignet med tradisjonelle kjøttkilder.',
    details: [
      'Fôrkonverteringsforhold på omtrent 4:1.',
      'Kan utnytte avfallsprotein som ellers ikke brukes til mat.',
      'Tåler lange fasteperioder — reduserer fôrbehov i drift.',
      'Krever vesentlig mindre vann og areal enn storfe og svin.',
    ],
  },
  {
    icon: '💰',
    title: 'Økonomi',
    summary:
      'Lave løpende driftskostnader, men svært høye oppstartskostnader og betydelig markedsrisiko i Norge.',
    details: [
      'Lavere kostnader til fôr og arbeid per produsert kilo.',
      'Investering i anlegg overstiger 3 millioner NOK.',
      'Markedet i Norge er uprøvd og risikoen er høy.',
    ],
  },
  {
    icon: '🧠',
    title: 'Sosialt (hovedutfordringen)',
    summary:
      'Norske forbrukere mangler kulturell aksept for slangekjøtt — emosjonell avsky dominerer.',
    details: [
      'Sosiale normer overstyrer miljøargumenter i kjøpsbeslutninger.',
      'Slanger assosieres sterkt med reptiler og giftighet.',
      'Holdningsendring krever tid og bred folkelig forankring.',
    ],
  },
]
