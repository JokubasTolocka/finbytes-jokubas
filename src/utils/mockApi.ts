import { Trade } from "../contexts/Trade/types";

const mockApi = (data: Trade): Promise<Trade> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000));

export default mockApi;
