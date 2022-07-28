import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { User } from '../../Types/User';

import * as C from './styles';

type Props = {
    handleLogout: () => void;
}
 
const Header: React.FC<Props> = ({ handleLogout }) => {
    const auth = useAuth();

    const [dataInfo, setDataInfo] = useState<User | null>(null);

    const getData = useCallback(() => {
        setDataInfo(auth.user)
    }, [auth.user])

    useEffect(() => { getData() }, [getData])

    const addDefaultSrc = (ev:any) => {
        ev.target.src = "https://manualdasecretaria.com.br/wp-content/themes/cera/assets/images/avatars/user-avatar.png";
    }

    return (
      <C.Container>
          <div className='left-side'>
              <button onClick={handleLogout}>LOGOUT</button>
          </div>
          <div className='right-side'>
                <div className='content-name'>
                    <p>{dataInfo?.fullname}</p>
                    <p>Desenvolvedor {dataInfo?.habilidades[0]}</p>
                </div>
                <div className='content-avatar'>
                    <div>
                        {<img onError={addDefaultSrc} src={`https://rhexpert-api.herokuapp.com/users/avatar/${dataInfo?._id}`} alt="avatar"/>}
                    </div>
                </div>
          </div>
      </C.Container>
  );
}

export default Header;