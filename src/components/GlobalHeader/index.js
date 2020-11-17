import React from 'react';
import {
  Link,
} from 'react-router-dom';
import menu from '../../common/menu';

function GlobalHeader(props) {
  return (
    <div>
      {
        menu.map((item) => (
          <Link to={item.path}>
            <div>
              {item.name}
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default GlobalHeader;
