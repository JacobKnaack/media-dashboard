import * as React from 'react';
import './__auth.scss';

import { FiMail, FiLock } from 'react-icons/fi';

export default () => {
  return (
    <div id="main-container">
      <h1>Media Dashboard</h1>
      <form>
        <section>
          <FiMail className="input-icon" />
          <input name="email" type="email" placeholder="email"/>
        </section>
        <section>
          <FiLock className="input-icon" />
          <input name="password" type="password" placeholder="password" />
        </section>
        <p id="info">Please provide credentials if you have them, no new registration at this time.</p>
      </form>
    </div>
  )
}
