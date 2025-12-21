// js/layout.js

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";

  // تشخیص اینکه الان در کدام صفحه هستیم برای اکتیو کردن منو
  const path = window.location.pathname;

  sidebar.innerHTML = `
        <a href="/">
        <div style="display:flex;align-items: center;column-gap: 10px;margin-bottom:1rem" >
        <img style="width:100px;" src="background_removed_image.png" />
        <h3 style=" color: var(--primary);">سیستم هوشمند</h2>
        </div>
        </a>
        <nav>
            <a href="dashboard.html" class="nav-item ${
              path.includes("dashboard.html") ? "active" : ""
            }">
                <span>🏠</span> پروفایل شخصی
            </a>
            <a href="classes.html" class="nav-item ${
              path.includes("classes.html") ? "active" : ""
            }">
                <span>👨‍🎓</span> مدیریت کلاس‌ها
            </a>
              <a href="exams-step1.html" class="nav-item ">
                <span>👨‍🎓</span> مدیریت آزمون ها
            </a>
            <a href="#" class="nav-item">
                <span>📊</span> تحلیل‌ها
            </a>
            <a href="exercises-landing.html" class="nav-item ${path.includes("settings.html") ? "active" : "" }">
                <span>🏅</span> تمرین ها
            </a>
             <a href="teacher-notes.html" class="nav-item ${path.includes("settings.html") ? "active" : "" }">
                <span>📝</span> یادداشت ها
              </a>
            <a href="settings.html" class="nav-item ${path.includes("settings.html") ? "active" : "" }">
                <span>⚙️</span> تنظیمات
            </a>
            <a href="index.html" class="nav-item">
                <span>🏠</span> بازگشت به خانه
            </a>
        </nav>
    `;

  // اضافه کردن به اول بادی
  document.body.prepend(sidebar);
}

// اجرا شدن تابع به محض لود شدن فایل
createSidebar();
