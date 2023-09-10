import {
  useState, useCallback, useMemo, useEffect,
} from 'react';

interface Queue<T> {
  dequeue(): T | undefined;
  peek(): T | undefined;
  count: number;
  items: T[];
  isEmpty: boolean;
}

export const useQueue = <T>(list: T[] = []): Queue<T> => {
  const [items, setItems] = useState<T[]>(list);

  useEffect(() => {
    setItems(list);
  }, [list]);

  const dequeue = useCallback((): T | undefined => {
    if (items.length === 0) return;

    const [first, ...rest] = items;
    setItems(rest);

    return first;
  }, [items]);

  const peek = useCallback((): T | undefined => {
    if (items.length === 0) return;

    return items[0];
  }, [items]);

  const count = useMemo<number>(() => items.length, [items]);

  const isEmpty = useMemo<boolean>(() => count === 0, [count]);

  return useMemo<Queue<T>>(
    () => ({
      dequeue, peek, items, count, isEmpty,
    }),
    [dequeue, peek, items, count, isEmpty],
  );
};
