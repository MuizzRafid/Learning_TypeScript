//tuples -> fixed lenght and fixed types

const userEntry: [string, number] = ["Muizz", 26];

//optional tuples
type ResponseRow = [status: number, message?: string];

const r11: ResponseRow = [200];

const corners: readonly [number, number] = [0, 0];
