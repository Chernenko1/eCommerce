import Bn from '@assets/images/Banners/firstBanner.jpg'

import styles from './style.module.css'
import {
  IoBedOutline,
  IoCalendarOutline,
  IoCompassOutline,
  IoPricetagsOutline,
  IoThumbsUpOutline,
} from 'react-icons/io5'

export default function Banners() {
  return (
    <div className={styles.container}>
      <div className={styles.bigBanner}>
        <div>
          <h2>Скандинавия ближе, чем кажется</h2>
          <p>
            @Name@ производит функциональные и практичные предметы интерьера в скандинавском стиле. Вдохновившись
            успехами и популярностью компании IKEA, мы решили взять за основу философию шведского бренда - изменение
            повседневной жизни своих клиентов к лучшему. Продукт должен быть не просто красивым, качественным и
            доступным, он должен решать проблемы человека, с которыми он сталкивается в быту. Этим принципам мы следуем
            при разработке каждой модели товаров.
          </p>
        </div>
        <img src={Bn} />
      </div>
      <div className={styles.littleBanner}>
        <div>
          <IoBedOutline size={40} />
          <h4>Широкий ассортимент</h4>
        </div>
        <p>Большой выбор удобных и красивых товаров для дома. У нас вы обязательно найдете что-то на свой вкус</p>
      </div>
      <div className={styles.littleBanner}>
        <div>
          <IoThumbsUpOutline size={40} />
          <h4>Высокое качество</h4>
        </div>
        <ul>
          <li>Собственная высокотехнологичная фабрика в Китае</li>
          <li>Сотрудничество с фабриками-партнерами IKEA</li>
          <li>Оригинальные товары IKEA</li>
        </ul>
      </div>
      <div className={styles.littleBanner}>
        <div>
          <IoPricetagsOutline size={40} />
          <h4>Самые лучшие цены</h4>
        </div>
        <p>Наша цель — сделать товары для дома доступными каждому, не снижая качество и функциональность</p>
      </div>
      <div className={styles.littleBanner}>
        <div>
          <IoCalendarOutline size={40} />
          <h4>Рассрочка в @Name@</h4>
        </div>
        <p>Не нужно платить сразу — платите частями без комиссий и переплат</p>
      </div>
      <div className={styles.littleBanner}>
        <div>
          <IoCompassOutline size={40} />
          <h4>Доставка по Беларуси</h4>
        </div>
        <p>Заказывайте товары прямо к себе домой</p>
      </div>
    </div>
  )
}
