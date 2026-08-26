/**
 * Ronfit Forte theme interactivity — vanilla JS ports of:
 *  - SiteHeader.tsx (mobile menu, products mega-menu hover/focus, language selector)
 *  - HeroCarousel.tsx (embla-carousel + embla-carousel-autoplay init)
 *  - EnquiryForm.tsx (mailto: composition on submit)
 *  - products/index.tsx (client-side category filter)
 *  - search.tsx (client-side product/insight filter)
 *
 * Depends on window.EmblaCarousel / window.EmblaCarouselAutoplay (enqueued
 * before this file — see inc/enqueue.php) and the `ronfitForte` data object
 * localized via wp_localize_script.
 */
(function () {
	'use strict';

	function ready(fn) {
		if (document.readyState !== 'loading') {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	/* ---------------- Mobile menu ---------------- */
	function initMobileMenu() {
		var toggle = document.querySelector('.ronfit-mobile-menu-toggle');
		var menu = document.querySelector('.ronfit-mobile-menu');
		if (!toggle || !menu) return;

		var iconOpen = toggle.querySelector('.ronfit-menu-icon-open');
		var iconClose = toggle.querySelector('.ronfit-menu-icon-close');

		toggle.addEventListener('click', function () {
			var isOpen = !menu.hasAttribute('hidden');
			if (isOpen) {
				menu.setAttribute('hidden', '');
				toggle.setAttribute('aria-expanded', 'false');
				toggle.setAttribute('aria-label', 'Open menu');
				if (iconOpen) iconOpen.removeAttribute('hidden');
				if (iconClose) iconClose.setAttribute('hidden', '');
			} else {
				menu.removeAttribute('hidden');
				toggle.setAttribute('aria-expanded', 'true');
				toggle.setAttribute('aria-label', 'Close menu');
				if (iconOpen) iconOpen.setAttribute('hidden', '');
				if (iconClose) iconClose.removeAttribute('hidden');
			}
		});
	}

	/* ---------------- Products mega-menu (hover + focus) ---------------- */
	function initMegaMenu() {
		var wrap = document.querySelector('.ronfit-products-nav');
		if (!wrap) return;
		var panel = wrap.querySelector('.ronfit-mega-menu');
		var link = wrap.querySelector('a');
		if (!panel || !link) return;

		var open = function () {
			panel.removeAttribute('hidden');
			link.setAttribute('aria-expanded', 'true');
		};
		var close = function () {
			panel.setAttribute('hidden', '');
			link.setAttribute('aria-expanded', 'false');
		};

		wrap.addEventListener('mouseenter', open);
		wrap.addEventListener('mouseleave', close);
		link.addEventListener('focus', open);
		wrap.addEventListener('focusout', function (e) {
			if (!wrap.contains(e.relatedTarget)) close();
		});
		panel.querySelectorAll('a').forEach(function (a) {
			a.addEventListener('click', close);
		});
	}

	/* ---------------- Language selector (decorative, matches source) ---------------- */
	function initLangSwitcher() {
		var wrap = document.querySelector('.ronfit-lang-switcher');
		if (!wrap) return;
		var toggleBtn = wrap.querySelector('.ronfit-lang-toggle');
		var menu = wrap.querySelector('.ronfit-lang-menu');
		var currentLabel = wrap.querySelector('.ronfit-lang-current');
		if (!toggleBtn || !menu) return;

		var labels = { en: 'English', ar: 'العربية', fr: 'Français', es: 'Español' };

		var open = function () {
			menu.removeAttribute('hidden');
			toggleBtn.setAttribute('aria-expanded', 'true');
		};
		var close = function () {
			menu.setAttribute('hidden', '');
			toggleBtn.setAttribute('aria-expanded', 'false');
		};

		wrap.addEventListener('mouseenter', open);
		wrap.addEventListener('mouseleave', close);
		toggleBtn.addEventListener('click', function () {
			if (menu.hasAttribute('hidden')) open(); else close();
		});

		menu.querySelectorAll('button[data-lang]').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var code = btn.getAttribute('data-lang');
				menu.querySelectorAll('button[data-lang]').forEach(function (b) {
					var active = b === btn;
					b.setAttribute('aria-current', active ? 'true' : 'false');
					b.classList.toggle('font-semibold', active);
					b.classList.toggle('text-primary', active);
					b.classList.toggle('font-medium', !active);
					b.classList.toggle('text-foreground', !active);
				});
				if (currentLabel) currentLabel.textContent = labels[code] || labels.en;
				close();
				if (code !== 'en') {
					ronfitToast(
						labels[code] + ' content is coming soon',
						'The site is currently published in English — we’re working on full translations.'
					);
				}
			});
		});
	}

	/**
	 * Minimal toast, matching the Sonner toast used by the source site
	 * closely enough for the same purpose (decorative, non-blocking notice).
	 */
	function ronfitToast(title, description) {
		var el = document.createElement('div');
		el.setAttribute('role', 'status');
		el.style.cssText =
			'position:fixed;left:50%;bottom:1.5rem;transform:translateX(-50%);z-index:80;' +
			'max-width:22rem;background:var(--popover,#fff);color:var(--popover-foreground,#111);' +
			'border:1px solid var(--border,#e5e5e5);border-radius:1rem;padding:0.9rem 1.1rem;' +
			'box-shadow:0 10px 30px rgba(0,0,0,0.15);font-family:inherit;';
		var strong = document.createElement('p');
		strong.style.cssText = 'margin:0;font-weight:600;font-size:0.875rem;';
		strong.textContent = title;
		var desc = document.createElement('p');
		desc.style.cssText = 'margin:0.25rem 0 0;font-size:0.8rem;opacity:0.75;';
		desc.textContent = description;
		el.appendChild(strong);
		el.appendChild(desc);
		document.body.appendChild(el);
		window.setTimeout(function () {
			el.style.transition = 'opacity 200ms ease';
			el.style.opacity = '0';
			window.setTimeout(function () { el.remove(); }, 220);
		}, 3200);
	}

	/* ---------------- Hero carousel (embla-carousel + autoplay) ---------------- */
	function initHeroCarousel() {
		var root = document.querySelector('.ronfit-hero-carousel');
		if (!root || !window.EmblaCarousel) return;

		var viewport = root.querySelector('.overflow-hidden');
		if (!viewport) return;

		var Autoplay = window.EmblaCarouselAutoplay;
		var plugins = Autoplay
			? [Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })]
			: [];

		var embla = window.EmblaCarousel(viewport, { loop: true }, plugins);

		var slides = root.querySelectorAll('[role="group"][aria-roledescription="slide"]');
		var dots = root.querySelectorAll('.ronfit-hero-dots > button');
		var prevButtons = root.querySelectorAll('.ronfit-hero-prev');
		var nextButtons = root.querySelectorAll('.ronfit-hero-next');

		function setSelected(index) {
			slides.forEach(function (slide, i) {
				var inner = slide.firstElementChild;
				if (!inner) return;
				if (i === index) {
					inner.removeAttribute('aria-hidden');
				} else {
					inner.setAttribute('aria-hidden', 'true');
				}
			});
			dots.forEach(function (dot, i) {
				var active = i === index;
				dot.setAttribute('aria-current', active ? 'true' : 'false');
				dot.classList.toggle('w-7', active);
				dot.classList.toggle('bg-primary', active);
				dot.classList.toggle('w-2', !active);
				dot.classList.toggle('bg-border', !active);
			});
		}

		embla.on('select', function () { setSelected(embla.selectedScrollSnap()); });
		embla.on('reInit', function () { setSelected(embla.selectedScrollSnap()); });
		setSelected(embla.selectedScrollSnap());

		dots.forEach(function (dot, i) {
			dot.addEventListener('click', function () { embla.scrollTo(i); });
		});
		prevButtons.forEach(function (btn) {
			btn.addEventListener('click', function () { embla.scrollPrev(); });
		});
		nextButtons.forEach(function (btn) {
			btn.addEventListener('click', function () { embla.scrollNext(); });
		});
	}

	/* ---------------- Enquiry form -> mailto (no backend, matches source) ---------------- */
	function initEnquiryForms() {
		document.querySelectorAll('.ronfit-enquiry-form').forEach(function (form) {
			form.addEventListener('submit', function (e) {
				e.preventDefault();
				var data = new FormData(form);
				var get = function (name) { return (data.get(name) || '').toString().trim(); };

				var lines = ['Business enquiry — Ronfit Forte'];
				var name = get('name');
				var company = get('company');
				var email = get('email');
				var phone = get('phone');
				var country = get('country');
				var businessType = get('businessType');
				var category = get('category');
				var message = get('message');

				if (name) lines.push('Name: ' + name);
				if (company) lines.push('Company: ' + company);
				if (email) lines.push('Email: ' + email);
				if (phone) lines.push('Phone: ' + phone);
				if (country) lines.push('Country / market: ' + country);
				if (businessType) lines.push('Business type: ' + businessType);
				if (category) lines.push('Category of interest: ' + category);
				if (message) lines.push('Message: ' + message);

				var subject = 'Business enquiry' + (country ? ' — ' + country : '');
				var mailto =
					'mailto:' + (window.ronfitForte ? window.ronfitForte.email : '') +
					'?subject=' + encodeURIComponent(subject) +
					'&body=' + encodeURIComponent(lines.join('\n'));

				window.location.href = mailto;
			});
		});
	}

	/* ---------------- /products category filter ---------------- */
	function initProductsFilter() {
		var wrap = document.querySelector('.ronfit-products-filter');
		if (!wrap) return;
		var buttons = wrap.querySelectorAll('[data-category-filter]');
		var cards = document.querySelectorAll('[data-product-category]');
		var countEl = document.querySelector('.ronfit-products-count');

		function apply(active) {
			var visible = 0;
			cards.forEach(function (card) {
				var match = active === 'all' || card.getAttribute('data-product-category') === active;
				card.style.display = match ? '' : 'none';
				if (match) visible++;
			});
			if (countEl) {
				countEl.textContent = 'Showing ' + visible + ' product' + (visible === 1 ? '' : 's');
			}
			buttons.forEach(function (btn) {
				var isActive = btn.getAttribute('data-category-filter') === active;
				btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
			});
		}

		buttons.forEach(function (btn) {
			btn.addEventListener('click', function () {
				apply(btn.getAttribute('data-category-filter'));
			});
		});
	}

	/* ---------------- /search client-side filter ---------------- */
	function initSearch() {
		var input = document.querySelector('.ronfit-search-input');
		if (!input || !window.ronfitForte) return;

		var resultsWrap = document.querySelector('.ronfit-search-results');
		var summaryEl = document.querySelector('.ronfit-search-summary');
		if (!resultsWrap) return;

		var products = window.ronfitForte.productsIndex || [];
		var insights = window.ronfitForte.insightsIndex || [];

		function productCardHtml(p) {
			return (
				'<a href="' + p.url + '" class="group flex flex-col rounded-[2.5rem] bg-card p-4 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">' +
				'<div class="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-secondary/60 p-2">' +
				'<span aria-hidden="true" class="absolute -right-10 -top-10 size-28 rounded-full bg-primary/10 blur-2xl"></span>' +
				'<img src="' + p.image + '" alt="' + p.image_alt + '" width="800" height="800" loading="lazy" class="relative h-64 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.07] sm:h-72 lg:h-80">' +
				'</div>' +
				'<h3 class="mt-5 text-lg font-semibold leading-snug text-foreground">' + p.name + '</h3>' +
				'<p class="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">' + p.format + '</p>' +
				'<span class="mt-auto pt-4 text-sm font-semibold text-primary">View product &rarr;</span>' +
				'</a>'
			);
		}

		function insightCardHtml(i) {
			return (
				'<a href="' + i.url + '" class="rounded-[1.75rem] border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">' +
				'<span class="text-xs font-semibold tracking-[0.18em] text-primary">' + i.topic + '</span>' +
				'<h3 class="mt-3 text-base font-semibold leading-snug text-foreground">' + i.title + '</h3>' +
				'<p class="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">' + i.excerpt + '</p>' +
				'</a>'
			);
		}

		var emptyHint = document.querySelector('.ronfit-search-empty-hint');

		function run() {
			var raw = input.value.trim();
			var q = raw.toLowerCase();
			resultsWrap.innerHTML = '';

			if (!q) {
				if (summaryEl) summaryEl.textContent = '';
				if (emptyHint) emptyHint.style.display = '';
				return;
			}
			if (emptyHint) emptyHint.style.display = 'none';

			var matchedProducts = products.filter(function (p) {
				return [p.name, p.format, p.category, p.summary].join(' ').toLowerCase().indexOf(q) !== -1;
			}).map(function (p) {
				return {
					url: '/products/' + p.slug + '/',
					name: p.name,
					format: p.format,
					image: p.image,
					image_alt: p.image_alt,
				};
			});

			var matchedInsights = insights.filter(function (i) {
				return [i.title, i.topic, i.excerpt].join(' ').toLowerCase().indexOf(q) !== -1;
			});

			var total = matchedProducts.length + matchedInsights.length;
			if (summaryEl) {
				summaryEl.textContent = total + ' result' + (total === 1 ? '' : 's') + ' for “' + raw + '”';
			}

			if (matchedProducts.length) {
				var pOuter = document.createElement('div');
				pOuter.className = 'mt-10';
				pOuter.innerHTML = '<h2 class="text-xl font-semibold text-foreground">Products</h2>';
				var pWrap = document.createElement('div');
				pWrap.className = 'mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4';
				pWrap.innerHTML = matchedProducts.map(productCardHtml).join('');
				pOuter.appendChild(pWrap);
				resultsWrap.appendChild(pOuter);
			}
			if (matchedInsights.length) {
				var iOuter = document.createElement('div');
				iOuter.className = 'mt-12';
				iOuter.innerHTML = '<h2 class="text-xl font-semibold text-foreground">Insights</h2>';
				var iWrap = document.createElement('div');
				iWrap.className = 'mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3';
				iWrap.innerHTML = matchedInsights.map(insightCardHtml).join('');
				iOuter.appendChild(iWrap);
				resultsWrap.appendChild(iOuter);
			}
			if (!total) {
				resultsWrap.innerHTML = '<p class="mt-10 text-base text-muted-foreground">No matches. Try a broader term, or browse the full portfolio.</p>';
			}
		}

		input.addEventListener('input', run);
		if (emptyHint) emptyHint.style.display = input.value ? 'none' : '';
		if (input.value) run();
	}

	ready(function () {
		initMobileMenu();
		initMegaMenu();
		initLangSwitcher();
		initHeroCarousel();
		initEnquiryForms();
		initProductsFilter();
		initSearch();
	});
})();
