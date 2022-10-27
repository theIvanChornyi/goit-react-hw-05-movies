import { useState } from 'react';
import { STATE } from 'services/config/page.state';

export const useStateMachine = init => {
  const [state, setStateMachine] = useState(init);
  const isResolved = state === STATE.RESOLVE;
  const isLoad = state === STATE.LOAD;
  const isRejected = state === STATE.ERROR;
  return { isResolved, isLoad, isRejected, setStateMachine };
};
