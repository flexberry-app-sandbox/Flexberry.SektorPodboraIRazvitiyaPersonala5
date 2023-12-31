﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Sektor_podbora_i_razvitiya_personala
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Прич увол и реком.
    /// </summary>
    // *** Start programmer edit section *** (ПричУволИРеком CustomAttributes)

    // *** End programmer edit section *** (ПричУволИРеком CustomAttributes)
    [AutoAltered()]
    [Caption("Причины увольнений и рекомендации")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПричУволИРекомE", new string[] {
            "ДатаЗаполн as \'Дата заполнения\'",
            "Специалист as \'ФИО специалиста\'",
            "ПричинУвол as \'Причина увольнения\'"})]
    [AssociatedDetailViewAttribute("ПричУволИРекомE", "Рекомендации", "РекомендацE", true, "", "Рекомендации", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ПричУволИРекомE", "Специалист", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ПричУволИРекомL", new string[] {
            "ДатаЗаполн as \'Дата заполнения\'",
            "Специалист as \'ФИО специалиста\'",
            "ПричинУвол as \'Причина увольнения\'"})]
    [MasterViewDefineAttribute("ПричУволИРекомL", "Специалист", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class ПричУволИРеком : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаЗаполн = System.DateTime.Now;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.Факторы fПричинУвол;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.Специалист fСпециалист;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.DetailArrayOfРекомендац fРекомендации;
        
        // *** Start programmer edit section *** (ПричУволИРеком CustomMembers)

        // *** End programmer edit section *** (ПричУволИРеком CustomMembers)

        
        /// <summary>
        /// ДатаЗаполн.
        /// </summary>
        // *** Start programmer edit section *** (ПричУволИРеком.ДатаЗаполн CustomAttributes)

        // *** End programmer edit section *** (ПричУволИРеком.ДатаЗаполн CustomAttributes)
        public virtual System.DateTime ДатаЗаполн
        {
            get
            {
                // *** Start programmer edit section *** (ПричУволИРеком.ДатаЗаполн Get start)

                // *** End programmer edit section *** (ПричУволИРеком.ДатаЗаполн Get start)
                System.DateTime result = this.fДатаЗаполн;
                // *** Start programmer edit section *** (ПричУволИРеком.ДатаЗаполн Get end)

                // *** End programmer edit section *** (ПричУволИРеком.ДатаЗаполн Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПричУволИРеком.ДатаЗаполн Set start)

                // *** End programmer edit section *** (ПричУволИРеком.ДатаЗаполн Set start)
                this.fДатаЗаполн = value;
                // *** Start programmer edit section *** (ПричУволИРеком.ДатаЗаполн Set end)

                // *** End programmer edit section *** (ПричУволИРеком.ДатаЗаполн Set end)
            }
        }
        
        /// <summary>
        /// ПричинУвол.
        /// </summary>
        // *** Start programmer edit section *** (ПричУволИРеком.ПричинУвол CustomAttributes)

        // *** End programmer edit section *** (ПричУволИРеком.ПричинУвол CustomAttributes)
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.Факторы ПричинУвол
        {
            get
            {
                // *** Start programmer edit section *** (ПричУволИРеком.ПричинУвол Get start)

                // *** End programmer edit section *** (ПричУволИРеком.ПричинУвол Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.Факторы result = this.fПричинУвол;
                // *** Start programmer edit section *** (ПричУволИРеком.ПричинУвол Get end)

                // *** End programmer edit section *** (ПричУволИРеком.ПричинУвол Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПричУволИРеком.ПричинУвол Set start)

                // *** End programmer edit section *** (ПричУволИРеком.ПричинУвол Set start)
                this.fПричинУвол = value;
                // *** Start programmer edit section *** (ПричУволИРеком.ПричинУвол Set end)

                // *** End programmer edit section *** (ПричУволИРеком.ПричинУвол Set end)
            }
        }
        
        /// <summary>
        /// Прич увол и реком.
        /// </summary>
        // *** Start programmer edit section *** (ПричУволИРеком.Специалист CustomAttributes)

        // *** End programmer edit section *** (ПричУволИРеком.Специалист CustomAttributes)
        [PropertyStorage(new string[] {
                "Специалист"})]
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.Специалист Специалист
        {
            get
            {
                // *** Start programmer edit section *** (ПричУволИРеком.Специалист Get start)

                // *** End programmer edit section *** (ПричУволИРеком.Специалист Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.Специалист result = this.fСпециалист;
                // *** Start programmer edit section *** (ПричУволИРеком.Специалист Get end)

                // *** End programmer edit section *** (ПричУволИРеком.Специалист Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПричУволИРеком.Специалист Set start)

                // *** End programmer edit section *** (ПричУволИРеком.Специалист Set start)
                this.fСпециалист = value;
                // *** Start programmer edit section *** (ПричУволИРеком.Специалист Set end)

                // *** End programmer edit section *** (ПричУволИРеком.Специалист Set end)
            }
        }
        
        /// <summary>
        /// Прич увол и реком.
        /// </summary>
        // *** Start programmer edit section *** (ПричУволИРеком.Рекомендации CustomAttributes)

        // *** End programmer edit section *** (ПричУволИРеком.Рекомендации CustomAttributes)
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.DetailArrayOfРекомендац Рекомендации
        {
            get
            {
                // *** Start programmer edit section *** (ПричУволИРеком.Рекомендации Get start)

                // *** End programmer edit section *** (ПричУволИРеком.Рекомендации Get start)
                if ((this.fРекомендации == null))
                {
                    this.fРекомендации = new IIS.Sektor_podbora_i_razvitiya_personala.DetailArrayOfРекомендац(this);
                }
                IIS.Sektor_podbora_i_razvitiya_personala.DetailArrayOfРекомендац result = this.fРекомендации;
                // *** Start programmer edit section *** (ПричУволИРеком.Рекомендации Get end)

                // *** End programmer edit section *** (ПричУволИРеком.Рекомендации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПричУволИРеком.Рекомендации Set start)

                // *** End programmer edit section *** (ПричУволИРеком.Рекомендации Set start)
                this.fРекомендации = value;
                // *** Start programmer edit section *** (ПричУволИРеком.Рекомендации Set end)

                // *** End programmer edit section *** (ПричУволИРеком.Рекомендации Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПричУволИРекомE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПричУволИРекомE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПричУволИРекомE", typeof(IIS.Sektor_podbora_i_razvitiya_personala.ПричУволИРеком));
                }
            }
            
            /// <summary>
            /// "ПричУволИРекомL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПричУволИРекомL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПричУволИРекомL", typeof(IIS.Sektor_podbora_i_razvitiya_personala.ПричУволИРеком));
                }
            }
        }
    }
}
