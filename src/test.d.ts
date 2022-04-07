export type Test = {
    foo: string;
    bar: number[];
    barbar: number[][];
    barbarbar: number[][][];
    foobar: {
        foo: string;
        bar: number[];
    };
    barfoobar: {
        foo: string;
        bar: number[];
    }[];
    barbarbarfoo: {
        foo: string;
        bar: number[];
        barbarbarfoo: {
            foo: string;
            bar: number[];
        }[][];
    }[][];
};
