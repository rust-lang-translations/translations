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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">시작하기</a></li><li class="chapter-item expanded "><a href="tutorial/index.html"><strong aria-hidden="true">1.</strong> 15분 만에 명령줄 앱 만들기</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tutorial/setup.html"><strong aria-hidden="true">1.1.</strong> 프로젝트 설정</a></li><li class="chapter-item expanded "><a href="tutorial/cli-args.html"><strong aria-hidden="true">1.2.</strong> 명령줄 인수 구문 분석</a></li><li class="chapter-item expanded "><a href="tutorial/impl-draft.html"><strong aria-hidden="true">1.3.</strong> 첫 번째 구현</a></li><li class="chapter-item expanded "><a href="tutorial/errors.html"><strong aria-hidden="true">1.4.</strong> 더 나은 오류 보고</a></li><li class="chapter-item expanded "><a href="tutorial/output.html"><strong aria-hidden="true">1.5.</strong> 사람과 기계를 위한 출력</a></li><li class="chapter-item expanded "><a href="tutorial/testing.html"><strong aria-hidden="true">1.6.</strong> 테스트</a></li><li class="chapter-item expanded "><a href="tutorial/packaging.html"><strong aria-hidden="true">1.7.</strong> Rust 도구 패키징 및 배포</a></li></ol></li><li class="chapter-item expanded "><a href="in-depth/index.html"><strong aria-hidden="true">2.</strong> 심층 주제</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="in-depth/signals.html"><strong aria-hidden="true">2.1.</strong> 신호 처리</a></li><li class="chapter-item expanded "><a href="in-depth/config-files.html"><strong aria-hidden="true">2.2.</strong> 구성 파일 사용</a></li><li class="chapter-item expanded "><a href="in-depth/exit-code.html"><strong aria-hidden="true">2.3.</strong> 종료 코드</a></li><li class="chapter-item expanded "><a href="in-depth/human-communication.html"><strong aria-hidden="true">2.4.</strong> 사람과 소통하기</a></li><li class="chapter-item expanded "><a href="in-depth/machine-communication.html"><strong aria-hidden="true">2.5.</strong> 기계와 소통하기</a></li><li class="chapter-item expanded "><a href="in-depth/docs.html"><strong aria-hidden="true">2.6.</strong> CLI 앱용 문서 렌더링</a></li></ol></li><li class="chapter-item expanded "><a href="resources/index.html"><strong aria-hidden="true">3.</strong> 리소스</a></li></ol>';
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
