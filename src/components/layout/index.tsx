import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
import './__layout.scss';

import Column from './column';

type layoutProps = {
  menu: React.ComponentElement<any, any>,
  columns: Array<columnProps>,
}
type columnProps = {
  title: string,
  component: React.ComponentElement<any, any>,
}

export default (props: layoutProps) => {
  const [ menuOpen, toggleMenu ] = React.useState(false);
  const createClasses = (
      name: string,
      options: Array<string>,
      toggle: boolean
  ) => toggle ? `${name} ${options[0]}` : `${name} ${options[1]}`;

  return (
    <div id="main-container">
      <header id="header-container">
        <FiMenu id="header-icon" onClick={() => toggleMenu(!menuOpen)}/>
        <h1>test</h1>
      </header>
      <main id="column-grid">
        <aside className={createClasses('menu', ['open', 'closed'], menuOpen)}>
          {props.menu}
        </aside>
        <div
          className={createClasses('menuBackground', ['visible', 'hidden'], menuOpen)}
          onClick={()=>toggleMenu(false)}
        />
        {props.columns.map((el: columnProps, idx: number) => {
          return <Column key={idx} component={el.component} title={el.title} size={25} />
        })}
      </main>
    </div>
  )
}
