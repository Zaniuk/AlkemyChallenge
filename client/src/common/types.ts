enum OperationType {
    income,
    outcome
}
enum OperationConcept {
    salary,
    entertainment,
    services, 
    market,
    shopping,
    others

}
export interface Operation {
    amount: number;
    date: string;
    description: string;
    id: string;
    type: OperationType;
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