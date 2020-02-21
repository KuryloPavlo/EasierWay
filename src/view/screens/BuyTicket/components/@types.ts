export interface Props {
    name: string;
    price: number;
    amount: number;
    onPlusPress: () => void;
    onMinusPress: () => void;
}