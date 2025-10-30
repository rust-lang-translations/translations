// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="intro/index.html"><strong aria-hidden="true">1.</strong> 소개</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="intro/hardware.html"><strong aria-hidden="true">1.1.</strong> 하드웨어</a></li><li class="chapter-item expanded "><a href="intro/no-std.html"><strong aria-hidden="true">1.2.</strong> no_std</a></li><li class="chapter-item expanded "><a href="intro/tooling.html"><strong aria-hidden="true">1.3.</strong> 도구</a></li><li class="chapter-item expanded "><a href="intro/install.html"><strong aria-hidden="true">1.4.</strong> 설치</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="intro/install/linux.html"><strong aria-hidden="true">1.4.1.</strong> 리눅스</a></li><li class="chapter-item expanded "><a href="intro/install/macos.html"><strong aria-hidden="true">1.4.2.</strong> 맥OS</a></li><li class="chapter-item expanded "><a href="intro/install/windows.html"><strong aria-hidden="true">1.4.3.</strong> 윈도우</a></li><li class="chapter-item expanded "><a href="intro/install/verify.html"><strong aria-hidden="true">1.4.4.</strong> 설치 확인</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="start/index.html"><strong aria-hidden="true">2.</strong> 시작하기</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="start/qemu.html"><strong aria-hidden="true">2.1.</strong> QEMU</a></li><li class="chapter-item expanded "><a href="start/hardware.html"><strong aria-hidden="true">2.2.</strong> 하드웨어</a></li><li class="chapter-item expanded "><a href="start/registers.html"><strong aria-hidden="true">2.3.</strong> 메모리 매핑 레지스터</a></li><li class="chapter-item expanded "><a href="start/semihosting.html"><strong aria-hidden="true">2.4.</strong> 세미호스팅</a></li><li class="chapter-item expanded "><a href="start/panicking.html"><strong aria-hidden="true">2.5.</strong> 패닉</a></li><li class="chapter-item expanded "><a href="start/exceptions.html"><strong aria-hidden="true">2.6.</strong> 예외</a></li><li class="chapter-item expanded "><a href="start/interrupts.html"><strong aria-hidden="true">2.7.</strong> 인터럽트</a></li><li class="chapter-item expanded "><a href="start/io.html"><strong aria-hidden="true">2.8.</strong> 입출력</a></li></ol></li><li class="chapter-item expanded "><a href="peripherals/index.html"><strong aria-hidden="true">3.</strong> 주변장치</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="peripherals/a-first-attempt.html"><strong aria-hidden="true">3.1.</strong> Rust로 첫 번째 시도</a></li><li class="chapter-item expanded "><a href="peripherals/borrowck.html"><strong aria-hidden="true">3.2.</strong> 빌림 검사기</a></li><li class="chapter-item expanded "><a href="peripherals/singletons.html"><strong aria-hidden="true">3.3.</strong> 싱글톤</a></li></ol></li><li class="chapter-item expanded "><a href="static-guarantees/index.html"><strong aria-hidden="true">4.</strong> 정적 보장</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="static-guarantees/typestate-programming.html"><strong aria-hidden="true">4.1.</strong> 타입 상태 프로그래밍</a></li><li class="chapter-item expanded "><a href="static-guarantees/state-machines.html"><strong aria-hidden="true">4.2.</strong> 상태 머신으로서의 주변장치</a></li><li class="chapter-item expanded "><a href="static-guarantees/design-contracts.html"><strong aria-hidden="true">4.3.</strong> 설계 계약</a></li><li class="chapter-item expanded "><a href="static-guarantees/zero-cost-abstractions.html"><strong aria-hidden="true">4.4.</strong> 제로 비용 추상화</a></li></ol></li><li class="chapter-item expanded "><a href="portability/index.html"><strong aria-hidden="true">5.</strong> 이식성</a></li><li class="chapter-item expanded "><a href="concurrency/index.html"><strong aria-hidden="true">6.</strong> 동시성</a></li><li class="chapter-item expanded "><a href="collections/index.html"><strong aria-hidden="true">7.</strong> 컬렉션</a></li><li class="chapter-item expanded "><a href="design-patterns/index.html"><strong aria-hidden="true">8.</strong> 디자인 패턴</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="design-patterns/hal/index.html"><strong aria-hidden="true">8.1.</strong> HAL</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="design-patterns/hal/checklist.html"><strong aria-hidden="true">8.1.1.</strong> 체크리스트</a></li><li class="chapter-item expanded "><a href="design-patterns/hal/naming.html"><strong aria-hidden="true">8.1.2.</strong> 명명</a></li><li class="chapter-item expanded "><a href="design-patterns/hal/interoperability.html"><strong aria-hidden="true">8.1.3.</strong> 상호 운용성</a></li><li class="chapter-item expanded "><a href="design-patterns/hal/predictability.html"><strong aria-hidden="true">8.1.4.</strong> 예측 가능성</a></li><li class="chapter-item expanded "><a href="design-patterns/hal/gpio.html"><strong aria-hidden="true">8.1.5.</strong> GPIO</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="c-tips/index.html"><strong aria-hidden="true">9.</strong> 임베디드 C 개발자를 위한 팁</a></li><li class="chapter-item expanded "><a href="interoperability/index.html"><strong aria-hidden="true">10.</strong> 상호 운용성</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="interoperability/c-with-rust.html"><strong aria-hidden="true">10.1.</strong> Rust와 함께하는 약간의 C</a></li><li class="chapter-item expanded "><a href="interoperability/rust-with-c.html"><strong aria-hidden="true">10.2.</strong> C와 함께하는 약간의 Rust</a></li></ol></li><li class="chapter-item expanded "><a href="unsorted/index.html"><strong aria-hidden="true">11.</strong> 미분류 주제</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="unsorted/speed-vs-size.html"><strong aria-hidden="true">11.1.</strong> 최적화: 속도와 크기의 트레이드오프</a></li><li class="chapter-item expanded "><a href="unsorted/math.html"><strong aria-hidden="true">11.2.</strong> 수학 기능 수행</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="appendix/glossary.html">부록 A: 용어집</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
