import { useState } from 'react';
import './Header.css';

const Header = ({ data }) => {
  const [headerState] = useState(data);

  return (
    <div>
      <div className="name-text">{ headerState.name }</div>
      <div className="role-text">{ headerState.role }</div>
    </div>
  );
};

export default Header;
