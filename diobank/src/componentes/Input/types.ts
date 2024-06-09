export interface IInput {
    placeholder : string;  
    type ?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}