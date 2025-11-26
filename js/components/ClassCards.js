// js/components/ClassCard.js
import { getIconClass } from '../icons.js';

/**
 * رندر کردن کارت کلاس معمولی
 */
export function renderClassCard(data) {
    // تعیین کلاس رنگ بر اساس تم
    const themeClass = data.theme_color ? `card-theme-${data.theme_color}` : '';

    const card = document.createElement('a');
    card.href = data.link_href || '#';
    card.className = `class-card ${themeClass}`;
    
    // ساخت تگ‌های HTML
    const tagsHtml = data.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    card.innerHTML = `
        <div class="card-header">
            <h3>${data.title}</h3>
        </div>
        
        <div class="card-stats">
            <div class="stat-item" title="تعداد دانش‌آموزان">
                <i class="fa-solid fa-users"></i>
                <span>${data.student_count} نفر</span>
            </div>
            <div class="stat-item" title="میانگین نمرات">
                <i class="fa-solid fa-chart-line"></i>
                <span>میانگین: ${data.avg_score}</span>
            </div>
        </div>

        <div class="card-tags">
            ${tagsHtml}
        </div>
    `;

    // هندل کردن کلیک برای روتینگ (جلوگیری از رفرش صفحه)
    card.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Navigating to class details: ${data.id}`);
        // در آینده اینجا فانکشن router.navigate(data.link_href) را صدا می‌زنیم
    });

    return card;
}

/**
 * رندر کردن کارت "ایجاد کلاس جدید"
 */
export function renderCreateCard(data) {
    const card = document.createElement('div');
    card.className = 'class-card create-card'; // استایل متفاوت

    const iconClass = getIconClass(data.icon);

    card.innerHTML = `
        <i class="fa-solid ${iconClass} create-icon"></i>
        <span class="create-label">${data.label}</span>
    `;

    // اتصال اکشن تریگر
    card.addEventListener('click', () => {
        if (data.action_trigger && data.action_trigger.includes('open_modal')) {
            // استخراج نام مدال از استرینگ (مثلا 'create_class')
            const match = data.action_trigger.match(/'([^']+)'/);
            if (match) {
                const modalName = match[1];
                console.log(`Open Modal Requested: ${modalName}`);
                // فعلا الرت میدهیم تا سیستم مدال را بسازیم
                alert(`مدال باز شد: ${modalName}`);
            }
        }
    });

    return card;
}