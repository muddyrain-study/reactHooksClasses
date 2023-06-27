/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable-next-line react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import { useLatest } from '@/hooks/useLatest';
export default () => {
  const [count, setCount] = useState(0);
  const ref = useLatest(count);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);
      console.log(ref.current);
      setCount(ref.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>自定义Hooks：useLatestt</div>
      <div>count: {count}</div>
    </>
  );
};
