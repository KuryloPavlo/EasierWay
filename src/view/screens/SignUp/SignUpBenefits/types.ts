export interface Props{
    name: string;
    benefits: boolean;
    chooseBenefits: (benefits: boolean) => void;
}