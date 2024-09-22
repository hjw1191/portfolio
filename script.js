document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 애니메이션
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
    // nav
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
    
        function highlightNavLink() {
            let scrollPosition = window.scrollY;
    
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100; // 네비게이션 높이를 고려하여 조정
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');
    
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-section') === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
    
        window.addEventListener('scroll', highlightNavLink);
        highlightNavLink(); // 페이지 로드 시 초기 실행
    });
    // 스킬 바 애니메이션
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = entry.target.getAttribute('data-percent');
                entry.target.style.width = percent;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});

// 프로젝트
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLinks = document.getElementById('modal-links');
    const closeBtn = document.querySelector('.close');

    projectCards.forEach(card => {
        const video = card.querySelector('video');
        const detailsBtn = card.querySelector('.details-btn');

        card.addEventListener('mouseenter', () => {
            video.play();
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });

        detailsBtn.addEventListener('click', () => {
            modalTitle.textContent = card.querySelector('h3').textContent;
            modalDescription.textContent = "프로젝트의 상세 설명을 여기에 넣으세요.";
            modalLinks.innerHTML = `
                <a href="#" class="btn" target="_blank">GitHub</a>
                <a href="#" class="btn" target="_blank">구현기능 상세보기</a>
            `;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});