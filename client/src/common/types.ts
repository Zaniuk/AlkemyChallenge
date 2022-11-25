enum OperationConcept {
    income,
    outcome
}
enum OperationType {
    transfer,
    payment,
    salary,
    othe
}
export interface Operation {
    amount: number;
    date: string;
    description: string;
    id: string;
    type: string;
    concept: OperationConcept;
}

export interface User {
    username: string;
    password: string;
    email: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}