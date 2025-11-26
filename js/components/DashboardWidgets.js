import { getIconClass } from '../icons.js';

// رندر کردن کارت‌های KPI
function renderKPICards(sectionData) {
    const container = document.createElement('div');
    container.className = 'kpi-row';

    sectionData.data.forEach(card => {
        const el = document.createElement('div');
        el.className = 'card';
        
        // تعیین رنگ متن اکشن
        let colorClass = 'text-primary';
        if (card.color_variant === 'danger') colorClass = 'text-danger';
        if (card.color_variant === 'warning') colorClass = 'text-warning';

        el.innerHTML = `
            <div>
                <div class="card-title">${card.title}</div>
                <div class="card-value">${card.value}</div>
                <div style="font-size: 0.8rem; color: #888;">${card.description || card.sub_text || ''}</div>
            </div>
            <div class="card-action ${colorClass}">
                ${card.action_label} <i class="fa-solid fa-arrow-left"></i>
            </div>
        `;
        container.appendChild(el);
    });
    return container;
}

// رندر کردن ویجت نمودار
function renderChartWidget(sectionData) {
    const container = document.createElement('div');
    container.className = 'chart-widget';
    container.innerHTML = `
        <h3>${sectionData.title}</h3>
        <div style="margin: 10px 0;">
            ${sectionData.filters.map(f => `<button style="margin-left:5px; padding:4px 8px; border:1px solid #ddd; border-radius:4px;">${f}</button>`).join('')}
        </div>
        <div class="chart-placeholder">
            [ نمودار ${sectionData.chart_type} در اینجا رسم می‌شود ]
            <br>
            (JS Chart Library Required)
        </div>
    `;
    return container;
}

// رندر کردن دسترسی سریع
function renderQuickActions(sectionData) {
    const container = document.createElement('div');
    container.className = 'quick-actions';
    
    let buttonsHTML = sectionData.actions.map(action => {
        return `
            <div class="action-btn" title="${action.tooltip}">
                <i class="fa-solid ${getIconClass(action.icon)}"></i>
                <span>${action.label}</span>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <h3>${sectionData.title}</h3>
        <div class="action-grid">${buttonsHTML}</div>
    `;
    return container;
}

// رندر کردن فید فعالیت‌ها
function renderActivityFeed(sectionData) {
    const container = document.createElement('div');
    container.className = 'activity-feed';
    
    let itemsHTML = sectionData.items.map(item => `
        <div class="feed-item">
            <div class="feed-text">${item.text}</div>
            <div class="feed-time">${item.timestamp}</div>
        </div>
    `).join('');

    container.innerHTML = `<h3>${sectionData.title}</h3><div style="margin-top:15px;">${itemsHTML}</div>`;
    return container;
}

// تابع اصلی که تصمیم می‌گیرد کدام ویجت رندر شود
export function renderSection(section) {
    switch (section.type) {
        case 'kpi_cards_row': return renderKPICards(section);
        case 'chart_widget': return renderChartWidget(section);
        case 'action_grid': return renderQuickActions(section);
        case 'list_widget': return renderActivityFeed(section);
        default: return document.createElement('div');
    }
}