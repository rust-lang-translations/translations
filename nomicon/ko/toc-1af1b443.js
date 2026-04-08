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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="intro.html">소개</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="meet-safe-and-unsafe.html"><strong aria-hidden="true">1.</strong> 안전한 코드와 안전하지 않은 코드를 만나다</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="safe-unsafe-meaning.html"><strong aria-hidden="true">1.1.</strong> 안전한 코드와 안전하지 않은 코드는 어떻게 상호작용하는가</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="what-unsafe-does.html"><strong aria-hidden="true">1.2.</strong> 안전하지 않은 코드가 할 수 있는 것</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="working-with-unsafe.html"><strong aria-hidden="true">1.3.</strong> 안전하지 않은 코드와 함께 작업하기</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="data.html"><strong aria-hidden="true">2.</strong> 데이터 레이아웃</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="repr-rust.html"><strong aria-hidden="true">2.1.</strong> repr(Rust)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="exotic-sizes.html"><strong aria-hidden="true">2.2.</strong> 이례적인 크기의 타입</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="other-reprs.html"><strong aria-hidden="true">2.3.</strong> 다른 repr들</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ownership.html"><strong aria-hidden="true">3.</strong> 소유권</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="references.html"><strong aria-hidden="true">3.1.</strong> 참조</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="aliasing.html"><strong aria-hidden="true">3.2.</strong> 별칭</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lifetimes.html"><strong aria-hidden="true">3.3.</strong> 수명</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lifetime-mismatch.html"><strong aria-hidden="true">3.4.</strong> 수명의 한계</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lifetime-elision.html"><strong aria-hidden="true">3.5.</strong> 수명 생략</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="unbounded-lifetimes.html"><strong aria-hidden="true">3.6.</strong> 무한 수명</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hrtb.html"><strong aria-hidden="true">3.7.</strong> 고차 트레잇 바운드</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="subtyping.html"><strong aria-hidden="true">3.8.</strong> 서브타이핑과 공변성</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dropck.html"><strong aria-hidden="true">3.9.</strong> 드롭 체크</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="phantom-data.html"><strong aria-hidden="true">3.10.</strong> 팬텀 데이터</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="borrow-splitting.html"><strong aria-hidden="true">3.11.</strong> 차용 분할</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conversions.html"><strong aria-hidden="true">4.</strong> 타입 변환</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="coercions.html"><strong aria-hidden="true">4.1.</strong> 강제 변환</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dot-operator.html"><strong aria-hidden="true">4.2.</strong> 점 연산자</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="casts.html"><strong aria-hidden="true">4.3.</strong> 캐스트</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="transmutes.html"><strong aria-hidden="true">4.4.</strong> 트랜스뮤트</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uninitialized.html"><strong aria-hidden="true">5.</strong> 초기화되지 않은 메모리</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="checked-uninit.html"><strong aria-hidden="true">5.1.</strong> 확인됨</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="drop-flags.html"><strong aria-hidden="true">5.2.</strong> 드롭 플래그</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="unchecked-uninit.html"><strong aria-hidden="true">5.3.</strong> 미확인</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="obrm.html"><strong aria-hidden="true">6.</strong> 소유권 기반 자원 관리</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="constructors.html"><strong aria-hidden="true">6.1.</strong> 생성자</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="destructors.html"><strong aria-hidden="true">6.2.</strong> 소멸자</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="leaking.html"><strong aria-hidden="true">6.3.</strong> 누수</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="unwinding.html"><strong aria-hidden="true">7.</strong> 언와인딩</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="exception-safety.html"><strong aria-hidden="true">7.1.</strong> 예외 안전성</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="poisoning.html"><strong aria-hidden="true">7.2.</strong> 오염</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concurrency.html"><strong aria-hidden="true">8.</strong> 동시성</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="races.html"><strong aria-hidden="true">8.1.</strong> 경쟁</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="send-and-sync.html"><strong aria-hidden="true">8.2.</strong> Send와 Sync</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="atomics.html"><strong aria-hidden="true">8.3.</strong> 아토믹</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec.html"><strong aria-hidden="true">9.</strong> Vec 구현하기</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-layout.html"><strong aria-hidden="true">9.1.</strong> 레이아웃</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-alloc.html"><strong aria-hidden="true">9.2.</strong> 할당하기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-push-pop.html"><strong aria-hidden="true">9.3.</strong> 푸시와 팝</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-dealloc.html"><strong aria-hidden="true">9.4.</strong> 할당 해제</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-deref.html"><strong aria-hidden="true">9.5.</strong> 역참조</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-insert-remove.html"><strong aria-hidden="true">9.6.</strong> 삽입과 제거</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-into-iter.html"><strong aria-hidden="true">9.7.</strong> IntoIter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-raw.html"><strong aria-hidden="true">9.8.</strong> RawVec</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-drain.html"><strong aria-hidden="true">9.9.</strong> 드레인</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-zsts.html"><strong aria-hidden="true">9.10.</strong> 크기 0 타입 처리</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vec/vec-final.html"><strong aria-hidden="true">9.11.</strong> 최종 코드</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="arc-mutex/arc-and-mutex.html"><strong aria-hidden="true">10.</strong> Arc와 Mutex 구현하기</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="arc-mutex/arc.html"><strong aria-hidden="true">10.1.</strong> Arc</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="arc-mutex/arc-layout.html"><strong aria-hidden="true">10.1.1.</strong> 레이아웃</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="arc-mutex/arc-base.html"><strong aria-hidden="true">10.1.2.</strong> 기본 코드</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="arc-mutex/arc-clone.html"><strong aria-hidden="true">10.1.3.</strong> 클로닝</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="arc-mutex/arc-drop.html"><strong aria-hidden="true">10.1.4.</strong> 드롭하기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="arc-mutex/arc-final.html"><strong aria-hidden="true">10.1.5.</strong> 최종 코드</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ffi.html"><strong aria-hidden="true">11.</strong> FFI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="beneath-std.html"><strong aria-hidden="true">12.</strong> std 아래</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="panic-handler.html"><strong aria-hidden="true">12.1.</strong> &#92;#&#92;[panic_handler&#92;]</a></span></li></ol></li></ol>';
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

