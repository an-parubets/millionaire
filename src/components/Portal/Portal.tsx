import React, { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  portalId: string;
  children: ReactElement;
}

function Portal({ portalId, children }: Props): ReactElement {
  const [node, setNode] = useState<HTMLElement>();

  useEffect(() => {
    const node = document.getElementById(portalId);

    if (!node) return;

    setNode(node);
  }, [portalId]);

  return <>{children && node && createPortal(children, node)}</>;
}

export default Portal;
