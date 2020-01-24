import * as React from 'react';
import { FiMenu } from 'react-icons/fi';

type columnProps = {
  component: React.ComponentElement<any, any>,
  size: number,
  title: string,
}

export default (props: columnProps) => {
  return (
    <div className="column-layout">
      <header>
        <FiMenu />
        <h4>{props.title}</h4>
      </header>
      <section>
        {props.component}
      </section>
    </div>
  )
}
