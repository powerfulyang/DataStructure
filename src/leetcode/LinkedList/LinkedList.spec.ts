import { RemoveLinkedListElements } from './RemoveLinkedListElements';
import { SinglyLinkedList } from './SinglyLinkedList';
import { DoublyLinkedList } from './DoublyLinkedList';
import { recursiveReverse, twoPointerReverse } from './Reverse';
import { SwapPairs } from './SwapNodesInPairs';

describe('LinkedList', () => {
  it('RemoveLinkedListElements', () => {
    const array = [1, 2, 3, 4, 5];
    const toRemove = 3;
    const linkedList = new SinglyLinkedList(array);
    const result = RemoveLinkedListElements(linkedList.head, toRemove);
    expect(result).toEqual(new SinglyLinkedList([1, 2, 4, 5]).head);
  });

  it('DoublyLinkedList', () => {
    const array = [1, 2, 3, 4, 5];
    const linkedList = new DoublyLinkedList(array);
    const third = linkedList.head.next.next;
    expect(third.value).toEqual(3);
    expect(third.prev.value).toEqual(2);
    expect(linkedList.getTail()).toHaveProperty('value', 5);
  });

  it('Reverse', () => {
    const array = [1, 2, 3, 4, 5];
    const linkedList = new SinglyLinkedList(array);
    const recursiveResult = recursiveReverse(linkedList.head);
    expect(recursiveResult).toEqual(new SinglyLinkedList([5, 4, 3, 2, 1]).head);
    const linkedList2 = new SinglyLinkedList(array);
    const twoPointerResult = twoPointerReverse(linkedList2.head);
    expect(twoPointerResult).toEqual(new SinglyLinkedList([5, 4, 3, 2, 1]).head);
  });

  it('SwapNodesInPairs', () => {
    const array = [1, 2, 3, 4, 5];
    const linkedList = new SinglyLinkedList(array);
    const result = SwapPairs(linkedList.head);
    expect(result).toEqual(new SinglyLinkedList([2, 1, 4, 3, 5]).head);
  });
});
