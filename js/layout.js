// js/layout.js

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";

  // تشخیص اینکه الان در کدام صفحه هستیم برای اکتیو کردن منو
  const path = window.location.pathname;

  sidebar.innerHTML = `
        <h2 style="margin-bottom: 30px; color: var(--primary);">سیستم هوشمند</h2>
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
              <a href="classes.html" class="nav-item ">
                <span>👨‍🎓</span> مدیریت آزمون ها
            </a>
            <a href="#" class="nav-item">
                <span>📊</span> تحلیل‌ها
            </a>
            <a href="settings.html" class="nav-item ${path.includes("settings.html") ? "active" : "" }">
                <span>⚙️</span> تنظیمات
            </a>
        </nav>
    `;

  // اضافه کردن به اول بادی
  document.body.prepend(sidebar);
}

// اجرا شدن تابع به محض لود شدن فایل
createSidebar();
