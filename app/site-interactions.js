"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SiteInteractions() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const listeners = new AbortController();
    const cleanup = [];
    const listen = (target, type, handler) => {
      target.addEventListener(type, handler, { signal: listeners.signal });
    };

    const context = gsap.context((context) => {
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

      /* ---------- hero kinetic typography ---------- */
      var heroTitle = document.querySelector(".hero-title");
      if (heroTitle && !reduced.matches) {
        var heroWords = heroTitle.querySelectorAll(".word");
        gsap.from(heroWords, {
          y: 120,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      var eyebrow = document.querySelector(".eyebrow");
      if (eyebrow && !reduced.matches) {
        gsap.from(eyebrow, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".hero",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      var lede = document.querySelector(".lede");
      if (lede && !reduced.matches) {
        gsap.from(lede, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: ".hero",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      var heroActions = document.querySelector(".hero-actions");
      if (heroActions && !reduced.matches) {
        gsap.from(heroActions, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: ".hero",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      const vision = document.querySelector("#vision");
      const desktop = gsap.matchMedia();
      if (vision && !reduced.matches) {
        desktop.add("(min-width: 1025px) and (min-height: 720px)", () => {
          ScrollTrigger.create({
            trigger: vision,
            start: "top top",
            end: "bottom top",
            pin: true,
            anticipatePin: 1,
          });
        });
      }
      cleanup.push(() => desktop.revert());

      /* ---------- section head kinetic typography ---------- */
      document.querySelectorAll("h2.kinetic").forEach(function (el) {
        if (reduced.matches) return;
        var kwords = el.querySelectorAll(".k-word");
        gsap.from(kwords, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

                  /* ---------- image-comparison style light -> dark wipe ----------
         Mirrors the ImageComparisonSpring component: a dark "image" is
         revealed from top to bottom behind a thin slider line, with a
         fast spring (bounce ~0.3) instead of a linear scroll tween.     */
      (function initThemeWipe() {
        var wipe = document.getElementById("theme-wipe");
        if (!wipe) return;

        var root = document.documentElement;
        var stiffness = 260;
        var damping = 2 * Math.sqrt(stiffness) * 0.7;
        var state = { target: 0, value: 0, velocity: 0 };
        var lastRender = -1;

        function clamp(n, min, max) {
          return Math.min(max, Math.max(min, n));
        }

        function render() {
          var x = clamp(state.value, 0, 1) * 100;
          if (Math.abs(x - lastRender) < 0.01) return;
          lastRender = x;
          root.style.setProperty("--wipe-y", x.toFixed(2) + "%");
          root.style.setProperty("--photo-invert", clamp(state.value, 0, 1).toFixed(3));
          wipe.classList.toggle("is-active", x > 0.5 && x < 99.5);
          document.body.classList.toggle("header-dark", x > 2);
          document.body.classList.toggle("wipe-complete", x >= 99);
        }

        function frame(now) {
          var dt = Math.min((now - (frame.last || now)) / 1000, 0.032) || 0.016;
          frame.last = now;
          var steps = 2;
          var h = dt / steps;
          for (var i = 0; i < steps; i++) {
            var force = -stiffness * (state.value - state.target) - damping * state.velocity;
            state.velocity += force * h;
            state.value += state.velocity * h;
          }
          render();
          wipeFrame = requestAnimationFrame(frame);
        }

        // Wipe effect runs across the hero section and completes at the bottom of the hero
        function themeTarget() {
          var hero = document.querySelector(".hero");
          if (!hero) return 0;
          var heroActions = hero.querySelector(".hero-actions");
          var darkEnd = 320;
          if (heroActions) {
            var actionsRect = heroActions.getBoundingClientRect();
            var actionsTop = actionsRect.top + window.scrollY;
            darkEnd = Math.max(220, Math.min(420, actionsTop - 200));
          } else {
            darkEnd = Math.max(220, Math.min(420, (hero.offsetHeight || 600) * 0.55));
          }
          return clamp(window.scrollY / darkEnd, 0, 1);
        }

        function syncTheme() {
          state.target = themeTarget();
          if (reduced.matches) {
            state.value = state.target;
            state.velocity = 0;
            render();
          }
        }

        ScrollTrigger.create({
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          onUpdate: syncTheme,
          onRefresh: syncTheme
        });

        var wipeFrame;
        if (!reduced.matches) wipeFrame = requestAnimationFrame(frame);
        else render();
        cleanup.push(function () {
          cancelAnimationFrame(wipeFrame);
          root.style.removeProperty("--wipe-y");
          root.style.removeProperty("--photo-invert");
          wipe.classList.remove("is-active");
          document.body.classList.remove("wipe-complete", "header-dark");
        });
      })();

      /* ---------- faculty infinite slider ----------
         Seamless duplicated track; eases up to a faster speed on hover
         (the equivalent of InfiniteSlider's speedOnHover prop).        */
      (function initFacultySlider() {
        var marquee = document.querySelector(".faculty-marquee");
        var track = marquee && marquee.querySelector(".faculty-marquee-track");
        var group = track && track.querySelector(".faculty-marquee-group");
        if (!track || !group) return;

        var baseSpeed = 55;   // px per second
        var hoverSpeed = 180; // speedOnHover
        var currentSpeed = baseSpeed;
        var targetSpeed = baseSpeed;
        var offset = 0;
        var width = 0;
        var last = 0;

        function measure() {
          width = group.getBoundingClientRect().width;
          if (width && offset <= -width) offset += width;
        }

        listen(marquee, "mouseenter", function () { targetSpeed = hoverSpeed; });
        listen(marquee, "mouseleave", function () { targetSpeed = baseSpeed; });

        if (reduced.matches) return;

        measure();
        listen(window, "resize", measure);
        listen(window, "load", measure);

        function tick(now) {
          var dt = Math.min((now - (last || now)) / 1000, 0.05) || 0.016;
          last = now;
          currentSpeed += (targetSpeed - currentSpeed) * Math.min(1, dt * 6);
          if (width) {
            offset -= currentSpeed * dt;
            if (offset <= -width) offset += width;
            track.style.transform = "translate3d(" + offset.toFixed(2) + "px, 0, 0)";
          }
          galleryFrame = requestAnimationFrame(tick);
        }
        var galleryFrame = requestAnimationFrame(tick);
        cleanup.push(function () {
          cancelAnimationFrame(galleryFrame);
          track.style.removeProperty("transform");
        });
      })();

      /* ---------- event disclosure cards ---------- */
      document.querySelectorAll("[data-disclosure]").forEach(function (card) {
        var trigger = card.querySelector(".event-card-trigger");
        var content = card.querySelector(".event-card-content");
        var image = card.querySelector(".event-card-media img");
        if (!trigger) return;

        listen(trigger, "click", context.add(null, function () {
          var open = !card.classList.contains("is-open");
          card.classList.toggle("is-open", open);
          trigger.setAttribute("aria-expanded", String(open));
          if (content) content.inert = !open;

          if (image && !reduced.matches) {
            gsap.to(image, {
              scale: open ? 1.1 : 1,
              filter: open ? "blur(3px)" : "blur(0px)",
              duration: 0.6,
              ease: "elastic.out(1, 0.7)"
            });
          }
        }));
        cleanup.push(function () {
          card.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          if (content) content.inert = true;
        });
      });

      /* ---------- project custom cursor ---------- */
      document.querySelectorAll("[data-project-media]").forEach(function (media) {
        var cursor = media.querySelector(".project-cursor");
        if (!cursor) return;

        listen(media, "pointermove", function (e) {
          var rect = media.getBoundingClientRect();
          var x = e.clientX - rect.left + 10;
          var y = e.clientY - rect.top + 10;
          cursor.style.transform = "translate(" + x + "px, " + y + "px)";
        });
        cleanup.push(function () { cursor.style.removeProperty("transform"); });
      });

      /* ---------- mobile nav ---------- */
      var toggle = document.querySelector(".nav-toggle");
      var nav = document.getElementById("primary-nav");
      var body = document.body;

      function closeNav() {
        if (!toggle) return;
        toggle.setAttribute("aria-expanded", "false");
        body.classList.remove("nav-open");
      }

      if (toggle && nav) {
        cleanup.push(closeNav);
        listen(toggle, "click", function () {
          var open = toggle.getAttribute("aria-expanded") === "true";
          toggle.setAttribute("aria-expanded", String(!open));
          body.classList.toggle("nav-open", !open);
        });

        listen(nav, "click", function (e) {
          if (e.target.closest("a")) closeNav();
        });

        listen(document, "keydown", function (e) {
          if (e.key === "Escape") closeNav();
        });
      }

      /* ---------- scroll progress ---------- */
      var progress = document.querySelector(".scroll-progress");

      if (progress && !reduced.matches) {
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            anticipatePin: 1
          }
        });
      }

      /* ---------- full-page section entrance animations ---------- */
      if (!reduced.matches) {
        gsap.utils.toArray("main > section:not(.pinned-section):not(.pinned-scene)").forEach(function (sec) {
          gsap.from(sec, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        });
      }

      ScrollTrigger.refresh();

      /* ---------- window resize refresh ---------- */
      listen(window, "resize", function () {
        ScrollTrigger.refresh();
      });
    });

    return () => {
      listeners.abort();
      cleanup.forEach((dispose) => dispose());
      context.revert();
    };
  }, []);

  return null;
}
