# پروژه برای ایران

این پروژه با هدف حمایت از مردم ایران در شرایط سخت و محدودیت‌های اینترنتی توسعه یافته است. "برای ایران" یک وب‌سایت جمعی است که اطلاعات ضروری، خدمات رایگان، اقامتگاه‌های ارزان، شماره‌های اضطراری، ابزارهای اتصال و منابع مفید را در اختیار کاربران قرار می‌دهد تا در زمان قطعی یا اختلال اینترنت، دسترسی به اطلاعات حیاتی حفظ شود.

## امکانات اصلی
- **پروفایل کاربر:** ثبت و نمایش نام و نام خانوادگی کاربر در تمام صفحات (شبیه لاگین ساده با localStorage)
- **اقامتگاه‌های رایگان یا ارزان:** معرفی اقامتگاه‌ها برای افراد نیازمند
- **خدمات رایگان:** لیست خدمات و کسب‌وکارهای رایگان یا حامی مردم
- **شماره‌های اضطراری:** دسترسی سریع به شماره‌های مهم و امکان دانلود vCard
- **ابزارهای اتصال (وصل):** معرفی ابزارها و راهکارهای اتصال به اینترنت
- **منابع ایرانی:** لیست سایت‌ها و منابع داخلی برای مواقع قطعی اینترنت بین‌المللی
- **جابجایی بین‌شهری:** اطلاعات حمل‌ونقل و جابجایی ارزان
- **اخبار و اطلاعیه‌ها:** بخش اخبار برای اطلاع‌رسانی سریع
- **دایرکتوری مشاغل:** لیست شماره تماس مشاغل ضروری
- **پشتیبانی از نصب به عنوان اپلیکیشن (PWA):** قابلیت افزودن به صفحه اصلی موبایل

## ساختار پروژه
- صفحات اصلی: `index.html`, `main.html`, `profile.html`, `Residences.html`, `free_services.html`, `SOS.html`, `ir.html`, `vasl.html`, `transport.html`, `jobs.html`, `projects.html`, `about.html`, `news.html`, `businesses.html`
- داده‌ها: پوشه `json/` شامل داده‌های اقامتگاه‌ها، خدمات، مشاغل، پروژه‌ها و ...
- استایل و اسکریپت: پوشه `src/` شامل CSS، فونت، جاوااسکریپت مشترک (مانند `common-header-footer.js`)
- تصاویر و آیکون‌ها: پوشه `file/`

## نحوه اجرا
1. پروژه را کلون کنید:
   ```bash
   git clone https://github.com/ForIran98/ForIran98.github.io.git
   cd ForIran98.github.io
   ```
2. کافیست فایل `index.html` را با مرورگر باز کنید. (نیاز به سرور خاصی ندارد)
3. برای توسعه، می‌توانید از یک سرور محلی ساده استفاده کنید:
   ```bash
   npx serve .
   # یا
   python -m http.server
   ```

## مشارکت
- اگر کسب‌وکار یا خدمات رایگان دارید، اطلاعات خود را از طریق تلگرام یا گیت‌هاب ارسال کنید.
- برای افزودن اقامتگاه، با ادمین‌های معرفی‌شده در صفحه اقامتگاه‌ها تماس بگیرید.
- پیشنهادها و باگ‌ها را از طریق Issues یا Pull Request ثبت کنید.

## لایسنس
این پروژه متن‌باز است و تحت لایسنس MIT منتشر می‌شود.

---

**حامیان پروژه:**
- پروژه هم‌امید (آژانس برندسازی ذن)
- مشارکت‌کنندگان داوطلب

**ارتباط با ما:**
- [گروه تلگرام](https://t.me/+1wxyzaCKatliYTg0)
- [کانال تلگرام](https://t.me/+_7RLwYQ8sJo0MWRk)

---

> این پروژه برای کمک به مردم ایران در شرایط بحران و محدودیت اینترنت ساخته شده است. هرگونه مشارکت و حمایت شما باعث بهبود و گسترش این پروژه خواهد شد.
