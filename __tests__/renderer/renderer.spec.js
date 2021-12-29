import { createRenderer } from '../../src/renderer';
import { mount } from '../../src/renderer/utils';
import { createDiv } from '../utils';

describe('createRenderer', () => {
  test('createContext(width, height) returns expected context.', () => {
    const renderer = createRenderer(600, 400);
    const node = renderer.node();
    const group = renderer.group();

    renderer.line({
      x: 0,
      y: 0,
      x2: 200,
      y2: 200,
      stroke: 'red',
      strokeWidth: 2,
    });
    renderer.rect({
      x: 0,
      y: 0,
      width: 50,
      height: 50,
    });

    expect(node.tagName).toBe('svg');
    expect(node.getAttribute('width')).toBe('600');
    expect(node.getAttribute('height')).toBe('400');
    expect(node.getAttribute('viewBox')).toBe('0 0 600 400');

    expect(group.tagName).toBe('g');
    expect(group.parentNode).toBe(node);

    mount(createDiv(), node);
  });
});
