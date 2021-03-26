import DateTimeFormat = Intl.DateTimeFormat;

export interface Asset {
  name?: string;
  price?: number;
  amount: number;
}

export interface CryptoCurrency extends Asset {
  currency?: string;
  id: string;
  status?: string;
  price_date?: string;
  price_timestamp?: string; // Actually a date
  symbol?: string;
  circulating_supply?: number;
  max_supply?: number;
  logo_url?: string;
  market_cap?: number;
  transparent_market_cap?: number;
  num_exchanges?: number;
  num_pairs?: number;
  num_pairs_unmapped?: number;
  first_candle?: string; // Actually a date
  first_trade?: string; // Actually a date
  first_order_book?: string; // Actually a date
  first_priced_at?: string; // Actually a date
  rank?: number;
  rank_delta?: number;
  high?: number;
  high_timestamp?: string; // Actually a date
  _1h?: Interval;
  _1d?: Interval;
  _30d?: Interval;
  _365d?: Interval;
  ytd?: string;
  weekPriceData?: Array<DailyPriceData>;
}

export interface CryptoPrimitive extends Asset {
  id: string;
  metadata?: CryptoMetadata;
}

export interface CryptoMetadata {
  logo_url: string;
}

export interface DailyPriceData {
  date: string;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  closePrice: number;
  volume: number;
  marketCap: number;
}

export interface Interval {
  price_change?: number;
  price_change_pct?: number;
  volume?: number;
  volume_change?: number;
  volume_change_pct?: number;
  market_cap_change?: number;
  market_cap_change_pct?: number;
}

export interface Stock extends Asset {
  company: string;
}

export interface User {
  first_name: string;
  last_name: string;
  net_worth: number;
  assets: Map<string, Array<Asset>>;
}
