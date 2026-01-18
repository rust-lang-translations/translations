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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">소개</a></li><li class="chapter-item expanded "><a href="editions/index.html"><strong aria-hidden="true">1.</strong> 에디션이란 무엇인가요?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="editions/creating-a-new-project.html"><strong aria-hidden="true">1.1.</strong> 새 프로젝트 생성하기</a></li><li class="chapter-item expanded "><a href="editions/transitioning-an-existing-project-to-a-new-edition.html"><strong aria-hidden="true">1.2.</strong> 기존 프로젝트를 새 에디션으로 전환하기</a></li><li class="chapter-item expanded "><a href="editions/advanced-migrations.html"><strong aria-hidden="true">1.3.</strong> 고급 마이그레이션</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2015/index.html"><strong aria-hidden="true">2.</strong> Rust 2015</a></li><li class="chapter-item expanded "><a href="rust-2018/index.html"><strong aria-hidden="true">3.</strong> Rust 2018</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2018/path-changes.html"><strong aria-hidden="true">3.1.</strong> 경로 및 모듈 시스템 변경사항</a></li><li class="chapter-item expanded "><a href="rust-2018/trait-fn-parameters.html"><strong aria-hidden="true">3.2.</strong> 익명 트레이트 함수 매개변수 사용 중단</a></li><li class="chapter-item expanded "><a href="rust-2018/new-keywords.html"><strong aria-hidden="true">3.3.</strong> 새로운 키워드</a></li><li class="chapter-item expanded "><a href="rust-2018/tyvar-behind-raw-pointer.html"><strong aria-hidden="true">3.4.</strong> 추론 변수에 대한 원시 포인터의 메서드 디스패치</a></li><li class="chapter-item expanded "><a href="rust-2018/cargo.html"><strong aria-hidden="true">3.5.</strong> Cargo 변경사항</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2021/index.html"><strong aria-hidden="true">4.</strong> Rust 2021</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2021/prelude.html"><strong aria-hidden="true">4.1.</strong> 프렐루드에 추가된 항목</a></li><li class="chapter-item expanded "><a href="rust-2021/default-cargo-resolver.html"><strong aria-hidden="true">4.2.</strong> 기본 Cargo 기능 해결자</a></li><li class="chapter-item expanded "><a href="rust-2021/IntoIterator-for-arrays.html"><strong aria-hidden="true">4.3.</strong> 배열을 위한 IntoIterator</a></li><li class="chapter-item expanded "><a href="rust-2021/disjoint-capture-in-closures.html"><strong aria-hidden="true">4.4.</strong> 클로저에서의 분리된 캡처</a></li><li class="chapter-item expanded "><a href="rust-2021/panic-macro-consistency.html"><strong aria-hidden="true">4.5.</strong> Panic 매크로 일관성</a></li><li class="chapter-item expanded "><a href="rust-2021/reserved-syntax.html"><strong aria-hidden="true">4.6.</strong> 예약된 구문</a></li><li class="chapter-item expanded "><a href="rust-2021/raw-lifetimes.html"><strong aria-hidden="true">4.7.</strong> 원시 라이프타임</a></li><li class="chapter-item expanded "><a href="rust-2021/warnings-promoted-to-error.html"><strong aria-hidden="true">4.8.</strong> 오류로 승격된 경고</a></li><li class="chapter-item expanded "><a href="rust-2021/or-patterns-macro-rules.html"><strong aria-hidden="true">4.9.</strong> 매크로 규칙에서의 OR 패턴</a></li><li class="chapter-item expanded "><a href="rust-2021/c-string-literals.html"><strong aria-hidden="true">4.10.</strong> C 문자열 리터럴</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/index.html"><strong aria-hidden="true">5.</strong> Rust 2024</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/language.html"><strong aria-hidden="true">5.1.</strong> 언어</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/rpit-lifetime-capture.html"><strong aria-hidden="true">5.1.1.</strong> RPIT 라이프타임 캡처 규칙</a></li><li class="chapter-item expanded "><a href="rust-2024/temporary-if-let-scope.html"><strong aria-hidden="true">5.1.2.</strong> if let 임시 스코프</a></li><li class="chapter-item expanded "><a href="rust-2024/let-chains.html"><strong aria-hidden="true">5.1.3.</strong> let chains in if and while</a></li><li class="chapter-item expanded "><a href="rust-2024/temporary-tail-expr-scope.html"><strong aria-hidden="true">5.1.4.</strong> 꼬리 표현식 임시 스코프</a></li><li class="chapter-item expanded "><a href="rust-2024/match-ergonomics.html"><strong aria-hidden="true">5.1.5.</strong> 매치 인체공학 예약</a></li><li class="chapter-item expanded "><a href="rust-2024/unsafe-extern.html"><strong aria-hidden="true">5.1.6.</strong> 안전하지 않은 extern 블록</a></li><li class="chapter-item expanded "><a href="rust-2024/unsafe-attributes.html"><strong aria-hidden="true">5.1.7.</strong> 안전하지 않은 속성</a></li><li class="chapter-item expanded "><a href="rust-2024/unsafe-op-in-unsafe-fn.html"><strong aria-hidden="true">5.1.8.</strong> unsafe_op_in_unsafe_fn 경고</a></li><li class="chapter-item expanded "><a href="rust-2024/static-mut-references.html"><strong aria-hidden="true">5.1.9.</strong> static mut에 대한 참조 금지</a></li><li class="chapter-item expanded "><a href="rust-2024/never-type-fallback.html"><strong aria-hidden="true">5.1.10.</strong> Never 타입 폴백 변경</a></li><li class="chapter-item expanded "><a href="rust-2024/macro-fragment-specifiers.html"><strong aria-hidden="true">5.1.11.</strong> 매크로 프래그먼트 지정자</a></li><li class="chapter-item expanded "><a href="rust-2024/missing-macro-fragment-specifiers.html"><strong aria-hidden="true">5.1.12.</strong> 누락된 매크로 프래그먼트 지정자</a></li><li class="chapter-item expanded "><a href="rust-2024/gen-keyword.html"><strong aria-hidden="true">5.1.13.</strong> gen 키워드</a></li><li class="chapter-item expanded "><a href="rust-2024/reserved-syntax.html"><strong aria-hidden="true">5.1.14.</strong> 예약된 구문</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/standard-library.html"><strong aria-hidden="true">5.2.</strong> 표준 라이브러리</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/prelude.html"><strong aria-hidden="true">5.2.1.</strong> 프렐루드 변경사항</a></li><li class="chapter-item expanded "><a href="rust-2024/intoiterator-box-slice.html"><strong aria-hidden="true">5.2.2.</strong> Add IntoIterator for Box&#92;&lt;&#92;[T&#92;]&#92;&gt;</a></li><li class="chapter-item expanded "><a href="rust-2024/newly-unsafe-functions.html"><strong aria-hidden="true">5.2.3.</strong> 새로 안전하지 않은 함수</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/cargo.html"><strong aria-hidden="true">5.3.</strong> Cargo</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/cargo-resolver.html"><strong aria-hidden="true">5.3.1.</strong> Cargo: Rust 버전 인식 해결자</a></li><li class="chapter-item expanded "><a href="rust-2024/cargo-table-key-names.html"><strong aria-hidden="true">5.3.2.</strong> Cargo: 테이블 및 키 이름 일관성</a></li><li class="chapter-item expanded "><a href="rust-2024/cargo-inherited-default-features.html"><strong aria-hidden="true">5.3.3.</strong> Cargo: 사용되지 않는 상속된 기본 기능 거부</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/rustdoc.html"><strong aria-hidden="true">5.4.</strong> Rustdoc</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/rustdoc-doctests.html"><strong aria-hidden="true">5.4.1.</strong> Rustdoc 통합 테스트</a></li><li class="chapter-item expanded "><a href="rust-2024/rustdoc-nested-includes.html"><strong aria-hidden="true">5.4.2.</strong> Rustdoc 중첩 include! 변경</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/rustfmt.html"><strong aria-hidden="true">5.5.</strong> Rustfmt</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/rustfmt-style-edition.html"><strong aria-hidden="true">5.5.1.</strong> Rustfmt: 스타일 에디션</a></li><li class="chapter-item expanded "><a href="rust-2024/rustfmt-formatting-fixes.html"><strong aria-hidden="true">5.5.2.</strong> Rustfmt: 포매팅 수정</a></li><li class="chapter-item expanded "><a href="rust-2024/rustfmt-raw-identifier-sorting.html"><strong aria-hidden="true">5.5.3.</strong> Rustfmt: 원시 식별자 정렬</a></li><li class="chapter-item expanded "><a href="rust-2024/rustfmt-version-sorting.html"><strong aria-hidden="true">5.5.4.</strong> Rustfmt: 버전 정렬</a></li></ol></li></ol></li></ol>';
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
