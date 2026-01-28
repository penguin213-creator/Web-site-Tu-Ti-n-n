// ===== TỔNG QUAN =====
// Main Logic: Video nền, Navigation, UI Update, Story Logic

// ===== DATA INITIALIZATION EXTENSION =====
function initializeAppSpecificData() {
    // Khởi tạo stories với truyện ngẫu nhiên ngắn
    if (!localStorage.getItem('tutien_stories')) {
        const sampleStories = [
            {
                id: 1,
                title: 'Vạn Cổ Chí Tôn',
                author: 'Cửu U Chân Nhân',
                genre: 'tien-hiep',
                synopsis: 'Linh khí khô kiệt, thánh nhân không xuất. Một thiếu niên từ nơi hoang vu đi ra, nghịch thiên hành đạo, trở thành vạn cổ chí tôn...',
                content: `Chương 1: Thức Tỉnh\n\nTrong làng Vân Sơn nhỏ bé, Lâm Phong đang ngồi thiền dưới gốc cây cổ thụ. Một luồng sáng kỳ lạ từ trời cao đổ xuống, xuyên qua đỉnh đầu hắn.`,
                chapters: 3,
                likes: 50000,
                views: 1200000,
                bookmarks: 25000,
                date: '2023-03-15',
                status: 'ongoing'
            },
            {
                id: 2,
                title: 'Nghịch Thiên Thần Đế',
                author: 'Thần Võ Tôn Giả',
                genre: 'tien-hiep',
                synopsis: 'Thần đế chuyển thế, tái sinh thành phế vật thiếu gia. Nắm trong tay vô thượng thần công, bắt đầu con đường nghịch thiên phản thần...',
                content: `Chương 1: Tái Sinh\n\nDạ Thần mở mắt, phát hiện mình đã tái sinh thành Dạ Vân - thiếu gia phế vật bị đuổi khỏi gia tộc.`,
                chapters: 3,
                likes: 42000,
                views: 980000,
                bookmarks: 21000,
                date: '2023-04-20',
                status: 'ongoing'
            }
        ];
        localStorage.setItem('tutien_stories', JSON.stringify(sampleStories));
    }
    
    // Đảm bảo không ghi đè nếu đã null hoặc có dữ liệu
    if (localStorage.getItem('tutien_currentUser') === undefined) localStorage.setItem('tutien_currentUser', null);
    if (!localStorage.getItem('tutien_drafts')) localStorage.setItem('tutien_drafts', JSON.stringify([]));
    if (!localStorage.getItem('tutien_userXP')) localStorage.setItem('tutien_userXP', JSON.stringify([]));
    if (!localStorage.getItem('tutien_readStories')) localStorage.setItem('tutien_readStories', JSON.stringify([]));
    
    const cultivationRealms = [
        { level: 1, name: "Luyện Khí Kỳ", xpRequired: 100, color: "realm-colors" },
        { level: 2, name: "Trúc Cơ Kỳ", xpRequired: 300, color: "realm-colors-2" },
        { level: 3, name: "Kim Đan Kỳ", xpRequired: 600, color: "realm-colors-3" },
        { level: 4, name: "Nguyên Anh Kỳ", xpRequired: 1000, color: "realm-colors-4" },
        { level: 5, name: "Hóa Thần Kỳ", xpRequired: 1500, color: "realm-colors-5" }
    ];
    
    if (!localStorage.getItem('tutien_cultivationRealms')) {
        localStorage.setItem('tutien_cultivationRealms', JSON.stringify(cultivationRealms));
    }
}

// ===== YOUTUBE VIDEO BACKGROUND =====
let youtubePlayer = null;

function initializeYouTubeBackground() {
    function hideLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => { loadingScreen.style.display = 'none'; }, 500);
        }
    }
    
    function handleYouTubeError() {
        const fallbackVideo = document.querySelector('.fallback-video');
        if (fallbackVideo) {
            fallbackVideo.style.display = 'block';
            const video = fallbackVideo.querySelector('video');
            if (video) video.play().catch(e => console.log('Fallback video play error:', e));
        }
        hideLoadingScreen();
    }
    
    function createYouTubePlayer() {
        try {
            // Kiểm tra YT đã sẵn sàng chưa
            if (!window.YT) { handleYouTubeError(); return; }
            
            youtubePlayer = new YT.Player('youtube-player', {
                videoId: '9y4UGT0GW6Y',
                playerVars: {
                    'autoplay': 1, 'mute': 1, 'controls': 0, 'showinfo': 0,
                    'rel': 0, 'modestbranding': 1, 'playsinline': 1,
                    'iv_load_policy': 3, 'disablekb': 1, 'fs': 0,
                    'loop': 1, 'playlist': '9y4UGT0GW6Y', 'start': 0, 'end': 300
                },
                events: {
                    'onReady': function(event) {
                        event.target.playVideo();
                        hideLoadingScreen();
                        document.addEventListener('click', function initClick() {
                            event.target.playVideo();
                            document.removeEventListener('click', initClick);
                        }, { once: true });
                    },
                    'onStateChange': function(event) {
                        if (event.data === YT.PlayerState.ENDED) event.target.playVideo();
                    },
                    'onError': function(event) { handleYouTubeError(); }
                }
            });
        } catch (error) { handleYouTubeError(); }
    }
    
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = function() { createYouTubePlayer(); };
        setTimeout(function() { if (!youtubePlayer) handleYouTubeError(); }, 5000);
    } else {
        createYouTubePlayer();
    }
}

// ===== DOM ELEMENTS =====
// Lưu ý: elements sẽ được lấy sau khi DOMContentLoaded để đảm bảo an toàn
let elements = {}; 

function cacheElements() {
    elements = {
        trangChu: document.getElementById('trang-chu'),
        thuVien: document.getElementById('thu-vien'),
        vietTruyen: document.getElementById('viet-truyen'),
        dongPhu: document.getElementById('dong-phu'),
        gioiThieu: document.getElementById('gioi-thieu'),
        navLinks: document.querySelectorAll('.nav-links a'),
        nutDangNhap: document.getElementById('nut-dang-nhap'),
        nutDangKy: document.getElementById('nut-dang-ky'),
        nutDangXuat: document.getElementById('nut-dang-xuat'),
        nutBatDauViet: document.getElementById('nut-bat-dau-viet'),
        nutKhamPha: document.getElementById('nut-kham-pha'),
        nutLuuNhap: document.getElementById('nut-luu-nhap'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        modalDangNhap: document.getElementById('modal-dang-nhap'),
        modalDangKy: document.getElementById('modal-dang-ky'),
        closeModals: document.querySelectorAll('.close-modal'),
        formDangNhap: document.getElementById('form-dang-nhap'),
        formDangKy: document.getElementById('form-dang-ky'),
        formTruyen: document.getElementById('form-truyen'),
        containerTruyen: document.getElementById('container-truyen'),
        danhSachTruyen: document.getElementById('danh-sach-truyen'),
        tenNguoiDung: document.getElementById('ten-nguoi-dung'),
        email: document.getElementById('email'),
        thongKe: document.getElementById('thong-ke'),
        capDo: document.getElementById('cap-do'),
        capHienTai: document.getElementById('cap-hien-tai'),
        xpHienTai: document.getElementById('xp-hien-tai'),
        xpCanThiet: document.getElementById('xp-can-thiet'),
        thanhXP: document.getElementById('thanh-xp'),
        truyenDaDoc: document.getElementById('truyen-da-doc'),
        canhGioi: document.getElementById('canh-gioi'),
        demTu: document.getElementById('dem-tu'),
        noiDung: document.getElementById('noi-dung'),
        nutLui: document.getElementById('nut-lui'),
        nutTrangChu: document.getElementById('nut-trang-chu'),
        nutQuayLai: document.getElementById('nut-quay-lai'),
        nutTienToi: document.getElementById('nut-tien-toi'),
        nutTaiLai: document.getElementById('nut-tai-lai')
    };
}

// ===== NAVIGATION SYSTEM (Unified with History API) =====
const SECTIONS = ['hero-section', 'featured-section', 'stories-section', 'write-section', 'profile-section', 'about-section'];

function showSection(sectionId) {
    SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === sectionId) ? 'block' : 'none';
    });
    
    // Scroll lên đầu trang khi chuyển section
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load dữ liệu đặc thù cho từng section
    if (sectionId === 'stories-section') loadStories();
    
    updateActiveNav(sectionId);
}

function updateActiveNav(sectionId) {
    if (!elements.navLinks) return;
    elements.navLinks.forEach(link => link.classList.remove('active'));

    const map = {
        'hero-section': 'trang-chu', 
        'featured-section': 'trang-chu', 
        'stories-section': 'thu-vien', 
        'write-section': 'viet-truyen',
        'profile-section': 'dong-phu', 
        'about-section': 'gioi-thieu'
    };
    
    const activeId = map[sectionId];
    if (activeId) {
        document.getElementById(activeId)?.classList.add('active');
    }
}

function navigateToSection(sectionId, push = true) {
    showSection(sectionId);
    if (push) {
        history.pushState({ section: sectionId }, "", `#${sectionId}`);
    }
}

function goHome() {
    navigateToSection('hero-section');
}

function goBack() {
    history.back();
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', function() {
    cacheElements();
    initializeAppSpecificData();
    initializeYouTubeBackground();
    
    // Xử lý điều hướng ban đầu
    const sectionFromHash = location.hash.replace("#", "");
    if (SECTIONS.includes(sectionFromHash)) {
        navigateToSection(sectionFromHash, false);
    } else {
        navigateToSection("hero-section", false);
    }

    updateUI();
    loadStories();
    setupEventListeners();
    setupStickyNav();
    
    // Notification Welcome
    setTimeout(() => { showNotification('Chào mừng đến với Web Viết Truyện Tu Tiên!', 'success'); }, 2000);
});

// Sự kiện History API (Back/Forward trình duyệt)
window.addEventListener("popstate", (e) => {
    const section = e.state?.section || "hero-section";
    showSection(section);
});

// ===== STICKY NAVIGATION EFFECT =====
function setupStickyNav() {
    const stickyNav = document.querySelector('.sticky-nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) stickyNav.classList.add('scrolled');
        else stickyNav.classList.remove('scrolled');
    });
    
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    // Menu Links
    if (elements.trangChu) elements.trangChu.onclick = (e) => { e.preventDefault(); navigateToSection('hero-section'); };
    if (elements.thuVien) elements.thuVien.onclick = (e) => { e.preventDefault(); navigateToSection('stories-section'); };
    if (elements.vietTruyen) elements.vietTruyen.onclick = (e) => { e.preventDefault(); navigateToSection('write-section'); };
    if (elements.dongPhu) elements.dongPhu.onclick = (e) => { e.preventDefault(); navigateToSection('profile-section'); };
    if (elements.gioiThieu) elements.gioiThieu.onclick = (e) => { e.preventDefault(); navigateToSection('about-section'); };

    // Footer Links (using delegation)
    document.querySelectorAll('a[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection(this.getAttribute('data-section'));
        });
    });

    // Auth Buttons
    elements.nutDangNhap?.addEventListener('click', () => openModal(elements.modalDangNhap));
    elements.nutDangKy?.addEventListener('click', () => openModal(elements.modalDangKy));
    
    // Gọi hàm global handleLogout (từ auth.js)
    elements.nutDangXuat?.addEventListener('click', () => {
        if(typeof window.handleLogout === 'function') window.handleLogout();
    });
    
    // Action Buttons
    elements.nutBatDauViet?.addEventListener('click', (e) => { e.preventDefault(); navigateToSection('write-section'); });
    elements.nutKhamPha?.addEventListener('click', (e) => { e.preventDefault(); navigateToSection('stories-section'); });
    
    // Modal Controls
    elements.closeModals?.forEach(btn => btn.addEventListener('click', closeAllModals));
    
    document.getElementById('hien-dang-ky')?.addEventListener('click', (e) => { e.preventDefault(); closeAllModals(); openModal(elements.modalDangKy); });
    document.getElementById('hien-dang-nhap')?.addEventListener('click', (e) => { e.preventDefault(); closeAllModals(); openModal(elements.modalDangNhap); });
    
    // Auth Forms - Gọi hàm global từ auth.js
    elements.formDangNhap?.addEventListener('submit', (e) => {
        if(typeof window.handleLogin === 'function') window.handleLogin(e);
    });
    elements.formDangKy?.addEventListener('submit', (e) => {
        if(typeof window.handleRegister === 'function') window.handleRegister(e);
    });

    // Story Form
    elements.formTruyen?.addEventListener('submit', handleStorySubmit);
    elements.nutLuuNhap?.addEventListener('click', saveDraft);
    elements.noiDung?.addEventListener('input', updateWordCount);
    
    // Password Toggle
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            if (input.type === 'password') { input.type = 'text'; icon.className = 'fas fa-eye-slash'; }
            else { input.type = 'password'; icon.className = 'fas fa-eye'; }
        });
    });
    
    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterStories(this.getAttribute('data-filter'));
        });
    });
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    // Browser Nav Buttons
    if (elements.nutQuayLai) elements.nutQuayLai.onclick = () => history.back();
    if (elements.nutTienToi) elements.nutTienToi.onclick = () => history.forward();
    if (elements.nutTaiLai) elements.nutTaiLai.onclick = () => location.reload();
    if (elements.nutTrangChu) elements.nutTrangChu.onclick = goHome;
    if (elements.nutLui) elements.nutLui.onclick = () => history.back();
    
    // Outside Click Modal
    window.addEventListener('click', (e) => {
        if (e.target === elements.modalDangNhap) closeModal(elements.modalDangNhap);
        if (e.target === elements.modalDangKy) closeModal(elements.modalDangKy);
    });
}

// ===== MODAL FUNCTIONS =====
function openModal(modal) {
    if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}

function closeModal(modal) {
    if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}

function closeAllModals() {
    if(elements.modalDangNhap) closeModal(elements.modalDangNhap);
    if(elements.modalDangKy) closeModal(elements.modalDangKy);
}

// ===== STORY FUNCTIONS =====
function handleStorySubmit(e) {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để đăng truyện!', 'error');
        openModal(elements.modalDangNhap);
        return;
    }
    const title = document.getElementById('tieu-de').value;
    const genre = document.getElementById('the-loai').value;
    const synopsis = document.getElementById('tom-tat').value;
    const content = document.getElementById('noi-dung').value;
    
    if (!title || !genre || !content) { showNotification('Vui lòng điền đầy đủ thông tin!', 'error'); return; }
    
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const newStory = {
        id: Date.now(), title, author: currentUser.username, genre, synopsis, content,
        chapters: 1, likes: 0, views: 0, bookmarks: 0, date: new Date().toISOString().split('T')[0], status: 'ongoing'
    };
    stories.push(newStory);
    localStorage.setItem('tutien_stories', JSON.stringify(stories));
    
    // Cập nhật thống kê user (cần logic phức tạp hơn chút để update vào danh sách user)
    // Ở đây tạm thời chỉ update UI
    
    elements.formTruyen.reset();
    updateWordCount();
    showNotification('Đăng truyện thành công!', 'success');
    loadStories();
    setTimeout(() => { navigateToSection('stories-section'); }, 1500);
}

function saveDraft() {
    const title = document.getElementById('tieu-de').value;
    const content = document.getElementById('noi-dung').value;
    if (!title && !content) { showNotification('Không có nội dung để lưu!', 'error'); return; }
    
    const drafts = JSON.parse(localStorage.getItem('tutien_drafts')) || [];
    drafts.push({
        id: Date.now(), title, genre: document.getElementById('the-loai').value,
        synopsis: document.getElementById('tom-tat').value, content,
        lastSaved: new Date().toISOString(), wordCount: content.trim().split(/\s+/).length
    });
    localStorage.setItem('tutien_drafts', JSON.stringify(drafts));
    showNotification('Đã lưu bản nháp!', 'success');
}

function updateWordCount() {
    if (elements.demTu && elements.noiDung) {
        elements.demTu.textContent = elements.noiDung.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    }
}

// ===== EXPERIENCE SYSTEM =====
function updateExperience(storyId) {
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    if (!currentUser) return;
    
    let readStories = JSON.parse(localStorage.getItem('tutien_readStories')) || [];
    if (readStories.some(item => item.userId === currentUser.id && item.storyId == storyId)) return;
    
    let userXP = JSON.parse(localStorage.getItem('tutien_userXP')) || [];
    let userXPData = userXP.find(xp => xp.userId === currentUser.id);
    if (!userXPData) {
        userXPData = { userId: currentUser.id, xp: 0, level: 1, storiesRead: 0, lastUpdated: new Date().toISOString() };
        userXP.push(userXPData);
    }
    
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const story = stories.find(s => s.id == storyId);
    if (!story) return;
    
    let xpGained = 50; // Simple logic
    userXPData.xp += xpGained;
    userXPData.storiesRead += 1;
    
    // Level Up Check
    const realms = JSON.parse(localStorage.getItem('tutien_cultivationRealms')) || [];
    let nextRealm = realms.find(r => r.level === userXPData.level + 1);
    while (nextRealm && userXPData.xp >= nextRealm.xpRequired) {
        userXPData.level += 1;
        nextRealm = realms.find(r => r.level === userXPData.level + 1);
        showNotification(`Đột Phá! Đạt cấp ${userXPData.level}`, 'success');
    }
    
    localStorage.setItem('tutien_userXP', JSON.stringify(userXP));
    readStories.push({ userId: currentUser.id, storyId: storyId, readDate: new Date().toISOString(), xpGained });
    localStorage.setItem('tutien_readStories', JSON.stringify(readStories));
    updateExperienceUI(currentUser.id);
    showNotification(`Nhận được ${xpGained} điểm kinh nghiệm!`, 'success');
}

function updateExperienceUI(userId) {
    const userXP = JSON.parse(localStorage.getItem('tutien_userXP')) || [];
    const userXPData = userXP.find(xp => xp.userId === userId);
    const realms = JSON.parse(localStorage.getItem('tutien_cultivationRealms')) || [];
    
    // Nếu chưa có dữ liệu XP, hiển thị mặc định level 1
    if (!userXPData) {
         if (elements.capHienTai) elements.capHienTai.textContent = 1;
         if (elements.xpHienTai) elements.xpHienTai.textContent = 0;
         return;
    }
    
    const currentRealm = realms.find(r => r.level === userXPData.level);
    const nextRealm = realms.find(r => r.level === userXPData.level + 1);
    const xpRequired = nextRealm ? nextRealm.xpRequired : currentRealm.xpRequired * 2;
    const xpProgress = Math.min((userXPData.xp / xpRequired) * 100, 100);
    
    if (elements.capHienTai) elements.capHienTai.textContent = userXPData.level;
    if (elements.xpHienTai) elements.xpHienTai.textContent = userXPData.xp;
    if (elements.xpCanThiet) elements.xpCanThiet.textContent = xpRequired;
    if (elements.thanhXP) elements.thanhXP.style.width = `${xpProgress}%`;
    if (elements.truyenDaDoc) elements.truyenDaDoc.textContent = userXPData.storiesRead;
    if (elements.canhGioi && currentRealm) {
        elements.canhGioi.textContent = currentRealm.name;
        elements.canhGioi.className = `realm-badge ${currentRealm.color}`;
    }
    if (elements.capDo && currentRealm) elements.capDo.textContent = currentRealm.name;
}

// ===== UI FUNCTIONS =====
function updateUI() {
    // Refresh elements cache
    cacheElements();
    
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    
    if (currentUser) {
        if(elements.nutDangNhap) elements.nutDangNhap.style.display = 'none';
        if(elements.nutDangKy) elements.nutDangKy.style.display = 'none';
        if(elements.nutDangXuat) elements.nutDangXuat.style.display = 'flex';
        
        if (elements.tenNguoiDung) elements.tenNguoiDung.textContent = currentUser.username;
        if (elements.email) elements.email.textContent = currentUser.email;
        
        updateProfileStats(currentUser);
        updateExperienceUI(currentUser.id);
        loadUserStories(currentUser.username);
    } else {
        if(elements.nutDangNhap) elements.nutDangNhap.style.display = 'flex';
        if(elements.nutDangKy) elements.nutDangKy.style.display = 'flex';
        if(elements.nutDangXuat) elements.nutDangXuat.style.display = 'none';
        
        if (elements.tenNguoiDung) elements.tenNguoiDung.textContent = 'Chưa Đăng Nhập';
        if (elements.email) elements.email.textContent = 'Vui lòng đăng nhập';
    }
}

function updateProfileStats(user) {
    if (!elements.thongKe) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const userStories = stories.filter(s => s.author === user.username);
    elements.thongKe.innerHTML = `
        <div class="stat-item"><div class="stat-number">${userStories.length}</div><div class="stat-label">Truyện</div></div>
        <div class="stat-item"><div class="stat-number">${user.points || 0}</div><div class="stat-label">Điểm</div></div>
    `;
}

function loadStories() {
    if (!elements.containerTruyen) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    if (stories.length === 0) {
        elements.containerTruyen.innerHTML = '<div class="empty-state"><h3>Chưa có truyện nào</h3></div>';
        return;
    }
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    const filteredStories = activeFilter !== 'all' ? stories.filter(s => s.genre === activeFilter) : stories;
    
    elements.containerTruyen.innerHTML = filteredStories.map(story => `
        <div class="story-card"><div class="story-content">
            <h3 class="chinese-font">${story.title}</h3>
            <p>${story.synopsis}</p>
            <button class="btn btn-outline read-story" data-id="${story.id}">Đọc</button>
        </div></div>
    `).join('');
    
    document.querySelectorAll('.read-story').forEach(btn => {
        btn.addEventListener('click', function() { readStory(this.getAttribute('data-id')); });
    });
}

function filterStories(filter) { loadStories(); }

function loadUserStories(username) {
    if (!elements.danhSachTruyen) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const userStories = stories.filter(s => s.author === username);
    
    if (userStories.length === 0) {
        elements.danhSachTruyen.innerHTML = '<p style="color:var(--text-muted); text-align:center;">Chưa có truyện nào</p>';
        return;
    }
    
    elements.danhSachTruyen.innerHTML = userStories.map(story => `
        <div class="user-story-card"><h4 class="chinese-font">${story.title}</h4></div>
    `).join('');
}

function readStory(storyId) {
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const story = stories.find(s => s.id == storyId);
    if (story) {
        story.views++;
        localStorage.setItem('tutien_stories', JSON.stringify(stories));
        showStoryModal(story);
        setTimeout(() => updateExperience(storyId), 3000);
    }
}

function showStoryModal(story) {
    // Basic implementation of modal display
    const modalHTML = `
    <div class="modal story-modal" id="story-modal" style="display:flex">
        <div class="modal-content story-modal-content" style="max-width: 800px; max-height: 80vh; overflow-y: auto;">
            <span class="close-modal" onclick="this.closest('.modal').remove()" style="position: sticky; top: 10px; float: right;">&times;</span>
            <h2 class="chinese-font" style="text-align: center; color: var(--accent);">${story.title}</h2>
            <div class="story-text" style="white-space: pre-wrap; margin-top: 20px; line-height: 1.8;">${story.content}</div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const color = type === 'success' ? '#4CAF50' : (type === 'error' ? '#f44336' : '#2196F3');
    
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed; 
        top: 20px; 
        right: 20px; 
        padding: 15px 25px; 
        background: #1a1a2e; 
        border-left: 5px solid ${color}; 
        color: #fff; 
        z-index: 9999; 
        border-radius: 4px; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.5s ease;
    `;
    notification.innerText = message;
    
    // Add animation styles dynamically if not exist
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.innerHTML = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => { 
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ===== GLOBAL EXPORTS =====
window.showSection = showSection;
window.openModal = openModal;
window.closeAllModals = closeAllModals;
window.navigateToSection = navigateToSection;
window.goBack = goBack;
window.goHome = goHome;
window.updateUI = updateUI; 
window.showNotification = showNotification;