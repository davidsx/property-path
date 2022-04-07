import { expectAssignable } from 'tsd';
import { PathOf, ValueOf } from './index';
import { Test } from './src/test';

// const test: Test = {
//     foo: 'abc',
//     bar: [1, 2, 3],
//     barbar: [[1, 2, 3]],
//     barbarbar: [[[1, 2, 3]]],
//     foobar: {
//         foo: 'abc',
//         bar: [1, 2, 3],
//     },
//     barfoobar: [
//         {
//             foo: 'abc',
//             bar: [1, 2, 3],
//         },
//     ],
//     barbarbarfoo: [
//         [
//             {
//                 foo: 'abc',
//                 bar: [1, 2, 3],
//                 barbarbarfoo: [
//                     [
//                         {
//                             foo: 'abc',
//                             bar: [1, 2, 3],
//                         },
//                     ],
//                 ],
//             },
//         ],
//     ],
// };

expectAssignable<PathOf<Test>>('foo');
expectAssignable<PathOf<Test>>('bar');
expectAssignable<PathOf<Test>>('bar[0]');
expectAssignable<PathOf<Test>>('barbar');
expectAssignable<PathOf<Test>>('barbar[0]');
expectAssignable<PathOf<Test>>('barbar[0][0]');
expectAssignable<PathOf<Test>>('barbarbar');
expectAssignable<PathOf<Test>>('barbarbar[0]');
expectAssignable<PathOf<Test>>('barbarbar[0][0]');
expectAssignable<PathOf<Test>>('barbarbar[0][0][0]');
expectAssignable<PathOf<Test>>('foobar');
expectAssignable<PathOf<Test>>('foobar.foo');
expectAssignable<PathOf<Test>>('foobar.bar');
expectAssignable<PathOf<Test>>('foobar.bar[0]');
expectAssignable<PathOf<Test>>('barfoobar');
expectAssignable<PathOf<Test>>('barfoobar[0]');
expectAssignable<PathOf<Test>>('barfoobar[0].foo');
expectAssignable<PathOf<Test>>('barfoobar[0].bar');
expectAssignable<PathOf<Test>>('barfoobar[0].bar[0]');
expectAssignable<PathOf<Test>>('barbarbarfoo');
expectAssignable<PathOf<Test>>('barbarbarfoo[0]');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0]');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].foo');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].bar');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].bar[0]');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].barbarbarfoo');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].barbarbarfoo[0]');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].barbarbarfoo[0][0]');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].barbarbarfoo[0][0].foo');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].barbarbarfoo[0][0].bar');
expectAssignable<PathOf<Test>>('barbarbarfoo[0][0].barbarbarfoo[0][0].bar[0]');

expectAssignable<ValueOf<Test, 'foo'>>('');
expectAssignable<ValueOf<Test, 'bar'>>([1]);
expectAssignable<ValueOf<Test, 'bar[0]'>>(1);
expectAssignable<ValueOf<Test, 'barbar'>>([[1]]);
expectAssignable<ValueOf<Test, 'barbar[0]'>>([1]);
expectAssignable<ValueOf<Test, 'barbar[0][0]'>>(1);
expectAssignable<ValueOf<Test, 'barbarbar'>>([[[1]]]);
expectAssignable<ValueOf<Test, 'barbarbar[0]'>>([[1]]);
expectAssignable<ValueOf<Test, 'barbarbar[0][0]'>>([1]);
expectAssignable<ValueOf<Test, 'barbarbar[0][0][0]'>>(1);
expectAssignable<ValueOf<Test, 'foobar'>>({ foo: '', bar: [1] });
expectAssignable<ValueOf<Test, 'foobar.foo'>>('');
expectAssignable<ValueOf<Test, 'foobar.bar'>>([1]);
expectAssignable<ValueOf<Test, 'foobar.bar[0]'>>(1);
expectAssignable<ValueOf<Test, 'barfoobar'>>([{ foo: '', bar: [1] }]);
expectAssignable<ValueOf<Test, 'barfoobar[0]'>>({ foo: '', bar: [1] });
expectAssignable<ValueOf<Test, 'barfoobar[0].foo'>>('');
expectAssignable<ValueOf<Test, 'barfoobar[0].bar'>>([1]);
expectAssignable<ValueOf<Test, 'barfoobar[0].bar[0]'>>(1);
expectAssignable<ValueOf<Test, 'barbarbarfoo'>>([[{ foo: '', bar: [1], barbarbarfoo: [[{ foo: '', bar: [1] }]] }]]);
expectAssignable<ValueOf<Test, 'barbarbarfoo[0]'>>([{ foo: '', bar: [1], barbarbarfoo: [[{ foo: '', bar: [1] }]] }]);
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0]'>>({ foo: '', bar: [1], barbarbarfoo: [[{ foo: '', bar: [1] }]] });
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].foo'>>('');
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].bar'>>([1]);
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].bar[0]'>>(1);
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].barbarbarfoo'>>([[{ foo: '', bar: [1] }]]);
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].barbarbarfoo[0]'>>([{ foo: '', bar: [1] }]);
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].barbarbarfoo[0][0]'>>({ foo: '', bar: [1] });
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].barbarbarfoo[0][0].foo'>>('');
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].barbarbarfoo[0][0].bar'>>([1]);
expectAssignable<ValueOf<Test, 'barbarbarfoo[0][0].barbarbarfoo[0][0].bar[0]'>>(1);
