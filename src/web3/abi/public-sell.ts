export default [
  {
    inputs: [
      { internalType: 'address', name: '_releaseContract', type: 'address' },
      { internalType: 'uint256', name: '_startDays', type: 'uint256' },
      { internalType: 'uint256', name: '_periods', type: 'uint256' },
      { internalType: 'address', name: '_token', type: 'address' },
      { internalType: 'address', name: '_fundToken', type: 'address' },
      { internalType: 'address', name: '_beneficiary', type: 'address' },
      { internalType: 'address', name: '_feeReceiver', type: 'address' },
      { internalType: 'uint256', name: '_salsFeeRate', type: 'uint256' },
      { internalType: 'uint256', name: '_tokenPrice', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'holder', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'FundClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: '_operator', type: 'address' },
      { indexed: false, internalType: 'bool', name: '_onSale', type: 'bool' },
    ],
    name: 'OnSaleUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'buyer', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'fundAmount', type: 'uint256' },
    ],
    name: 'Sold',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: '_operator', type: 'address' },
      { indexed: false, internalType: 'uint256', name: '_fundAmountForOneToken', type: 'uint256' },
    ],
    name: 'TokenPriceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'holder', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'Withdrawed',
    type: 'event',
  },
  { inputs: [], name: 'beneficiary', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  {
    inputs: [],
    name: 'buyLimit',
    outputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenAmount', type: 'uint256' },
      { internalType: 'address', name: '_beneficiary', type: 'address' },
    ],
    name: 'buyTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenAmount', type: 'uint256' },
      { internalType: 'address', name: '_beneficiary', type: 'address' },
      { internalType: 'bytes', name: 'signature', type: 'bytes' },
    ],
    name: 'buyTokensWithSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'claimFund', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  { inputs: [], name: 'feeRceiever', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'fundAccount',
    outputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'claimed', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'fundToken', outputs: [{ internalType: 'contract IERC20Ext', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'manager', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'maxBuyLimit', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'minBuyLimit', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'onSale', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'onWhitelistMode', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'periods', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'releaseContract', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'salesFeeRate', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'salesRevenue', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'salesRevenueClaimed', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  {
    inputs: [{ internalType: 'address', name: '_beneficiary', type: 'address' }],
    name: 'setBeneficiary',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_minBuyLimit', type: 'uint256' },
      { internalType: 'uint256', name: '_maxBuyLimit', type: 'uint256' },
    ],
    name: 'setBuyLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_feeReceiver', type: 'address' }],
    name: 'setFeeReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_manager', type: 'address' }],
    name: 'setManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [{ internalType: 'bool', name: '_onSale', type: 'bool' }], name: 'setOnSale', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'uint256', name: '_fundAmountForOneToken', type: 'uint256' }],
    name: 'setTokenPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: '_onWhitelistMode', type: 'bool' }],
    name: 'setWhitelistMode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'startDays', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'token', outputs: [{ internalType: 'contract IERC20Ext', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'tokenPrice', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'tokensOnSale', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [], name: 'tokensSold', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  { inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'withdraw', outputs: [], stateMutability: 'nonpayable', type: 'function' },
];
