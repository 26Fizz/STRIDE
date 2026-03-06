import React from 'react';

export default function FontLoader() {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&family=Syne:wght@400;500;600;700;800&display=swap');

      :root {
        --font-display: 'Syne', sans-serif;
        --font-body: 'Inter', sans-serif;
        --font-mono: 'JetBrains Mono', monospace;
      }

      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
    ` }} />
  );
}