import './Menu.css';

export default function menu(){
    return (
        <div className="menu">
            <div className='inside'>
                <h1>HealthMap</h1>
                <input type="input" className="form__field" placeholder="endereco" name="endereco" id='name' required />
            </div>

        </div>
    );
}