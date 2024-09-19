export enum OrderEnum {
  MARKET = "Market",
  LIMIT = "Limit",
  STOP = "Stop",
  UNDEFINED = "",
}

export type Security = {
  symbol: string;
  price: number;
};

export type Trade = {
  security: Security;
  amount: number;
  order: OrderEnum;
};
