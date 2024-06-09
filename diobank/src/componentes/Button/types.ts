export interface IButton {
    title : string,
    type ?: string,
    disabled?: boolean,
    onClick :  () => void;
}