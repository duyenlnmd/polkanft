import React from 'react'
import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd, useProfile } from 'state/hooks'
import { Injected } from 'utils/web3React'
import config from './config'

const Menu: React.FC = ({ children }) => {
  // const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { account, activate, active, deactivate, chainId, library, error } = useWeb3React()

  async function connect() {
    try {
      await activate(Injected)
    } catch (ex) {
      console.log(ex)
    }
  }
  async function disconnect() {
    try {
      await deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div>
      {/* <UikitMenu
        account={account}
        login={login}
        logout={logout}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        cakePriceUsd={cakePriceUsd.toNumber()}
        links={config(t)}
        profile={{
          username: profile?.username,
          image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
          profileLink: '/profile',
          noProfileLink: '/profile',
          showPip: !profile?.username,
        }}
        {...props}
      /> */}
      <nav className="flex justify-between items-center py-4 bg-white">
        <a href="/">
          <div className="flex-shrink-0 ml-10 cursor-pointer">
            <i className="fas fa-drafting-compass fa-2x text-orange-500" />
            <img className="ml-1" src="https://dual.cafeswap.finance/images/cafe-logo-covid.svg" width={100} alt="" />
          </div>
        </a>

        <ul className="hidden sm:flex overflow-x-hidden font-semibold">
          <li className="flex items-center mx-3 px-2 py-2 text-gray-700 border-gray-100 group cursor-pointer">
            <span className="mr-3">
              <span>
                <img
                  width={15}
                  alt="DEXp"
                  src="https://cafeswap.finance/static/media/icon_DEX.54a9ff86.svg"
                  style={{ fill: 'darkblue' }}
                />
              </span>
            </span>
            <a className="cursor-pointer group-hover:text-blue-500 text-blue-800" href="https://testinglnmd.web.app">
              Trade
            </a>
          </li>
          {/** <li className="flex items-center mx-3 px-2 py-2 text-gray-700 border-gray-100 cursor-pointer hover:bg-gray-100">
            <svg
              className="w-5 mr-3"
              focusable="false"
              strokeWidth="0px"
              stroke="darkblue"
              fill="darkblue"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 8c-.55 0-1 .45-1 1v6c0 1.1.9 2 2 2h8c.55 0 1-.45 1-1s-.45-1-1-1H8V9c0-.55-.45-1-1-1z" />
              <path d="M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-.5 8h-7c-.28 0-.5-.22-.5-.5V7h8v3.5c0 .28-.22.5-.5.5zM3 12c-.55 0-1 .45-1 1v6c0 1.1.9 2 2 2h8c.55 0 1-.45 1-1s-.45-1-1-1H4v-6c0-.55-.45-1-1-1z" />
            </svg>
            <a className="cursor-pointer text-blue-800" href="#/">
              Vaults
            </a>
          </li>
          <li className="flex items-center mx-3 px-2 py-2 text-gray-700 border-gray-100 cursor-pointer hover:bg-gray-100">
            <svg
              className="w-5 mr-3"
              focusable="false"
              strokeWidth="0px"
              stroke="darkblue"
              fill="darkblue"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z" />
            </svg>
            <a className="cursor-pointer text-blue-800" href="#/">
              Dual Farms
            </a>
          </li> */}
          <li className="flex items-center mx-3 px-2 py-2 text-gray-700 border-gray-100 group cursor-pointer">
            <img
              className="mr-3"
              alt="Farms"
              src="https://cafeswap.finance/static/media/icon_Farms.5f9059ac.svg"
              width={15}
              height={15}
              style={{ fill: 'darkblue' }}
            />
            <a className="cursor-pointer group-hover:text-blue-500 text-blue-800" href="/farms">
              Farms
            </a>
          </li>
          <li className="flex items-center mx-3 px-2 py-2 text-gray-700 group border-gray-100 cursor-pointer">
            <a href="/pools" className="inline-flex">
              <img
                className="mr-3"
                alt="Staking"
                src="https://cafeswap.finance/static/media/icon_Staking.a2c51c37.svg"
                width={15}
                height={15}
                style={{ filter: 'none' }}
              />
              <div className="cursor-pointer group-hover:text-blue-500 text-blue-800">Liquidity</div>
            </a>
          </li>
          {/** <li className="flex items-center mx-3 px-2 py-2 text-gray-700 border-gray-100 cursor-pointer hover:bg-gray-100">
            <img
              className="mr-3"
              alt="Staking"
              src="	https://cafeswap.finance/static/media/farm.07947280.svg"
              width={15}
              height={15}
              style={{}}
            />
            <a className="cursor-pointer text-blue-800" href="#/">
              ICO
            </a>
          </li>
          <li className="flex items-center mx-3 px-2 py-2 text-gray-700 border-gray-100 cursor-pointer hover:bg-gray-100">
            <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
              <svg
                className="w-5 mr-3"
                focusable="false"
                strokeWidth="0px"
                stroke="darkblue"
                fill="darkblue"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </span>
            <a className="cursor-pointer text-blue-800" href="#/">
              Games
            </a>
            <svg
              className="w-4"
              focusable="false"
              strokeWidth="0px"
              stroke="darkblue"
              fill="darkblue"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'rgb(207, 53, 46)', fontSize: '0.9em' }}
            >
              <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
            </svg>
          </li>
          <li className="flex items-center mx-3 px-2 py-2 text-gray-700 border-gray-100 cursor-pointer hover:bg-gray-100">
            <div className="relative lg:block">
              <div>
                <button
                  type="button"
                  className="hover:bg-gray-100 cursor-pointer flex items-center space-x-1 focus:outline-none"
                >
                  <span>
                    <svg
                      className="w-4"
                      focusable="false"
                      strokeWidth="0px"
                      stroke="darkblue"
                      fill="darkblue"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </span>
                  <span className="text-blue-800 font-semibold">More</span>{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800"
                style={{}}
              >
                <div className="w-40">
                  <a
                    target="_blank"
                    href="/cheatsheet"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                  >
                    {' '}
                    Cheatsheet{' '}
                  </a>
                  <a
                    target="_blank"
                    href="/gradient-generator"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                  >
                    {' '}
                    Gradient Generator{' '}
                  </a>
                </div>
              </div>
            </div>
          </li> */}
          <div className="flex align-items-center">
            <button className="mr-3" tabIndex={0} type="button">
              <span className="w-3">
                <svg
                  className="w-5 MuiSvgIcon-fontSizeSmall"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ color: 'brown' }}
                >
                  <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5v11c3.03 0 5.5-2.47 5.5-5.5S15.03 6.5 12 6.5z" />
                </svg>
              </span>
            </button>
            {active ? (
              <button
                type="button"
                style={{
                  background: 'darkblue',
                  color: 'white',
                  borderRadius: '5px',
                  textTransform: 'none',
                  transform: 'scale(0.8)',
                  fontSize: '20px',
                }}
                className="px-9 connect-btn"
              >
                <a className="cursor-pointer" href="#/">
                  <span className="">
                    {`${account.slice(0, 3)}...${account.slice(account.length - 5, account.length)}`}
                  </span>
                </a>
              </button>
            ) : (
              <button
                className="pl-2 pr-2 connect-btn"
                tabIndex={0}
                type="button"
                style={{
                  background: 'linear-gradient(140deg, darkblue 0%, rgb(0, 0, 0) 100%)',
                  color: 'white',
                  borderRadius: '5px',
                  textTransform: 'none',
                  transform: 'scale(0.8)',
                }}
                onClick={connect}
              >
                <span className="">
                  <p className="text-truncate p-2 text-lg m-0">Connect Wallet</p>
                </span>
              </button>
            )}
            {/** <li className="border-r-2 w-5" />
            <button
              className="w-6 mr-3"
              tabIndex={0}
              type="button"
              aria-controls="customized-menu"
              aria-haspopup="true"
              style={{ padding: '5px' }}
            >
              <span className="w-3">
                <img src="https://cafeswap.finance/images/tokens/wbnb.png" alt="bsc" height={15} width={15} />
              </span>
              <span className="MuiTouchRipple-root" />
            </button>
             <button
              className="w-6 mr-3"
              tabIndex={0}
              type="button"
              aria-controls="customized-menu"
              aria-haspopup="true"
            >
              <span className="w-3">
                <svg
                  className="w-5"
                  focusable="false"
                  strokeWidth="0px"
                  stroke="darkblue"
                  fill="darkblue"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ fontSize: '18px' }}
                >
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                </svg>
              </span>
            </button>
            <div className="flex justify-between" style={{ alignItems: 'center' }}>
              <a
                className="mr-3 text-red-700"
                tabIndex={0}
                aria-disabled="false"
                href="https://twitter.com/cafeswapfinance"
              >
                <span className="w-3">
                  <svg
                    className="w-5"
                    focusable="false"
                    strokeWidth="0px"
                    stroke="darkblue"
                    fill="darkblue"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{ fontSize: '18px' }}
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </span>
              </a>
              <a className="mr-3" tabIndex={0} aria-disabled="false" href="https://t.me/CafeSwap">
                <span className="w-3">
                  <svg
                    className="w-5"
                    focusable="false"
                    strokeWidth="0px"
                    stroke="darkblue"
                    fill="darkblue"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{ fontSize: '18px' }}
                  >
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                  </svg>
                </span>
              </a>
              <a
                className="mr-3"
                tabIndex={0}
                aria-disabled="false"
                href="https://discord.com/invite/zYGtBjkqsy"
                style={{ color: 'rgb(29, 161, 241)' }}
              >
                <span className="w-3">
                  <img
                    src="https://cafeswap.finance/static/media/discord.c94320f0.svg"
                    alt="discord"
                    width={18}
                    height={18}
                    style={{ fill: 'darkblue', strokeWidth: '0px', stroke: 'darkblue' }}
                  />
                </span>
              </a>
              <a
                className="mr-3"
                tabIndex={0}
                aria-disabled="false"
                href="https://www.reddit.com/r/Cafeswapfinance"
                style={{ color: 'rgb(255, 69, 0)' }}
              >
                <span className="w-3">
                  <svg
                    className="w-5"
                    focusable="false"
                    strokeWidth="0px"
                    stroke="darkblue"
                    fill="darkblue"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{ fontSize: '18px' }}
                  >
                    <path d="M22 12.14a2.19 2.19 0 0 0-3.71-1.57 10.93 10.93 0 0 0-5.86-1.87l1-4.7 3.27.71a1.56 1.56 0 1 0 .16-.76l-3.64-.77c-.11-.02-.22 0-.29.06-.09.05-.14.14-.16.26l-1.11 5.22c-2.33.07-4.43.78-5.95 1.86A2.2 2.2 0 0 0 4.19 10a2.16 2.16 0 0 0-.9 4.15 3.6 3.6 0 0 0-.05.66c0 3.37 3.92 6.12 8.76 6.12s8.76-2.73 8.76-6.12c0-.21-.01-.44-.05-.66A2.21 2.21 0 0 0 22 12.14M7 13.7c0-.86.68-1.56 1.54-1.56s1.56.7 1.56 1.56a1.56 1.56 0 0 1-1.56 1.56c-.86.02-1.54-.7-1.54-1.56m8.71 4.14C14.63 18.92 12.59 19 12 19c-.61 0-2.65-.1-3.71-1.16a.4.4 0 0 1 0-.57.4.4 0 0 1 .57 0c.68.68 2.14.91 3.14.91s2.47-.23 3.14-.91a.4.4 0 0 1 .57 0c.14.16.14.41 0 .57m-.29-2.56c-.86 0-1.56-.7-1.56-1.56a1.56 1.56 0 0 1 1.56-1.56c.86 0 1.58.7 1.58 1.56a1.6 1.6 0 0 1-1.58 1.56z" />
                  </svg>
                </span>
              </a>
            </div> */}
          </div>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default Menu
