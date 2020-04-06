export interface Props{
    password: string;
    addPassword: (password: string) => void;
}

export interface State {
    first: string;
    second: string;
    show: boolean;
}