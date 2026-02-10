// js/notes.js

// تلاش برای ایمپورت، اگر فایل store.js نباشد از دیتای پیش‌فرض استفاده می‌کنیم
let teacherClasses = [];
let allStudentsData = [];

try {
    // اگر فایل store.js را دارید، این خط کار می‌کند
    const module = await import('./store.js');
    teacherClasses = module.teacherClasses || [];
    allStudentsData = module.allStudentsData || [];
} catch (e) {
    console.warn('store.js not found, using dummy data.');
    // دیتای تستی (اگر store.js نبود)
    teacherClasses = [
        { id: '101', name: 'کلاس ۱۰۱ - ریاضی' },
        { id: '102', name: 'کلاس ۱۰۲ - تجربی' }
    ];
    allStudentsData = [
        { id: 'st1', full_name: 'علی رضایی', grade_label: 'دهم' },
        { id: 'st2', full_name: 'محمد محمدی', grade_label: 'یازدهم' },
        { id: 'st3', full_name: 'سارا احمدی', grade_label: 'دهم' }
    ];
}

let currentTargetType = 'class';
let selectedStudent = null;

// 1. مقداردهی اولیه لیست کلاس‌ها
const classSelect = document.getElementById('classSelect');
if(classSelect && teacherClasses.length > 0) {
    // پاک کردن گزینه‌های قبلی به جز گزینه اول
    classSelect.innerHTML = '<option value="" disabled selected>انتخاب کلاس...</option>';
    teacherClasses.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.innerText = c.name;
        classSelect.appendChild(opt);
    });
}

// 2. تغییر نوع مخاطب (Tab Switching)
// اتصال تابع به window برای دسترسی در HTML
window.setTargetType = (type, element) => {
    currentTargetType = type;
    
    // آپدیت استایل دکمه‌ها
    document.querySelectorAll('.toggle-option').forEach(el => el.classList.remove('active'));
    if(element) element.classList.add('active');

    // نمایش/مخفی کردن سکشن‌ها
    document.querySelectorAll('.target-section').forEach(el => el.classList.remove('visible'));
    
    const targetSection = document.getElementById('section-' + type);
    if(targetSection) {
        targetSection.classList.add('visible');
    }
};

// 3. مودال دانش‌آموزان
window.openStudentModal = () => {
    const modal = document.getElementById('studentModal');
    if(modal) {
        modal.classList.add('open');
        renderStudentList(allStudentsData);
        // فوکوس روی اینپوت جستجو
        setTimeout(() => document.getElementById('modalSearch')?.focus(), 100);
    }
};

window.closeStudentModal = () => {
    document.getElementById('studentModal').classList.remove('open');
};

// رندر لیست در مودال
function renderStudentList(list) {
    const modalList = document.getElementById('modalList');
    if(!modalList) return;

    if(list.length === 0) {
        modalList.innerHTML = '<div style="text-align:center; padding:20px; color:#999;">موردی یافت نشد</div>';
        return;
    }

    modalList.innerHTML = list.map(st => `
        <div class="modal-item" onclick="window.selectStudent('${st.id}', '${st.full_name}')">
            <img src="https://ui-avatars.com/api/?name=${st.full_name}&background=random&color=fff" style="width:40px; height:40px; border-radius:50%;">
            <div>
                <div style="font-weight:bold; font-size:0.95rem;color:#333">${st.full_name}</div>
                <div style="font-size:0.8rem; color:#64748b;">${st.grade_label || 'دانش‌آموز'}</div>
            </div>
        </div>
    `).join('');
}

// جستجو در مودال
const searchInput = document.getElementById('modalSearch');
if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = allStudentsData.filter(s => s.full_name.toLowerCase().includes(val));
        renderStudentList(filtered);
    });
}


window.selectStudent = (id, name) => {
    // ذخیره در متغیر سراسری
    selectedStudent = { id, name };
    
    // گرفتن المان‌های HTML
    const emptyState = document.getElementById('student-empty-state');
    const selectedState = document.getElementById('student-selected-state');
    const nameLabel = document.getElementById('sel-st-name');
    const avatarImg = document.getElementById('sel-st-avatar');

    // 1. مخفی کردن دکمه "جستجو"
    if (emptyState) {
        emptyState.style.display = 'none';
    }

    // 2. نمایش دادن کادر "انتخاب شده"
    if (selectedState) {
        // نکته مهم: باید flex باشد تا چیدمان عکس و متن درست بماند
        selectedState.style.display = 'flex'; 
    }

    // 3. پر کردن نام و عکس
    if (nameLabel) nameLabel.innerText = name;
    if (avatarImg) avatarImg.src = `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=128`;

    // 4. بستن مودال
    window.closeStudentModal();
    
    console.log('دانش‌آموز انتخاب شد:', name);
};

// تابع حذف انتخاب (ریست کردن به حالت اول)
window.clearStudentSelection = (event) => {
    // جلوگیری از کلیک شدن روی کادر زیری (اگر وجود داشته باشد)
    if(event) event.stopPropagation();

    selectedStudent = null;

    // برعکس کردن حالت نمایش
    document.getElementById('student-selected-state').style.display = 'none';
    document.getElementById('student-empty-state').style.display = 'flex'; // یا block بسته به استایل
};

// 5. ثبت نهایی
window.submitNote = () => {
    const text = document.getElementById('noteText').value;
    
    if(!text.trim()) {
        alert('لطفاً متن یادداشت را وارد کنید.');
        return;
    }

    if(currentTargetType === 'class' && !classSelect.value) {
        alert('لطفاً یک کلاس را انتخاب کنید.');
        return;
    }

    if(currentTargetType === 'student' && !selectedStudent) {
        alert('لطفاً یک دانش‌آموز را انتخاب کنید.');
        return;
    }

    // لاگ کردن دیتا برای تست
    console.log('Sending Note:', {
        type: currentTargetType,
        targetId: currentTargetType === 'class' ? classSelect.value : selectedStudent.id,
        text: text
    });

    alert('یادداشت با موفقیت ثبت شد!');
    // window.location.href = 'notes-history.html'; // بعد از تست فعال کنید
};