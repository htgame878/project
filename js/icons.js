// js/icons.js
export const getIconClass = (iconName) => {
    const map = {
        'HomeIcon': 'fa-home',
        'UsersIcon': 'fa-user-graduate',
        'SparklesIcon': 'fa-wand-magic-sparkles',
        'ChartBarIcon': 'fa-chart-pie',
        'ComputerDesktopIcon': 'fa-laptop-code',
        'CogIcon': 'fa-gear',
        'FileSpreadsheetIcon': 'fa-file-excel',
        'ClipboardDocumentCheckIcon': 'fa-clipboard-check',
        'CpuChipIcon': 'fa-microchip',
        'WifiIcon': 'fa-wifi',
        // آیکون‌های جدید اضافه شده:
        'PlusIcon': 'fa-plus',
        'PlusCircleIcon': 'fa-circle-plus'
    };
    return map[iconName] || 'fa-circle';
};