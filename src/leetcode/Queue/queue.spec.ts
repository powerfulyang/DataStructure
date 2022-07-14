import { QueueImplementByStack } from './QueueImplementByStack';

describe('Queue', () => {
  it('implement queue using stacks', () => {
    const queue = new QueueImplementByStack();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.shift()).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.shift()).toBe(2);
    expect(queue.shift()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });
});
