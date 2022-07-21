import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { User } from '../../Types/User';

import * as C from './styles';

type Props = {
    handleLogout: () => void;
}
 
const Header: React.FC<Props> = ({handleLogout}) => {
    const auth = useAuth();

  const [dataInfo, setDataInfo] = useState<User | null>(null);

  const getData = () => {
    setDataInfo(auth.user)
  }

  useEffect(() => {getData()}, [])

    return (
      <C.Container>
          <div className='left-side'>
              <button onClick={handleLogout}>LOGOUT</button>
          </div>
          <div className='right-side'>
                <div className='content-name'>
                    <p>{dataInfo?.fullname}</p>
                    <p>Developer</p>
                </div>
                <div className='content-avatar'>
                    <div>
                        {dataInfo?.avatar && <img src={dataInfo?.avatar} alt='avatar'/>}
                        {dataInfo?.avatar === null && <img src="https://manualdasecretaria.com.br/wp-content/themes/cera/assets/images/avatars/user-avatar.png" alt="avatar"/>}
                    </div>
                </div>
          </div>
      </C.Container>
  );
}

export default Header;