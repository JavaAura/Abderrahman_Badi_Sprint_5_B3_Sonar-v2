export interface User {
    id: string | null;
    username: string;
    email: string | null;
    password: string | null;
    repeatPassword: string | null;
    roles: string[] | [];
}