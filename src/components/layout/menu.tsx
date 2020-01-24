import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * This is the side menu component for the default dashboard
 */
export default () => {
  return (
    <ul>
      <li>
        <Link to="/auth">Auth</Link>
      </li>
    </ul>
  )
}
