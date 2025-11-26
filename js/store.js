export const dashboardData = {
    // ... [کد JSON که در صورت سوال دادید را اینجا کپی کنید] ...
    // برای جلوگیری از شلوغی اینجا خلاصه نوشتم، شما کل JSON را اینجا بگذارید
    "layout": {
        "sidebar": { "items": [ { "id": "nav_home", "label": "داشبورد", "icon": "HomeIcon", "active": true }, { "id": "nav_class", "label": "کلاس", "icon": "UserIcon", "active": false } ] },
        "header": { "user_profile": { "name": "جناب آقای رستمی" }, "notifications": { "count": 3 } },
        "main_content": { 
            "sections": [ 
                // داده‌های بخش KPI و نمودارها طبق JSON شما
                // ...
            ] 
        }
    }
};

// نکته: برای تست، کل JSON سوال را در این آبجکت قرار دهید.


// js/store.js

// ... دیتای قبلی (dashboardData) اینجا هست ...

export const classesData = {
    "page": "Classes List",
    "route": "/classes", // این مسیر مهم است
    "layout_components": [
      {
        "type": "page_header",
        "title": "مدیریت کلاس‌ها",
        "action_button": {
          "label": "ایجاد کلاس جدید",
          "icon": "PlusIcon",
          "action_trigger": "open_modal('create_class')"
        }
      },
      {
        "type": "grid_container",
        "columns": 3,
        "items": [
          {
            "type": "class_card",
            "id": "c_101",
            "title": "ریاضی - پایه دهم A",
            "student_count": 24,
            "avg_score": 16.5,
            "theme_color": "blue",
            "link_href": "/classes/101",
            "tags": ["فعال", "ترم اول"]
          },
          {
            "type": "class_card",
            "id": "c_102",
            "title": "فیزیک - پایه یازدهم B",
            "student_count": 30,
            "avg_score": 14.2,
            "theme_color": "purple",
            "link_href": "/classes/102",
            "tags": ["نیاز به بررسی"]
          },
          {
            "type": "create_new_card",
            "label": "افزودن کلاس جدید",
            "icon": "PlusCircleIcon",
            "style": "dashed_border",
            "action_trigger": "open_modal('create_class')"
          }
        ]
    }
]
}