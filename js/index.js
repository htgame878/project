
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-overlay');

    // تابع باز/بسته کردن
    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // تغییر آیکون همبرگری به ضربدر
        const icon = menuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu); // بستن با کلیک روی فضای خالی
window.addEventListener('load', () => {
    // ایجاد خط اول بین مرحله ۱ و ۲
    const line1 = new LeaderLine(
        document.getElementById('step1'),
        document.getElementById('step2'),
        {
            color: '#4f46e5',
            size: 3,
            path: 'fluid', // حالت نرم و منحنی
            startSocket: 'bottom', // شروع از پایین کارت اول
            endSocket: 'top',   // پایان در بالای کارت دوم
            dash: { animation: true } // خط‌چین متحرک
        }
    );

    // ایجاد خط دوم بین مرحله ۲ و ۳
    const line2 = new LeaderLine(
        document.getElementById('step2'),
        document.getElementById('step3'),
        {
            color: '#4f46e5',
            size: 3,
            path: 'fluid',
            startSocket: 'bottom',
            endSocket: 'top',
            dash: { animation: true }
        }
    );

    // آپدیت موقعیت خطوط هنگام اسکرول و تغییر سایز پنجره
    window.addEventListener('scroll', () => {
        line1.position();
        line2.position();
    });

    window.addEventListener('resize', () => {
        line1.position();
        line2.position();
    });
});
