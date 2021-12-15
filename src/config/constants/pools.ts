import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 174,
    stakingToken: tokens.cake,
    earningToken: tokens.oddz,
    contractAddress: {
      97: '',
      56: '0x44d1f81e80e43e935d66d65874354ef91e5e49f6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.4843',
  },
  {
    sousId: 173,
    stakingToken: tokens.cake,
    earningToken: tokens.bondly,
    contractAddress: {
      97: '',
      56: '0x4ea43fce546975aae120c9eeceb172500be4a02b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.6741',
  },
  {
    sousId: 172,
    stakingToken: tokens.cake,
    earningToken: tokens.marsh,
    contractAddress: {
      97: '',
      56: '0x567fd708e788e51b68666b9310ee9df163d60fae',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.1108',
  },  
  {
    sousId: 10,
    stakingToken: tokens.cake,
    earningToken: tokens.nya,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9',
    },
    poolCategory: PoolCategory.COMMUNITY,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '10',
    isFinished: true,
  },
  {
    sousId: 9,
    stakingToken: tokens.cake,
    earningToken: tokens.ctk,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 8,
    stakingToken: tokens.cake,
    earningToken: tokens.twt,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 7,
    stakingToken: tokens.cake,
    earningToken: tokens.inj,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
  },
]

export default pools
