import { React } from 'react'

import './menu.css'
import './header.css'
import './list.css'
import './footer.css'
import iconIFSP from '../../assets/iconifsp.ico'

const Menu = () => {

    return(
        <div className='menu'>
            <div className='header'>
                <img className='ifspIcon' src={iconIFSP} alt='logo ifsp'/>
            </div>
            <div className='list'>
                <div className='item'>
                    <div className='content'>
                        <div className='text'>
                            Unidade de Saude de Campinas
                        </div>
                        <div className='divider'/>
                    </div>
                </div>
                <div className='input'>
                    <label className='label'>Endereço</label>
                    {/* arrumar texto dentro do input quando digitado */}
                    <input type='text'name='endereco' placeholder='Digite o endereço'>
                    </input>
                </div>
            </div>
            <div className='footer'>
                {/* <div className='divider'/> */}
                    <div className='rede'>
                        <div className='font-type'>
                            <div className='text'>
                                Redes Sociais
                            </div>
                        </div>
                        <div className='list-rede'>
                            <div>
                                <a>

                                <img className='ui-image' src={iconIFSP} alt='logo ifsp'/>
                                </a>
                            </div>
                        </div>

                    </div>
            </div>

        </div>
    )
}

export default Menu;