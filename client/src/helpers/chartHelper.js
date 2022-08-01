import { getAll } from "./helpers";
export const monthlyOperationsResume = async (user) => {
    const operationList = await getAll(user)
    let Food = 0
    let Games = 0
    let Entertainment = 0
    let Taxes = 0
    operationList.forEach((op) => {
        switch (op.concept) {
            case 'Food':
                Food += op.amount
                break;
            case 'Games':
                Games += op.amount
                break;
            case 'Entertainment':
                Entertainment += op.amount
                break;
            case 'Taxes':
                Taxes += op.amount
                break;
        }
    })

    const res = {
        data: [Food, Games, Entertainment, Taxes],
        labels:
            [
                'Food',
                'Games',
                'Entertainment',
                'Taxes'
            ],
        colors: ['#14d0f0', '	#7f73ff', '#ff83c3', '#ffe552']
    }
    return res


}