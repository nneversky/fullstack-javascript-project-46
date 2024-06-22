import _ from 'lodash';

export const makeAstTree = (obj1, obj2) => {
    const unionKeys = _.union(Object.keys(obj1), Object.keys(obj2));
    const sortedKeys = _.sortBy(unionKeys);

    const tree = sortedKeys.map((key) => {
        if (!_.has(obj1, key)) {
            return { key, value: obj2[key], status: 'added' };
        }
        if (!_.has(obj2, key)) {
            return { key, value: obj1[key], status: 'removed' };
        }
        const value1 = obj1[key];
        const value2 = obj2[key];
        if (_.isObject(value1) && _.isObject(value2)) {
            return {
                key,
                status: 'nested',
                children: makeAstTree(value1, value2),
            };
        }
        if (!_.isEqual(value1, value2)) {
            return {
                key,
                oldValue: value1,
                newValue: value2,
                status: 'changed',
            };
        }
        return { key, value: value1, status: 'unchanged' };
    });

    return tree;
};
