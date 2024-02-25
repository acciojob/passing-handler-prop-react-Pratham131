import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { label, classname, background } = config;
  return (
    <button data-testid={config.key} className={classname} onClick={() => selectNextBackground({ background: background })}>
      {label}
    </button>
  )
}

export default ColourSelector;

