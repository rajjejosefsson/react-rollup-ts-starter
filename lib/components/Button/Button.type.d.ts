export declare enum Sizes {
    small = "small",
    regular = "regular",
    big = "big",
}
export declare enum Types {
    primary = "primary",
    secondary = "secondary",
    default = "tertiary",
    negative = "negative",
    deal = "deal",
}
export declare const test: {
    hello: string;
};
export declare type Props = {
    size: 'small' | 'regular' | 'big';
    type: 'primary' | 'secondary' | 'default' | 'negative' | 'deal';
    children: any;
};
