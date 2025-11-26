// js/pages/ClassesPage.js
import { renderClassCard, renderCreateCard } from '../components/ClassCard.js';
import { getIconClass } from '../icons.js';

export function renderClassesPage(pageData, container) {
    // پاک کردن کانتینر
    container.innerHTML = '';
    
    const wrapper = document.createElement('div');
    wrapper.style.padding = "30px";

    // حلقه روی layout_components
    pageData.layout_components.forEach(component => {
        
        // --- 1. رندر کردن هدر صفحه ---
        if (component.type === 'page_header') {
            const header = document.createElement('div');
            header.className = 'page-header';
            
            // دکمه سمت چپ (اکشن)
            const btnHtml = component.action_button ? `
                <button class="btn btn-primary" id="headerActionBtn">
                    <i class="fa-solid ${getIconClass(component.action_button.icon)}"></i>
                    ${component.action_button.label}
                </button>
            ` : '';

            header.innerHTML = `
                <h1 class="page-title">${component.title}</h1>
                ${btnHtml}
            `;
            
            // ایونت دکمه هدر
            if(component.action_button) {
                const btn = header.querySelector('#headerActionBtn');
                btn.addEventListener('click', () => {
                   // منطق باز کردن مدال
                   alert(`Action Triggered: ${component.action_button.action_trigger}`);
                });
            }

            wrapper.appendChild(header);
        }

        // --- 2. رندر کردن گرید کلاس‌ها ---
        if (component.type === 'grid_container') {
            const grid = document.createElement('div');
            grid.className = 'classes-grid';
            
            component.items.forEach(item => {
                let cardElement;
                
                if (item.type === 'class_card') {
                    cardElement = renderClassCard(item);
                } else if (item.type === 'create_new_card') {
                    cardElement = renderCreateCard(item);
                }

                if (cardElement) grid.appendChild(cardElement);
            });

            wrapper.appendChild(grid);
        }
    });

    container.appendChild(wrapper);
}