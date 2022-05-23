type LinkedList = {
  val: number;
  next: LinkedList | null;
};

export const reverse = (linkedList: LinkedList) => {
  const head = linkedList;
  if (head.next === null) return linkedList;
  const newHead = reverse(linkedList.next);
  head.next.next = linkedList;
  head.next = null;
  return newHead;
};
