import { IPhoneX } from 'react-app-preview-component'
import IPhoneXScreenshot1 from '../../assets/1.png'
import IPhoneXScreenshot2 from '../../assets/2.png'
import IPhoneXScreenshot3 from '../../assets/3.png'

const AppPreview = () => {
    return (
        <div className='gap-5'>
            <IPhoneX carousel interval={1000}>
                <img src={IPhoneXScreenshot1} alt="iPhone X Screenshot1" />
                <img src={IPhoneXScreenshot2} alt="iPhone X Screenshot2" />
                <img src={IPhoneXScreenshot3} alt="iPhone X Screenshot3" />
            </IPhoneX>
            <IPhoneX carousel interval={2000}>
                <img src={IPhoneXScreenshot1} alt="iPhone X Screenshot1" />
                <img src={IPhoneXScreenshot2} alt="iPhone X Screenshot2" />
                <img src={IPhoneXScreenshot3} alt="iPhone X Screenshot3" />
            </IPhoneX>
            <IPhoneX carousel interval={3000}>
                <img src={IPhoneXScreenshot1} alt="iPhone X Screenshot1" />
                <img src={IPhoneXScreenshot2} alt="iPhone X Screenshot2" />
                <img src={IPhoneXScreenshot3} alt="iPhone X Screenshot3" />
            </IPhoneX>
        </div>

    )
}

export default AppPreview;