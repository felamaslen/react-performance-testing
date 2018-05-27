import { createReducer } from 'redux-create-reducer';

const onChangeNumValues = (state, { numValues }) => ({
    ...state,
    values: numValues
        ? new Array(numValues).fill(0)
            .map((item, index) => index)
        : []
});

const onToggleFoo = state => ({ ...state, foo: !state.foo });

export default initialState => createReducer(initialState, {
    'NUM_VALUES_CHANGED': onChangeNumValues,
    'FOO_TOGGLED': onToggleFoo
});

