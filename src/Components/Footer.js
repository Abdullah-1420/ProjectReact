import React from 'react'

export default function Footer() {
  return (
    <div>
        <div id="divFooter" class="login_footer" >
		 <a id="hlHomePage" href="/">الصفحة الرئيسية</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
        <a id="hContactUs" href="/Ministry/About/Pages/ContactUS.aspx">اتصل بنا</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;<a id="hlSupport" href="/Support/Pages/default.aspx">المساعدة و الدعم</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;<a id="hlPrivacy" href="/Portal/Pages/Privacy.aspx">سياسة الخصوصية</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;<a id="hlTerms" href="/Portal/Pages/Terms.aspx">شروط الاستخدام</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a id="hlFAQs" href="/Support/FAQs/Pages/default.aspx">الأسئلة الشائعة</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a id="hlRelatedLinks" href="/Portal/Pages/RegistrationBenefits.aspx">فوائد التسجيل في البوابة</a><br/>
            <span id="lblFooter">جميع الحقوق محفوظة © وزارة الصحة - المملكة العربية السعودية</span>
            2022
        </div>
    </div>
  )
}
