export interface Props{
    name: string;
    createUser: () => void;
    changeName: (name: string) => void;
}