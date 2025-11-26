export function renderHeader(data) {
    const header = document.createElement('header');
    header.className = 'top-header';
    
    header.innerHTML = `
        <div class="notifications">
            <div class="notif-badge">
                <i class="fa-regular fa-bell fa-lg"></i>
                <span class="badge-count">${data.notifications.count}</span>
            </div>
        </div>
        <div class="user-profile">
            <span>${data.user_profile.name}</span>
            <div class="avatar"></div> </div>
    `;
    
    return header;
}