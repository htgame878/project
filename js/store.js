// js/store.js
// ... (دیتای قبلی dashboard و classes) ...

export const examEntryData = {
    "tab_id": "manual_entry_matrix",
    "label": "ورود دستی نمرات",
    "config": {
      "exam_id": "EX_204",
      "total_questions": 3,
      "max_total_score": 10
    },
    "columns_schema": [
      // نکته: در حالت RTL، پین سمت "چپ" یعنی انتهای جدول و پین "راست" یعنی ابتدای جدول
      // برای راحتی، ما از کلاس‌های منطقی start و end استفاده می‌کنیم
      { "id": "student_info", "type": "fixed_column", "label": "نام دانش‌آموز", "pinned": "start" },
      { "id": "q1", "type": "question_column", "label": "س ۱", "meta": { "topic": "توابع", "max_score": 2 } },
      { "id": "q2", "type": "question_column", "label": "س ۲", "meta": { "topic": "مثلثات", "max_score": 4 } },
      { "id": "q3", "type": "question_column", "label": "س ۳", "meta": { "topic": "حد", "max_score": 4 } },
      { "id": "final_score", "type": "calculated_column", "label": "نمره کل", "pinned": "end" }
    ],
    "rows_data_example": [
      {
        "student_id": "st_101",
        "student_name": "علی رضایی",
        "answers": { "q1": 2, "q2": 0, "q3": 2.5 }
      },
      {
        "student_id": "st_102",
        "student_name": "محمد محمدی",
        "answers": { "q1": 1.5, "q2": 3, "q3": 4 }
      },
      {
          "student_id": "st_103",
          "student_name": "سارا امینی",
          "answers": { "q1": 0, "q2": 0, "q3": 0 }
      }
    ]
  };
  // js/store.js

// ... (دیتای قبلی) ...

export const classDetailData = {
  "info": {
      "id": "c_101",
      "title": "کلاس ۱۰۱ - ریاضی",
      "breadcrumb": [
          { "text": "لیست کلاس‌ها", "href": "classes.html" },
          { "text": "کلاس ۱۰۱ - ریاضی", "href": "#", "active": true }
      ]
  },
  "students": [
      { "id": "st_1", "name": "علی رضایی", "avatar": "https://ui-avatars.com/api/?name=Ali+Rezaei&background=random" },
      { "id": "st_2", "name": "محمد محمدی", "avatar": "https://ui-avatars.com/api/?name=Mohammad+M&background=random" },
      { "id": "st_3", "name": "سارا امینی", "avatar": "https://ui-avatars.com/api/?name=Sara+Amini&background=random" },
      { "id": "st_4", "name": "کیارش رستمی", "avatar": "https://ui-avatars.com/api/?name=Kiarash+R&background=random" }
  ],
  "exams": [
      { 
          "id": "ex_1", "title": "آزمون فصل اول (توابع)", "date": "۱۴۰۲/۰۷/۱۰", 
          "status": "closed", "status_label": "برگزار شده", "score_avg": 16.5 
      },
      { 
          "id": "ex_2", "title": "آزمون مثلثات", "date": "۱۴۰۲/۰۸/۰۵", 
          "status": "active", "status_label": "در حال برگزاری", "score_avg": null 
      },
      { 
          "id": "ex_3", "title": "میان ترم اول", "date": "۱۴۰۲/۰۹/۲۰", 
          "status": "draft", "status_label": "پیش‌نویس", "score_avg": null 
      }
  ]
};

// js/store.js

// ... (دیتای قبلی) ...

export const examMatrixData = {
  "config": {
      "exam_title": "آزمون فصل اول - توابع",
      "date": "۱۴۰۲/۰۷/۱۰",
      "questions": [
          { "id": 1, "text": "دامنه تابع رادیکالی را بیابید." },
          { "id": 2, "text": "برد تابع درجه دوم زیر کدام است؟" },
          { "id": 3, "text": "آیا تابع مفروض یک‌به‌یک است؟" },
          { "id": 4, "text": "مقدار حد تابع در نقطه x=2" },
          { "id": 5, "text": "مشتق تابع در نقطه x=0" }
      ]
  },
  "results": [
      {
          "student_name": "علی رضایی",
          "avatar": "https://ui-avatars.com/api/?name=Ali+Rezaei&background=random",
          "total_score": 18,
          "answers": ["correct", "correct", "wrong", "correct", "correct"]
      },
      {
          "student_name": "محمد محمدی",
          "avatar": "https://ui-avatars.com/api/?name=Mohammad+M&background=random",
          "total_score": 12,
          "answers": ["wrong", "partial", "wrong", "correct", "skipped"]
      },
      {
          "student_name": "سارا امینی",
          "avatar": "https://ui-avatars.com/api/?name=Sara+Amini&background=random",
          "total_score": 20,
          "answers": ["correct", "correct", "correct", "correct", "correct"]
      },
      {
          "student_name": "کیارش رستمی",
          "avatar": "https://ui-avatars.com/api/?name=Kiarash+R&background=random",
          "total_score": 8,
          "answers": ["wrong", "wrong", "wrong", "partial", "wrong"]
      }
  ]
};

// js/store.js
// ... (کدهای قبلی) ...

// داده‌های ریز نمرات میان‌ترم برای هر دانش‌آموز
export const studentReports = {
  "st_1": { // علی رضایی
      "student_name": "علی رضایی",
      "exam_title": "میان‌ترم ریاضی - آذر ماه",
      "total_score": 18.5,
      "max_score": 20,
      "questions": [
          { "id": 1, "topic": "توابع", "status": "correct", "score": 4 },
          { "id": 2, "topic": "مثلثات", "status": "correct", "score": 3 },
          { "id": 3, "topic": "حد", "status": "wrong", "score": 0 }, // غلط
          { "id": 4, "topic": "پیوستگی", "status": "partial", "score": 1.5 }, // ناقص
          { "id": 5, "topic": "مشتق", "status": "correct", "score": 5 },
          { "id": 6, "topic": "کاربرد مشتق", "status": "correct", "score": 5 }
      ]
  },
  "st_2": { // محمد محمدی (برای تست)
      "student_name": "محمد محمدی",
      "exam_title": "میان‌ترم ریاضی - آذر ماه",
      "total_score": 12,
      "max_score": 20,
      "questions": [
          { "id": 1, "topic": "توابع", "status": "wrong", "score": 0 },
          { "id": 2, "topic": "مثلثات", "status": "wrong", "score": 0 },
          { "id": 3, "topic": "حد", "status": "correct", "score": 4 },
          { "id": 4, "topic": "پیوستگی", "status": "correct", "score": 4 },
          { "id": 5, "topic": "مشتق", "status": "partial", "score": 2 },
          { "id": 6, "topic": "کاربرد مشتق", "status": "partial", "score": 2 }
      ]
  }
};

// js/store.js

// ... (دیتای قبلی) ...

// لیست کلاس‌هایی که معلم دارد (برای انتخاب در مودال)
export const availableClasses = [
    { id: "c_101", name: "ریاضی دهم A", location: "کلاس ۱۰۱" },
    { id: "c_102", name: "فیزیک یازدهم B", location: "کلاس ۲۰۳" },
    { id: "c_103", name: "هندسه دوازدهم", location: "کلاس ۳۰۵" },
    { id: "free", name: "ساعت آزاد / مطالعه", location: "دفتر معلمان" }
];

// داده‌های برنامه هفتگی (شنبه تا پنج‌شنبه)
// هر روز آرایه‌ای از 3 اسلات دارد. null یعنی خالی.
export const weeklyScheduleData = {
    "sat": [
        { class_id: "c_101", name: "ریاضی دهم A", location: "کلاس ۱۰۱" }, // زنگ ۱
        null, // زنگ ۲ خالی
        { class_id: "c_102", name: "فیزیک یازدهم B", location: "کلاس ۲۰۳" } // زنگ ۳
    ],
    "sun": [null, null, null],
    "mon": [
        null,
        { class_id: "c_103", name: "هندسه دوازدهم", location: "کلاس ۳۰۵" },
        null
    ],
    "tue": [null, null, null],
    "wed": [null, null, null],
    "thu": [null, null, null]
};

// js/store.js

// ... (دیتای قبلی) ...

export const allStudentsData = [
    { id: "st_1", row_number: 1, full_name: "آرمان کریمی", grade_label: "دهم", grade_color: "blue" },
    { id: "st_2", row_number: 2, full_name: "بردیا رحمانی", grade_label: "یازدهم", grade_color: "purple" },
    { id: "st_3", row_number: 3, full_name: "پارسا رستمی", grade_label: "دوازدهم", grade_color: "green" },
    { id: "st_4", row_number: 4, full_name: "حسین محمدی", grade_label: "دهم", grade_color: "blue" },
    { id: "st_5", row_number: 5, full_name: "کیارش عباسی", grade_label: "یازدهم", grade_color: "purple" },
    { id: "st_6", row_number: 6, full_name: "نیما کاظمی", grade_label: "دوازدهم", grade_color: "green" },
    { id: "st_7", row_number: 7, full_name: "رضا سعیدی", grade_label: "دهم", grade_color: "blue" },
    { id: "st_8", row_number: 8, full_name: "سهیل نوری", grade_label: "یازدهم", grade_color: "purple" }
];

// js/store.js

// ... (دیتای قبلی) ...

export const exerciseStudentsData = [
    { 
        id: "st_1", name: "علی رضایی", avatar: "https://ui-avatars.com/api/?name=Ali+Rezaei&background=random",
        needs_exercise: true, reason: "افت نمره در توابع", urgency: "high"
    },
    { 
        id: "st_2", name: "کیارش رستمی", avatar: "https://ui-avatars.com/api/?name=Kiarash+R&background=random",
        needs_exercise: true, reason: "عدم شرکت در آزمون", urgency: "medium"
    },
    { 
        id: "st_3", name: "سارا امینی", avatar: "https://ui-avatars.com/api/?name=Sara+Amini&background=random",
        needs_exercise: false, reason: "", urgency: "low"
    },
    { 
        id: "st_4", name: "محمد محمدی", avatar: "https://ui-avatars.com/api/?name=Mohammad+M&background=random",
        needs_exercise: false, reason: "", urgency: "low"
    },
    { 
        id: "st_5", name: "نیما کاظمی", avatar: "https://ui-avatars.com/api/?name=Nima+Kazemi&background=random",
        needs_exercise: true, reason: "ضعف در مثلثات", urgency: "high"
    }
];