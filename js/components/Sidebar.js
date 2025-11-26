// js/components/Sidebar.js
import { getIconClass } from '../icons.js';

// اضافه کردن پارامتر onNavigate
export function renderSidebar(data, onNavigate) {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    
    sidebar.innerHTML = `
        <div class="logo-area">
            <i class="fa-solid fa-school"></i> سیستم هوشمند
        </div>
        <ul class="nav-list"></ul>
    `;

    const ul = sidebar.querySelector('.nav-list');
    
    data.items.forEach(item => {
        const li = document.createElement('li');
        const iconClass = getIconClass(item.icon);
        
        // اگر آیتم فعال است کلاس active بگیرد
        li.className = `nav-item ${item.active ? 'active' : ''}`;
        li.dataset.href = item.href; // ذخیره مسیر در دیتا اتریبیوت

        li.innerHTML = `
            <i class="fa-solid ${iconClass}"></i>
            <span>${item.label}</span>
        `;
        
        // هندل کردن کلیک
        li.addEventListener('click', () => {
            // حذف کلاس active از همه و دادن به آیتم کلیک شده
            sidebar.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            li.classList.add('active');

            // صدا زدن تابع مسیریابی
            if (onNavigate) {
                onNavigate(item.href);
            }
        });
        
        ul.appendChild(li);
    });

    return sidebar;
}