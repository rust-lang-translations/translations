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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">소개</a></li><li class="chapter-item expanded "><a href="meet-safe-and-unsafe.html"><strong aria-hidden="true">1.</strong> 안전한 코드와 안전하지 않은 코드를 만나다</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="safe-unsafe-meaning.html"><strong aria-hidden="true">1.1.</strong> 안전한 코드와 안전하지 않은 코드는 어떻게 상호작용하는가</a></li><li class="chapter-item expanded "><a href="what-unsafe-does.html"><strong aria-hidden="true">1.2.</strong> 안전하지 않은 코드가 할 수 있는 것</a></li><li class="chapter-item expanded "><a href="working-with-unsafe.html"><strong aria-hidden="true">1.3.</strong> 안전하지 않은 코드와 함께 작업하기</a></li></ol></li><li class="chapter-item expanded "><a href="data.html"><strong aria-hidden="true">2.</strong> 데이터 레이아웃</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="repr-rust.html"><strong aria-hidden="true">2.1.</strong> repr(Rust)</a></li><li class="chapter-item expanded "><a href="exotic-sizes.html"><strong aria-hidden="true">2.2.</strong> 이례적인 크기의 타입</a></li><li class="chapter-item expanded "><a href="other-reprs.html"><strong aria-hidden="true">2.3.</strong> 다른 repr들</a></li></ol></li><li class="chapter-item expanded "><a href="ownership.html"><strong aria-hidden="true">3.</strong> 소유권</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="references.html"><strong aria-hidden="true">3.1.</strong> 참조</a></li><li class="chapter-item expanded "><a href="aliasing.html"><strong aria-hidden="true">3.2.</strong> 별칭</a></li><li class="chapter-item expanded "><a href="lifetimes.html"><strong aria-hidden="true">3.3.</strong> 수명</a></li><li class="chapter-item expanded "><a href="lifetime-mismatch.html"><strong aria-hidden="true">3.4.</strong> 수명의 한계</a></li><li class="chapter-item expanded "><a href="lifetime-elision.html"><strong aria-hidden="true">3.5.</strong> 수명 생략</a></li><li class="chapter-item expanded "><a href="unbounded-lifetimes.html"><strong aria-hidden="true">3.6.</strong> 무한 수명</a></li><li class="chapter-item expanded "><a href="hrtb.html"><strong aria-hidden="true">3.7.</strong> 고차 트레잇 바운드</a></li><li class="chapter-item expanded "><a href="subtyping.html"><strong aria-hidden="true">3.8.</strong> 서브타이핑과 공변성</a></li><li class="chapter-item expanded "><a href="dropck.html"><strong aria-hidden="true">3.9.</strong> 드롭 체크</a></li><li class="chapter-item expanded "><a href="phantom-data.html"><strong aria-hidden="true">3.10.</strong> 팬텀 데이터</a></li><li class="chapter-item expanded "><a href="borrow-splitting.html"><strong aria-hidden="true">3.11.</strong> 차용 분할</a></li></ol></li><li class="chapter-item expanded "><a href="conversions.html"><strong aria-hidden="true">4.</strong> 타입 변환</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="coercions.html"><strong aria-hidden="true">4.1.</strong> 강제 변환</a></li><li class="chapter-item expanded "><a href="dot-operator.html"><strong aria-hidden="true">4.2.</strong> 점 연산자</a></li><li class="chapter-item expanded "><a href="casts.html"><strong aria-hidden="true">4.3.</strong> 캐스트</a></li><li class="chapter-item expanded "><a href="transmutes.html"><strong aria-hidden="true">4.4.</strong> 트랜스뮤트</a></li></ol></li><li class="chapter-item expanded "><a href="uninitialized.html"><strong aria-hidden="true">5.</strong> 초기화되지 않은 메모리</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="checked-uninit.html"><strong aria-hidden="true">5.1.</strong> 확인됨</a></li><li class="chapter-item expanded "><a href="drop-flags.html"><strong aria-hidden="true">5.2.</strong> 드롭 플래그</a></li><li class="chapter-item expanded "><a href="unchecked-uninit.html"><strong aria-hidden="true">5.3.</strong> 미확인</a></li></ol></li><li class="chapter-item expanded "><a href="obrm.html"><strong aria-hidden="true">6.</strong> 소유권 기반 자원 관리</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="constructors.html"><strong aria-hidden="true">6.1.</strong> 생성자</a></li><li class="chapter-item expanded "><a href="destructors.html"><strong aria-hidden="true">6.2.</strong> 소멸자</a></li><li class="chapter-item expanded "><a href="leaking.html"><strong aria-hidden="true">6.3.</strong> 누수</a></li></ol></li><li class="chapter-item expanded "><a href="unwinding.html"><strong aria-hidden="true">7.</strong> 언와인딩</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="exception-safety.html"><strong aria-hidden="true">7.1.</strong> 예외 안전성</a></li><li class="chapter-item expanded "><a href="poisoning.html"><strong aria-hidden="true">7.2.</strong> 오염</a></li></ol></li><li class="chapter-item expanded "><a href="concurrency.html"><strong aria-hidden="true">8.</strong> 동시성</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="races.html"><strong aria-hidden="true">8.1.</strong> 경쟁</a></li><li class="chapter-item expanded "><a href="send-and-sync.html"><strong aria-hidden="true">8.2.</strong> Send와 Sync</a></li><li class="chapter-item expanded "><a href="atomics.html"><strong aria-hidden="true">8.3.</strong> 아토믹</a></li></ol></li><li class="chapter-item expanded "><a href="vec/vec.html"><strong aria-hidden="true">9.</strong> Vec 구현하기</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="vec/vec-layout.html"><strong aria-hidden="true">9.1.</strong> 레이아웃</a></li><li class="chapter-item expanded "><a href="vec/vec-alloc.html"><strong aria-hidden="true">9.2.</strong> 할당하기</a></li><li class="chapter-item expanded "><a href="vec/vec-push-pop.html"><strong aria-hidden="true">9.3.</strong> 푸시와 팝</a></li><li class="chapter-item expanded "><a href="vec/vec-dealloc.html"><strong aria-hidden="true">9.4.</strong> 할당 해제</a></li><li class="chapter-item expanded "><a href="vec/vec-deref.html"><strong aria-hidden="true">9.5.</strong> 역참조</a></li><li class="chapter-item expanded "><a href="vec/vec-insert-remove.html"><strong aria-hidden="true">9.6.</strong> 삽입과 제거</a></li><li class="chapter-item expanded "><a href="vec/vec-into-iter.html"><strong aria-hidden="true">9.7.</strong> IntoIter</a></li><li class="chapter-item expanded "><a href="vec/vec-raw.html"><strong aria-hidden="true">9.8.</strong> RawVec</a></li><li class="chapter-item expanded "><a href="vec/vec-drain.html"><strong aria-hidden="true">9.9.</strong> 드레인</a></li><li class="chapter-item expanded "><a href="vec/vec-zsts.html"><strong aria-hidden="true">9.10.</strong> 크기 0 타입 처리</a></li><li class="chapter-item expanded "><a href="vec/vec-final.html"><strong aria-hidden="true">9.11.</strong> 최종 코드</a></li></ol></li><li class="chapter-item expanded "><a href="arc-mutex/arc-and-mutex.html"><strong aria-hidden="true">10.</strong> Arc와 Mutex 구현하기</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="arc-mutex/arc.html"><strong aria-hidden="true">10.1.</strong> Arc</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="arc-mutex/arc-layout.html"><strong aria-hidden="true">10.1.1.</strong> 레이아웃</a></li><li class="chapter-item expanded "><a href="arc-mutex/arc-base.html"><strong aria-hidden="true">10.1.2.</strong> 기본 코드</a></li><li class="chapter-item expanded "><a href="arc-mutex/arc-clone.html"><strong aria-hidden="true">10.1.3.</strong> 클로닝</a></li><li class="chapter-item expanded "><a href="arc-mutex/arc-drop.html"><strong aria-hidden="true">10.1.4.</strong> 드롭하기</a></li><li class="chapter-item expanded "><a href="arc-mutex/arc-final.html"><strong aria-hidden="true">10.1.5.</strong> 최종 코드</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="ffi.html"><strong aria-hidden="true">11.</strong> FFI</a></li><li class="chapter-item expanded "><a href="beneath-std.html"><strong aria-hidden="true">12.</strong> std 아래</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="panic-handler.html"><strong aria-hidden="true">12.1.</strong> &#92;#&#92;[panic_handler&#92;]</a></li></ol></li></ol>';
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
