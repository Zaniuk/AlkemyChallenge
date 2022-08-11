import { getAll } from "./helpers";
export const monthlyOperationsResume = async (user) => {
    const operationList = await getAll(user)
    let Services = 0
    let Market = 0
    let Entertainment = 0
    let Shopping = 0
    let Others = 0
    operationList.forEach((op) => {
        switch (op.concept) {
            case 'Services':
                Services += op.amount
                break;
            case 'Market':
                Market += op.amount
                break;
            case 'Entertainment':
                Entertainment += op.amount
                break;
            case 'Shopping':
                Shopping += op.amount
                break;
            case 'Others':
                Others += op.amount
                break;
        }
    })

    const res = {
        data: [Services, Market, Entertainment, Shopping, Others],
        labels:
            [
                'Services',
                'Market',
                'Entertainment',
                'Shopping',
                'Others'
            ],
        colors: ['#14d0f0', '#7f73ff', '#ff83c3', '#ffe552', '#ffe552']
    }
    return res


}