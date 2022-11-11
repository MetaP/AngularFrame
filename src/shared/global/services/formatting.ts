export interface Formatter<T> {
    Format(value: T) : string;
    Parse(representation: string): T; 
}