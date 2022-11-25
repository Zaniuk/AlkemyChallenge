import { Operation } from "../common/types";
import httpService from "../services/httpService";

const getBalance = async () => {
    const res = await httpService.get('/operations');
    const operations: Operation[] = res.data;
    const balance = operations.reduce((acc, operation) => {
        return acc + operation.amount;
    }
    , 0);
    return balance;
}
export default getBalance;

