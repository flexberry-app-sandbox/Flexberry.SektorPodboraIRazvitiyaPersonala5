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
    /// Анкеты.
    /// </summary>
    // *** Start programmer edit section *** (Анкеты CustomAttributes)

    // *** End programmer edit section *** (Анкеты CustomAttributes)
    [AutoAltered()]
    [Caption("Анкеты уволившихся работников")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("АнкетыE", new string[] {
            "Номер as \'Номер\'",
            "ДатаЗаполн as \'Дата заполнения\'",
            "ГлавнПричин as \'Главная причина ухода сотрудника\'",
            "ОценРабот as \'В целом оценивает работу увол. сотрудник\'",
            "ПолУволСотр as \'Пол уволившегося сотрудника\'",
            "ОтносКатСотр as \'Категория сотрудников\'",
            "КакойСтаж as \'Стаж\'",
            "ВозрастСотруд as \'Возраст сотрудника\'",
            "Коммент as \'Комментарии уволившегося сотрудника\'"})]
    [View("АнкетыL", new string[] {
            "Номер as \'Номер\'",
            "ДатаЗаполн as \'Дата заполнения\'",
            "ГлавнПричин as \'Главная причина\'",
            "ОценРабот as \'В целом оценивает\'",
            "ПолУволСотр as \'Пол уволившегося сотрудника\'",
            "ОтносКатСотр as \'Категория сотрудника\'",
            "КакойСтаж as \'Стаж\'",
            "ВозрастСотруд as \'Возраст\'",
            "Коммент as \'Комментарии\'"})]
    public class Анкеты : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаЗаполн;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.Стаж fКакойСтаж;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.Возраст fВозрастСотруд;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.КатегСотруд fОтносКатСотр;
        
        private string fКоммент;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.Оценка fОценРабот;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.Факторы fГлавнПричин;
        
        private int fНомер;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.Пол fПолУволСотр;
        
        private IIS.Sektor_podbora_i_razvitiya_personala.Специалист fСпециалист;
        
        // *** Start programmer edit section *** (Анкеты CustomMembers)

        // *** End programmer edit section *** (Анкеты CustomMembers)

        
        /// <summary>
        /// ВозрастСотруд.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.ВозрастСотруд CustomAttributes)

        // *** End programmer edit section *** (Анкеты.ВозрастСотруд CustomAttributes)
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.Возраст ВозрастСотруд
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.ВозрастСотруд Get start)

                // *** End programmer edit section *** (Анкеты.ВозрастСотруд Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.Возраст result = this.fВозрастСотруд;
                // *** Start programmer edit section *** (Анкеты.ВозрастСотруд Get end)

                // *** End programmer edit section *** (Анкеты.ВозрастСотруд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.ВозрастСотруд Set start)

                // *** End programmer edit section *** (Анкеты.ВозрастСотруд Set start)
                this.fВозрастСотруд = value;
                // *** Start programmer edit section *** (Анкеты.ВозрастСотруд Set end)

                // *** End programmer edit section *** (Анкеты.ВозрастСотруд Set end)
            }
        }
        
        /// <summary>
        /// ГлавнПричин.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.ГлавнПричин CustomAttributes)

        // *** End programmer edit section *** (Анкеты.ГлавнПричин CustomAttributes)
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.Факторы ГлавнПричин
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.ГлавнПричин Get start)

                // *** End programmer edit section *** (Анкеты.ГлавнПричин Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.Факторы result = this.fГлавнПричин;
                // *** Start programmer edit section *** (Анкеты.ГлавнПричин Get end)

                // *** End programmer edit section *** (Анкеты.ГлавнПричин Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.ГлавнПричин Set start)

                // *** End programmer edit section *** (Анкеты.ГлавнПричин Set start)
                this.fГлавнПричин = value;
                // *** Start programmer edit section *** (Анкеты.ГлавнПричин Set end)

                // *** End programmer edit section *** (Анкеты.ГлавнПричин Set end)
            }
        }
        
        /// <summary>
        /// ДатаЗаполн.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.ДатаЗаполн CustomAttributes)

        // *** End programmer edit section *** (Анкеты.ДатаЗаполн CustomAttributes)
        public virtual System.DateTime ДатаЗаполн
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.ДатаЗаполн Get start)

                // *** End programmer edit section *** (Анкеты.ДатаЗаполн Get start)
                System.DateTime result = this.fДатаЗаполн;
                // *** Start programmer edit section *** (Анкеты.ДатаЗаполн Get end)

                // *** End programmer edit section *** (Анкеты.ДатаЗаполн Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.ДатаЗаполн Set start)

                // *** End programmer edit section *** (Анкеты.ДатаЗаполн Set start)
                this.fДатаЗаполн = value;
                // *** Start programmer edit section *** (Анкеты.ДатаЗаполн Set end)

                // *** End programmer edit section *** (Анкеты.ДатаЗаполн Set end)
            }
        }
        
        /// <summary>
        /// КакойСтаж.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.КакойСтаж CustomAttributes)

        // *** End programmer edit section *** (Анкеты.КакойСтаж CustomAttributes)
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.Стаж КакойСтаж
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.КакойСтаж Get start)

                // *** End programmer edit section *** (Анкеты.КакойСтаж Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.Стаж result = this.fКакойСтаж;
                // *** Start programmer edit section *** (Анкеты.КакойСтаж Get end)

                // *** End programmer edit section *** (Анкеты.КакойСтаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.КакойСтаж Set start)

                // *** End programmer edit section *** (Анкеты.КакойСтаж Set start)
                this.fКакойСтаж = value;
                // *** Start programmer edit section *** (Анкеты.КакойСтаж Set end)

                // *** End programmer edit section *** (Анкеты.КакойСтаж Set end)
            }
        }
        
        /// <summary>
        /// Коммент.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.Коммент CustomAttributes)

        // *** End programmer edit section *** (Анкеты.Коммент CustomAttributes)
        [StrLen(255)]
        public virtual string Коммент
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.Коммент Get start)

                // *** End programmer edit section *** (Анкеты.Коммент Get start)
                string result = this.fКоммент;
                // *** Start programmer edit section *** (Анкеты.Коммент Get end)

                // *** End programmer edit section *** (Анкеты.Коммент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.Коммент Set start)

                // *** End programmer edit section *** (Анкеты.Коммент Set start)
                this.fКоммент = value;
                // *** Start programmer edit section *** (Анкеты.Коммент Set end)

                // *** End programmer edit section *** (Анкеты.Коммент Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.Номер CustomAttributes)

        // *** End programmer edit section *** (Анкеты.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.Номер Get start)

                // *** End programmer edit section *** (Анкеты.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Анкеты.Номер Get end)

                // *** End programmer edit section *** (Анкеты.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.Номер Set start)

                // *** End programmer edit section *** (Анкеты.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Анкеты.Номер Set end)

                // *** End programmer edit section *** (Анкеты.Номер Set end)
            }
        }
        
        /// <summary>
        /// ОтносКатСотр.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.ОтносКатСотр CustomAttributes)

        // *** End programmer edit section *** (Анкеты.ОтносКатСотр CustomAttributes)
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.КатегСотруд ОтносКатСотр
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.ОтносКатСотр Get start)

                // *** End programmer edit section *** (Анкеты.ОтносКатСотр Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.КатегСотруд result = this.fОтносКатСотр;
                // *** Start programmer edit section *** (Анкеты.ОтносКатСотр Get end)

                // *** End programmer edit section *** (Анкеты.ОтносКатСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.ОтносКатСотр Set start)

                // *** End programmer edit section *** (Анкеты.ОтносКатСотр Set start)
                this.fОтносКатСотр = value;
                // *** Start programmer edit section *** (Анкеты.ОтносКатСотр Set end)

                // *** End programmer edit section *** (Анкеты.ОтносКатСотр Set end)
            }
        }
        
        /// <summary>
        /// ОценРабот.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.ОценРабот CustomAttributes)

        // *** End programmer edit section *** (Анкеты.ОценРабот CustomAttributes)
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.Оценка ОценРабот
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.ОценРабот Get start)

                // *** End programmer edit section *** (Анкеты.ОценРабот Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.Оценка result = this.fОценРабот;
                // *** Start programmer edit section *** (Анкеты.ОценРабот Get end)

                // *** End programmer edit section *** (Анкеты.ОценРабот Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.ОценРабот Set start)

                // *** End programmer edit section *** (Анкеты.ОценРабот Set start)
                this.fОценРабот = value;
                // *** Start programmer edit section *** (Анкеты.ОценРабот Set end)

                // *** End programmer edit section *** (Анкеты.ОценРабот Set end)
            }
        }
        
        /// <summary>
        /// ПолУволСотр.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.ПолУволСотр CustomAttributes)

        // *** End programmer edit section *** (Анкеты.ПолУволСотр CustomAttributes)
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.Пол ПолУволСотр
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.ПолУволСотр Get start)

                // *** End programmer edit section *** (Анкеты.ПолУволСотр Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.Пол result = this.fПолУволСотр;
                // *** Start programmer edit section *** (Анкеты.ПолУволСотр Get end)

                // *** End programmer edit section *** (Анкеты.ПолУволСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.ПолУволСотр Set start)

                // *** End programmer edit section *** (Анкеты.ПолУволСотр Set start)
                this.fПолУволСотр = value;
                // *** Start programmer edit section *** (Анкеты.ПолУволСотр Set end)

                // *** End programmer edit section *** (Анкеты.ПолУволСотр Set end)
            }
        }
        
        /// <summary>
        /// Анкеты.
        /// </summary>
        // *** Start programmer edit section *** (Анкеты.Специалист CustomAttributes)

        // *** End programmer edit section *** (Анкеты.Специалист CustomAttributes)
        [PropertyStorage(new string[] {
                "Специалист"})]
        public virtual IIS.Sektor_podbora_i_razvitiya_personala.Специалист Специалист
        {
            get
            {
                // *** Start programmer edit section *** (Анкеты.Специалист Get start)

                // *** End programmer edit section *** (Анкеты.Специалист Get start)
                IIS.Sektor_podbora_i_razvitiya_personala.Специалист result = this.fСпециалист;
                // *** Start programmer edit section *** (Анкеты.Специалист Get end)

                // *** End programmer edit section *** (Анкеты.Специалист Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкеты.Специалист Set start)

                // *** End programmer edit section *** (Анкеты.Специалист Set start)
                this.fСпециалист = value;
                // *** Start programmer edit section *** (Анкеты.Специалист Set end)

                // *** End programmer edit section *** (Анкеты.Специалист Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "АнкетыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АнкетыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АнкетыE", typeof(IIS.Sektor_podbora_i_razvitiya_personala.Анкеты));
                }
            }
            
            /// <summary>
            /// "АнкетыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АнкетыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АнкетыL", typeof(IIS.Sektor_podbora_i_razvitiya_personala.Анкеты));
                }
            }
        }
    }
}
