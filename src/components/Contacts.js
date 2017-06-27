import React,{Component} from 'react';
import './Contacts.css';
const Contacts = () => {
    const map =  {
        border: '1px solid black',
        width: '100%',
        height: '200px'
    };
    return(
        <div className="Contacts">
           <div className="block">
               <div className="col-md-6">
                   <h4><b>Наш адрес:</b></h4>
                   <p>220116, г.Минск, пр-т имени «Газеты «Правда», д.16, оф.5</p>
                   <p><b>телефон:</b> +375-17-256-88-99</p>
                   <p><b>факс:</b> +375-17-256-87-99</p>
                   <p><b>e-mail:</b> <a href="mailto:svbridge@open.by">svbridge@open.by</a></p>
               </div>
               <div id="map" className="col-md-6">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.584510301094!2d27.48083391556817!3d53.86803584320754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd079d57525f3%3A0x8964d6cb6fa585ed!2z0L_RgNC-0YHQvy4g0JPQsNC30LXRgtGLINCf0YDQsNCy0LTQsCAxNiwg0JzQuNC90YHQuiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sca!4v1498556600621"
                           title="map"
                           style={map}>
                   </iframe>
               </div>
           </div>
           <div className="block">
               <h4><b>О предприятии:</b></h4>
               <p>Предприятие "Серебряный мост" было создано в 1993 г. Основное направление деятельности -
                   оптовая продажа специй, пряностей и пищевых добавок. Также предприятие производит сахарную
                   пудру. С 1998 г. занимается переработкой и фасовкой в потребительскую упаковку.</p>
               <h5><b>При работе с заказчиками:</b></h5>
               <ul>
                   <li>возможно предоставление отсрочки платежа</li>
                   <li>товар доставляется на склад заказчика</li>
                   <li>предусмотрены <b>оптовые скидки</b></li>
               </ul>
           </div>
           <div className="block">
               <h4><b>Оптовики, торгующие нашей продукцией без наценки:</b></h4>
               <ul>
                   <li><a href="http://www.minbak.by/"><b>ОАО «Минбакалеяторг»</b></a>, тел. +375-17-200-08-38, г.Минск</li>
                   <li><a href="http://www.sahartorg.by/"><b>ОАО «Сахарторг»</b></a>, тел. +375-232-50-89-42, г.Гомель</li>
                   <li>УП «Бакалея», тел. +375-152-52-45-35, г.Гродно</li>
               </ul>
           </div>
           <div className="block">
               <h4><b>Наши партнеры:</b></h4>
               <ul>
                   <li><a href="http://www.minbak.by/"><b>ОАО «Минбакалеяторг»</b></a>, г. Минск</li>
                   <li><a href="http://www.sahartorg.by/"><b>ОАО «Сахарторг»</b></a>, г. Гомель</li>
                   <li>УП «Бакалея», г. Гродно</li>
                   <li>ООО «СП «Белкондитер», г. Гродно</li>
                   <li>ГТО УП "Мясомолторг", г.Гродно</li>
                   <li>ОАО "Борисовский пищеторг", г. Борисов</li>
                   <li>ЧУП "Сяброптторг", г.Бобруйск</li>
                   <li>Частное предприятие "ПакЛаин", г. Могилев</li>
               </ul>
           </div>
        </div>
    )

}

export default Contacts;