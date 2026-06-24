/* Expanded Lucide-style stroke icon set for the brutalist BrandUnpack site. 2px round-cap. */
(function () {
  const I = (paths, extra = {}) => (props = {}) =>
    React.createElement('svg', {
      width: props.size || 22, height: props.size || 22, viewBox: '0 0 24 24',
      fill: 'none', stroke: 'currentColor', strokeWidth: props.weight || 2,
      strokeLinecap: 'round', strokeLinejoin: 'round', ...extra,
      ...Object.fromEntries(Object.entries(props).filter(([k]) => !['size', 'weight'].includes(k))),
    }, paths.map((d, i) => React.createElement('path', { key: i, d })));

  window.BUIcons = {
    ArrowRight: I(['M5 12h14', 'm13 5 7 7-7 7']),
    ArrowUpRight: I(['M7 17 17 7', 'M7 7h10v10']),
    ArrowDown: I(['M12 5v14', 'm19 12-7 7-7-7']),
    Plus: I(['M12 5v14', 'M5 12h14']),
    Minus: I(['M5 12h14']),
    Check: I(['M20 6 9 17l-5-5']),
    Star: I(['M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.4l6.6-.9z']),
    Box: I(['M21 8 12 3 3 8v8l9 5 9-5Z', 'M3 8l9 5 9-5', 'M12 13v8']),
    Megaphone: I(['m3 11 14-7v16L3 13z', 'M3 11v2a2 2 0 0 0 2 2h1', 'M9 14v3a2 2 0 0 0 4 0v-1']),
    Palette: I(['M12 2a10 10 0 1 0 0 20 2 2 0 0 0 2-2 2 2 0 0 1 2-2h2a4 4 0 0 0 4-4 10 10 0 0 0-10-10z', 'M8.5 10.5h.01', 'M12 7.5h.01', 'M15.5 10.5h.01']),
    Layers: I(['m12 2 9 5-9 5-9-5 9-5z', 'm3 12 9 5 9-5', 'm3 17 9 5 9-5']),
    Sparkle: I(['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z']),
    Camera: I(['M14.5 4l1.5 2.5h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3L9.5 4z', 'M12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z']),
    FileText: I(['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M9 13h6', 'M9 17h6']),
    Store: I(['M3 9l1.5-5h15L21 9', 'M3 9v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9', 'M3 9h18', 'M9 20v-6h6v6']),
    Compass: I(['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'm15.5 8.5-2 5-5 2 2-5z']),
    Grid: I(['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M13 13h7v7h-7z', 'M4 13h7v7H4z']),
    Mail: I(['M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z', 'm3.5 6.5 8.5 6 8.5-6']),
    Phone: I(['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z']),
    Instagram: I(['M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z', 'M16 11.4a4 4 0 1 1-7.9 1.2A4 4 0 0 1 16 11.4z', 'M17.5 6.5h.01']),
    Linkedin: I(['M4.5 9H8v12H4.5z', 'M6.25 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z', 'M12 9h3.3v1.6a3.6 3.6 0 0 1 3.2-1.8c2.3 0 4 1.5 4 4.7V21H19v-6.3c0-1.5-.5-2.5-1.9-2.5-1 0-1.7.7-2 1.4-.1.2-.1.6-.1.9V21H12z']),
    X: I(['M18 6 6 18', 'M6 6l12 12']),
    Menu: I(['M3 6h18', 'M3 12h18', 'M3 18h18']),
    Quote: I(['M9 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3H5', 'M19 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3h-3']),
    Zap: I(['M13 2 4 14h7l-1 8 9-12h-7z']),
    Refresh: I(['M21 12a9 9 0 1 1-2.6-6.4', 'M21 3v5h-5']),
    Shield: I(['M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z', 'm9 12 2 2 4-4']),
    MapPin: I(['M12 22s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12z', 'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z']),
    Clock: I(['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 7v5l3 2']),
    Dollar: I(['M12 2v20', 'M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.6 7 6.5 9.2 9.5 12 9.5s5 1.1 5 3-2.2 3-5 3-5-1.1-5-3']),
    Filter: I(['M3 5h18l-7 8v6l-4-2v-4z']),
  };
})();
