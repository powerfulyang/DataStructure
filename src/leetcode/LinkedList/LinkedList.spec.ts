import { RemoveLinkedListElements } from './RemoveLinkedListElements';
import { SinglyLinkedList } from './SinglyLinkedList';

describe('LinkedList', () => {
  it('RemoveLinkedListElements', () => {
    const head = [1, 2, 3, 4, 5];
    const toRemove = 3;
    const result = RemoveLinkedListElements(new SinglyLinkedList(head).head, toRemove);
    expect(result).toEqual(new SinglyLinkedList([1, 2, 4, 5]).head);
  });
});
