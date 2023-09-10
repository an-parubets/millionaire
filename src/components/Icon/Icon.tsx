import React, { useState, useEffect, ReactElement } from 'react';
import type { Nullable } from '../../types';

type Props = {
  name: string;
  width?: number;
  height?: number;
};

function Icon({
  name,
  width = 24,
  height = 24,
}: Props): Nullable<ReactElement> {
  const [svgIcon, setSvgIcon] = useState<string | null>(null);

  useEffect(() => {
    import(`../../assets/icons/${name}.svg`)
      .then((module) => {
        const { default: svg } = module;
        setSvgIcon(svg);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(`Error loading SVG icon "${name}":`, error);
      });
  }, [name]);

  // In the future, you can render a fallback icon here until the main one is loaded
  return svgIcon ? (
    <img
      src={svgIcon}
      alt={name}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  ) : null;
}

export default Icon;
