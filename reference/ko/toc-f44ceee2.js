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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="introduction.html">소개</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="notation.html"><strong aria-hidden="true">1.</strong> 표기법</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lexical-structure.html"><strong aria-hidden="true">2.</strong> 어휘 구조</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="input-format.html"><strong aria-hidden="true">2.1.</strong> 입력 형식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="keywords.html"><strong aria-hidden="true">2.2.</strong> 키워드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="identifiers.html"><strong aria-hidden="true">2.3.</strong> 식별자</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="comments.html"><strong aria-hidden="true">2.4.</strong> 주석</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="whitespace.html"><strong aria-hidden="true">2.5.</strong> 공백</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tokens.html"><strong aria-hidden="true">2.6.</strong> 토큰</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="macros.html"><strong aria-hidden="true">3.</strong> 매크로</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="macros-by-example.html"><strong aria-hidden="true">3.1.</strong> Macros by example</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="procedural-macros.html"><strong aria-hidden="true">3.2.</strong> Procedural macros</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="crates-and-source-files.html"><strong aria-hidden="true">4.</strong> 크레이트와 소스 파일</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="conditional-compilation.html"><strong aria-hidden="true">5.</strong> 조건부 컴파일</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items.html"><strong aria-hidden="true">6.</strong> 아이템</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/modules.html"><strong aria-hidden="true">6.1.</strong> 모듈</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/extern-crates.html"><strong aria-hidden="true">6.2.</strong> 외부 크레이트</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/use-declarations.html"><strong aria-hidden="true">6.3.</strong> Use 선언</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/functions.html"><strong aria-hidden="true">6.4.</strong> 함수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/type-aliases.html"><strong aria-hidden="true">6.5.</strong> 타입 별칭</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/structs.html"><strong aria-hidden="true">6.6.</strong> 구조체</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/enumerations.html"><strong aria-hidden="true">6.7.</strong> 열거형</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/unions.html"><strong aria-hidden="true">6.8.</strong> 공용체</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/constant-items.html"><strong aria-hidden="true">6.9.</strong> 상수 아이템</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/static-items.html"><strong aria-hidden="true">6.10.</strong> 정적 아이템</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/traits.html"><strong aria-hidden="true">6.11.</strong> 트레잇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/implementations.html"><strong aria-hidden="true">6.12.</strong> 구현</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/external-blocks.html"><strong aria-hidden="true">6.13.</strong> 외부 블록</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/generics.html"><strong aria-hidden="true">6.14.</strong> 제네릭 파라미터</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/associated-items.html"><strong aria-hidden="true">6.15.</strong> Associated items</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes.html"><strong aria-hidden="true">7.</strong> 속성</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/testing.html"><strong aria-hidden="true">7.1.</strong> 테스팅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/derive.html"><strong aria-hidden="true">7.2.</strong> 파생</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/diagnostics.html"><strong aria-hidden="true">7.3.</strong> 진단</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/codegen.html"><strong aria-hidden="true">7.4.</strong> 코드 생성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/limits.html"><strong aria-hidden="true">7.5.</strong> 제한</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/type_system.html"><strong aria-hidden="true">7.6.</strong> 타입 시스템</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/debugger.html"><strong aria-hidden="true">7.7.</strong> 디버거</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="statements-and-expressions.html"><strong aria-hidden="true">8.</strong> 구문과 표현식</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="statements.html"><strong aria-hidden="true">8.1.</strong> 구문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions.html"><strong aria-hidden="true">8.2.</strong> 표현식</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/literal-expr.html"><strong aria-hidden="true">8.2.1.</strong> 리터럴 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/path-expr.html"><strong aria-hidden="true">8.2.2.</strong> 경로 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/block-expr.html"><strong aria-hidden="true">8.2.3.</strong> 블록 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/operator-expr.html"><strong aria-hidden="true">8.2.4.</strong> 연산자 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/grouped-expr.html"><strong aria-hidden="true">8.2.5.</strong> 그룹화된 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/array-expr.html"><strong aria-hidden="true">8.2.6.</strong> 배열 및 인덱스 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/tuple-expr.html"><strong aria-hidden="true">8.2.7.</strong> 튜플 및 인덱스 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/struct-expr.html"><strong aria-hidden="true">8.2.8.</strong> 구조체 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/call-expr.html"><strong aria-hidden="true">8.2.9.</strong> 호출 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/method-call-expr.html"><strong aria-hidden="true">8.2.10.</strong> 메서드 호출 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/field-expr.html"><strong aria-hidden="true">8.2.11.</strong> 필드 접근 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/closure-expr.html"><strong aria-hidden="true">8.2.12.</strong> 클로저 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/loop-expr.html"><strong aria-hidden="true">8.2.13.</strong> 루프 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/range-expr.html"><strong aria-hidden="true">8.2.14.</strong> 범위 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/if-expr.html"><strong aria-hidden="true">8.2.15.</strong> If expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/match-expr.html"><strong aria-hidden="true">8.2.16.</strong> match 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/return-expr.html"><strong aria-hidden="true">8.2.17.</strong> return 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/await-expr.html"><strong aria-hidden="true">8.2.18.</strong> await 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/underscore-expr.html"><strong aria-hidden="true">8.2.19.</strong> 밑줄 표현식</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="patterns.html"><strong aria-hidden="true">9.</strong> 패턴</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="type-system.html"><strong aria-hidden="true">10.</strong> 타입 시스템</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types.html"><strong aria-hidden="true">10.1.</strong> 타입</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/boolean.html"><strong aria-hidden="true">10.1.1.</strong> 불리언 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/numeric.html"><strong aria-hidden="true">10.1.2.</strong> 숫자 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/char.html"><strong aria-hidden="true">10.1.3.</strong> Character type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/str.html"><strong aria-hidden="true">10.1.4.</strong> String slice type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/never.html"><strong aria-hidden="true">10.1.5.</strong> 결코 리턴하지 않는 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/tuple.html"><strong aria-hidden="true">10.1.6.</strong> 튜플 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/array.html"><strong aria-hidden="true">10.1.7.</strong> 배열 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/slice.html"><strong aria-hidden="true">10.1.8.</strong> 슬라이스 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/struct.html"><strong aria-hidden="true">10.1.9.</strong> 구조체 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/enum.html"><strong aria-hidden="true">10.1.10.</strong> 열거 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/union.html"><strong aria-hidden="true">10.1.11.</strong> 공용체 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/function-item.html"><strong aria-hidden="true">10.1.12.</strong> 함수 아이템 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/closure.html"><strong aria-hidden="true">10.1.13.</strong> 클로저 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/pointer.html"><strong aria-hidden="true">10.1.14.</strong> 포인터 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/function-pointer.html"><strong aria-hidden="true">10.1.15.</strong> 함수 포인터 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/trait-object.html"><strong aria-hidden="true">10.1.16.</strong> 트레잇 객체 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/impl-trait.html"><strong aria-hidden="true">10.1.17.</strong> impl 트레잇 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/parameters.html"><strong aria-hidden="true">10.1.18.</strong> 타입 파라미터</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/inferred.html"><strong aria-hidden="true">10.1.19.</strong> 추론된 타입</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dynamically-sized-types.html"><strong aria-hidden="true">10.2.</strong> Dynamically sized types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="type-layout.html"><strong aria-hidden="true">10.3.</strong> 타입 레이아웃</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="interior-mutability.html"><strong aria-hidden="true">10.4.</strong> 내부 가변성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="subtyping.html"><strong aria-hidden="true">10.5.</strong> Subtyping and variance</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trait-bounds.html"><strong aria-hidden="true">10.6.</strong> 트레잇과 라이프타임 바운드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="type-coercions.html"><strong aria-hidden="true">10.7.</strong> 타입 강제 변환</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="divergence.html"><strong aria-hidden="true">10.8.</strong> Divergence</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="destructors.html"><strong aria-hidden="true">10.9.</strong> 소멸자</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetime-elision.html"><strong aria-hidden="true">10.10.</strong> 라이프타임 생략</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="special-types-and-traits.html"><strong aria-hidden="true">11.</strong> 특수 타입과 트레잇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names.html"><strong aria-hidden="true">12.</strong> 이름</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names/namespaces.html"><strong aria-hidden="true">12.1.</strong> 네임스페이스</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names/scopes.html"><strong aria-hidden="true">12.2.</strong> 스코프</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names/preludes.html"><strong aria-hidden="true">12.3.</strong> 프렐류드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="paths.html"><strong aria-hidden="true">12.4.</strong> 경로</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names/name-resolution.html"><strong aria-hidden="true">12.5.</strong> 이름 확인</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="visibility-and-privacy.html"><strong aria-hidden="true">12.6.</strong> 가시성과 프라이버시</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-model.html"><strong aria-hidden="true">13.</strong> 메모리 모델</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-allocation-and-lifetime.html"><strong aria-hidden="true">13.1.</strong> 메모리 할당과 라이프타임</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="variables.html"><strong aria-hidden="true">13.2.</strong> 변수</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="panic.html"><strong aria-hidden="true">14.</strong> Panic</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linkage.html"><strong aria-hidden="true">15.</strong> 연결</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="inline-assembly.html"><strong aria-hidden="true">16.</strong> 인라인 어셈블리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafety.html"><strong aria-hidden="true">17.</strong> 안전하지 않음</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-keyword.html"><strong aria-hidden="true">17.1.</strong> unsafe 키워드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="behavior-considered-undefined.html"><strong aria-hidden="true">17.2.</strong> 정의되지 않은 동작으로 간주되는 경우</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="behavior-not-considered-unsafe.html"><strong aria-hidden="true">17.3.</strong> 안전하지 않은 것으로 간주되지 않는 동작</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="const_eval.html"><strong aria-hidden="true">18.</strong> 상수 평가 (Constant evaluation)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="abi.html"><strong aria-hidden="true">19.</strong> Application binary interface</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="runtime.html"><strong aria-hidden="true">20.</strong> 러스트 런타임</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendices.html"><strong aria-hidden="true">21.</strong> 부록</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="grammar.html"><strong aria-hidden="true">21.1.</strong> Grammar summary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="syntax-index.html"><strong aria-hidden="true">21.2.</strong> Syntax index</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="macro-ambiguity.html"><strong aria-hidden="true">21.3.</strong> Macro follow-set ambiguity formal specification</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="influences.html"><strong aria-hidden="true">21.4.</strong> 영향</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="test-summary.html"><strong aria-hidden="true">21.5.</strong> 테스트 요약</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">21.6.</strong> 용어집</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

