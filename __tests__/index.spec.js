import { drawRedRect } from '../src';

describe('test', () => {
  test('drawRedRect()', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', 400);
    svg.setAttribute('height', 400);
    svg.setAttribute('viewBox', [0, 0, 400, 400]);
    document.body.appendChild(svg);

    drawRedRect(svg);
    // expect 是jest提供的API用于 toBe 用于测试输出   官网：https://www.jestjs.cn/docs/getting-started
    expect(svg.getElementsByTagName('rect').length).toBe(1);
  });
});
