/* Restores the collapsed side bar before the page paints, so it does not flash open. */
try { if (localStorage.getItem('adRail') === '1') document.documentElement.classList.add('ad-rail'); } catch (e) { /* ignore */ }
