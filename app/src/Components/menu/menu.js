import { React } from 'react'
import {Link} from 'react-router-dom'
import './menu.css'
import './header.css'
import './list.css'
import './footer.css'

import iconIFSP from '../../assets/images/iconifsp.ico'
import iconGithub from '../../assets/images/25231.ico'
import goIcon from '../../assets/images/goBtn'

const Menu = ({places}) => {

    let items = []
    const limit = 35

    for(let i=0;i <=15; i++){

        if(places[i] !== undefined){
            items.push(places[i])
        }
    }
    

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

                    </div>
                </div>
                <div className='input'>
                    <label className='label'>Endereço</label>
                    {/* arrumar texto dentro do input quando digitado */}
                    <input type='text'name='endereco' placeholder='Digite o endereço'>
                    </input>
                </div>

                <div className='list-content'>

                {items?.map((item,index)=> {

                    return(
                    <Link to={'/'+index}>
                        <div key={index} className='item-list'>
                            <div className='content'>
                                <div className='text'>
                                    {item.nome}
                                </div>

                                <div className='button' onClick={()=>{

                                }}>
                                    <img className='icon' src={goIcon} alt='goicon'/>
                                </div> 
                            </div>
                        </div>
                    </Link>
                    )
                })
                }


                </div>




            </div>
            <div className='footer'>
                <div className='divider'>
                    <div className='separator' />
                </div>
                {/* <div className='divider'/> */}
                    <div className='rede'>
                        <div className='font-type'>
                            <div className='text'>
                                Redes Sociais
                            </div>
                        </div>
                        <ul>
                            <li >
                                {/* arrumar link */}
                                <a href='https://github.com/caiostato/TCC'>
                                    <img className='ui-image' src={iconGithub} alt='logo ifsp'/>
                                </a> 
                            </li>
                            <li className='list-rede-item'>
                                {/* arrumar link */}
                                <a href='https://www.youtube.com/'>
                                    <img className='ui-image' src={iconIFSP} alt='logo ifsp'/> ssss
                                </a>
                            </li>
                        </ul>


                    </div>
            </div>

        </div>
    )
}

export default Menu;