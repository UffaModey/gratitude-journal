import { HeroLayout1, Entries, NavBar } from '../src/ui-components'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroLayout1 width='100%' marginBottom='20px'/>
      <Entries />
    </div>
  )
}
