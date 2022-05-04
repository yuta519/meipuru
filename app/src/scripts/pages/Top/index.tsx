import { GlobalHeader } from '../../components/navigations/GlobalHeader'
import { GlobalFooter } from '../../components/navigations/GlobalFooter'

export const TopPage = () => {
  return (
    <>
      <GlobalHeader />
      <img
        src="/assets/vancouver-1.jpeg"
        alt="vancouver"
        width={'100%'}
      />
      <GlobalFooter />
    </>
  )
}
