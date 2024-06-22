import _ from 'lodash';

const getIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - 2);
const getBracketIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - spacesCount);

const stringify = (data, replacer = ' ', spacesCount = 4, depth = 1) => {
  if (!_.isPlainObject(data)) return `${data}`;

  const currentIndent = getIndent(depth, replacer, spacesCount);
  const bracketIndent = getBracketIndent(depth, replacer, spacesCount);
  const currentValue = Object.entries(data);

  const lines = currentValue.map(([key, value]) => `${currentIndent}  ${key}: ${stringify(value, replacer, spacesCount, depth + 1)}`);

  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

const stylishFormat = (tree) => {
  const iter = (currentValue, depth = 1) => {
    const currentIndent = getIndent(depth);
    const bracketIndent = getBracketIndent(depth);
    const lines = currentValue.flatMap((node) => {
      const { key, children, status, value, oldValue, newValue } = node;
      switch (status) {
        case 'nested':
          return `${currentIndent}  ${key}: ${iter(children, depth + 1)}`;
        case 'removed':
          return `${currentIndent}- ${key}: ${stringify(value, ' ', 4, depth + 1)}`;
        case 'added':
          return `${currentIndent}+ ${key}: ${stringify(value, ' ', 4, depth + 1)}`;
        case 'unchanged':
          return `${currentIndent}  ${key}: ${stringify(value, ' ', 4, depth + 1)}`;
        case 'changed':
          return [
            `${currentIndent}- ${key}: ${stringify(oldValue, ' ', 4, depth + 1)}`,
            `${currentIndent}+ ${key}: ${stringify(newValue, ' ', 4, depth + 1)}`,
          ];
        default:
          throw new Error(`Unknown type ${status}.`);
      }
    });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(tree);
};

export { stylishFormat };
