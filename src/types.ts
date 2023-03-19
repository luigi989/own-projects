export interface Element {
  name: string
  appearance: string | null
  atomic_mass: number
  boil: number | null
  category: string
  density: number | null
  discovered_by: string | null
  melt: number | null
  molar_heat: number | null
  named_by: string | null
  number: number
  period: number
  phase: string
  source: string
  spectral_img: string | null
  summary: string
  symbol: string
  xpos: number
  ypos: number
  shells: number[]
  electron_configuration: string
  electron_configuration_semantic: string
  electron_affinity: number | null
  electronegativity_pauling: number | null
  ionization_energies: number[]
  cpkHex: string | null
}