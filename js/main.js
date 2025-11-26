// js/main.js
import { dashboardData, classesData } from './store.js'; 
import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';
import { renderSection } from './components/DashboardWidgets.js';
import { renderClassesPage } from './pages/ClassesPage.js'; // ایمپورت صفحه جدید

// 1. تعریف کانتینر محتوا در سطح بالا تا همه توابع به آن دسترسی داشته باشند
let contentArea;

// 2. تابع رندر کردن داشبورد (کدهای قبلی را داخل تابع بردیم)
function loadDashboard() {
    contentArea.innerHTML = ''; // پاک کردن محتوای قبلی
    
    // رندر سکشن‌ها
    dashboardData.layout.main_content.sections.forEach(section => {
        const widget = renderSection(section);
        contentArea.appendChild(widget);
    });
}

// 3. تابع رندر کردن صفحه کلاس‌ها
function loadClasses() {
    contentArea.innerHTML = ''; // پاک کردن محتوای قبلی
    renderClassesPage(classesData, contentArea);
}

// 4. سیستم مسیریابی (Simple Router)
function handleNavigation(path) {
    console.log("Navigating to:", path);
    
    switch(path) {
        case '/dashboard':
            loadDashboard();
            break;
        
        // نکته: در فایل store.js دیتای کلاس‌ها مسیر /classes دارد
        // اما در منوی سایدبار ممکن است /students باشد. هر دو را هندل می‌کنیم:
        case '/classes': 
        case '/students': 
            loadClasses();
            break;
            
        case '/generate':
            contentArea.innerHTML = '<h2>صفحه تولید محتوا (به زودی...)</h2>';
            break;
            
        default:
            contentArea.innerHTML = `<h2>صفحه ${path} هنوز ساخته نشده است.</h2>`;
    }
}

// 5. اجرای اولیه برنامه
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    // کانتینر اصلی
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'main-wrapper';
    
    // هدر ثابت است
    const header = renderHeader(dashboardData.layout.header);
    mainWrapper.appendChild(header);

    // ناحیه محتوای متغیر (که محتویاتش عوض می‌شود)
    contentArea = document.createElement('main');
    contentArea.className = 'dashboard-content'; // یا کلاس عمومی‌تر
    mainWrapper.appendChild(contentArea);

    // سایدبار (تابع navigation را به آن پاس می‌دهیم)
    const sidebar = renderSidebar(dashboardData.layout.sidebar, handleNavigation);
    
    app.appendChild(sidebar);
    app.appendChild(mainWrapper);

    // بارگذاری پیش‌فرض (معمولاً داشبورد)
    loadDashboard();
});