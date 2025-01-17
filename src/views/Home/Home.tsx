import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
  color: white;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`


const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div> {/* bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 */}
      <Page>
        <Hero className="rounded-xl">
          <h1 className="text-purple-700 text-5xl font-semibold">
            PolkaNFT 
          </h1>
          <h2 className="text-black lg:text-md text-base font-semibold my-3">
            The #1 AMM, Yield Farms and NFT Marketplace on Polkadot
          </h2>
        </Hero>
        <div>
          <Cards>
              <FarmStakingCard />
              <div style={{ }}>
                  <div className="mb-3">
                      <TotalValueLockedCard />
                  </div>
                  <Cards>
                      <div className="mr-3 mt-3">
                          <EarnAPRCard />
                      </div>
                      <div className="mt-3 mt-3">
                          <EarnAssetCard />
                      </div>                    
                  </Cards>
              </div>
          </Cards>
          {/* <Cards> 
              <CakeStats />
              {/* <FarmStakingCard /> */}
          {/* </Cards> */}
        </div>
      </Page>
    </div>
  )
}

export default Home
