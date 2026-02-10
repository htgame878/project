// js/layout.js

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";

  // تشخیص اینکه الان در کدام صفحه هستیم برای اکتیو کردن منو
  const path = window.location.pathname;

  sidebar.innerHTML = `
        <a href="index.html">
        <div style="display:flex;align-items: center;column-gap: 10px;margin-bottom:1rem ;justify-content:center" >
        <img style="width:230px;" src="background_removed_image.png" />
        </div>
        </a>
        <nav>
            <a href="dashboard.html" class="nav-item ">
                
            <img class="icon-template" src="icon/بازگشت به خانه.svg" />
                             پروفایل شخصی
            </a>
            <a href="classes.html" class="nav-item "> 
<img class="icon-template" src="icon/مدیریت کلاس.svg" />
                   مدیریت کلاس‌ ها
            </a>  
              <a href="exams-step1.html" class="nav-item ">
                <img class="icon-template" src="icon/آزمون ها.svg" /> مدیریت آزمون ها
            </a>  
            <a hre  f="#" class="nav-item">
                <img class="icon-template" src="icon/تحلیل ها.svg" />
 تحلیل‌ ها
            </a>
            <a href="exercises-landing.html" class="nav-item ">
                <img class="icon-template" src="icon/تمرین ها.svg" />
 تمرین ها
            </a>
             <a href="teacher-notes.html" class="nav-item ">
                <img class="icon-template" src="icon/یادداشت ها.svg" />
 یادداشت ها
              </a>
            <a href="settings.html" class="nav-item ">
                <img class="icon-template" src="icon/تنظیمات.svg" />
 تنظیمات
            </a>
            <a href="index.html" class="nav-item" style="justify-content: center;">
                 بازگشت به خانه
            </a>
 
        </nav>
    `;

  // اضافه کردن به اول بادی
  document.body.prepend(sidebar);
}

// اجرا شدن تابع به محض لود شدن فایل
createSidebar();
