import Brazil from './assets/brazil.png';
import France from './assets/france.png';
import English from './assets/united-kingdom.png';

const LanguageSelector = ({ onLanguageChange }:any) => {
    const handleLanguageChange = (language:string) => {
        onLanguageChange(language)
    }
    
    return (
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            gap: '0.5rem',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0
        }}>
            <li><img src={Brazil} alt="Brazilian Flag" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={() => handleLanguageChange('pt-BR')}/></li>
            <li><img src={France} alt="French Flag" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={() => handleLanguageChange('fr')}/></li>
            <li><img src={English} alt="English Flag" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={() => handleLanguageChange('en')}/></li>
        </ul>
    )
}

export default LanguageSelector