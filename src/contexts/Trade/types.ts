export enum TRADE_TYPES {
  MARKET = "Market",
  LIMIT = "Limit",
  STOP = "Stop",
  UNDEFINED = "",
}

export type Security = {
  symbol: string;
  price: number;
};
