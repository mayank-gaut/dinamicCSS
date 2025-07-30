// javascript code goes here
  const textContainer = document.getElementById('text-container');
  const colorInput = document.getElementById('colorbox');
  const colorChangeBtn = document.getElementById('colorchange');
  const fontSizeSlider = document.getElementById('fontsize');
  const italicBtn = document.getElementById('italic');
  const underlineBtn = document.getElementById('underline');
  const boldBtn = document.getElementById('bold');
  const fontSelect = document.getElementById('list');
  const getStyleBtn = document.getElementById('getstyle');
  const cssPropsDisplay = document.getElementById('css-props');

  // Change text color on button click
  colorChangeBtn.addEventListener('click', () => {
    const color = colorInput.value;
    textContainer.style.color = color;
  });

  // Change font size with slider
  fontSizeSlider.addEventListener('input', () => {
    textContainer.style.fontSize = `${fontSizeSlider.value}px`;
  });

  // Toggle italic style
  italicBtn.addEventListener('click', () => {
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
  });

  // Toggle underline
  underlineBtn.addEventListener('click', () => {
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
  });

  // Toggle bold
  boldBtn.addEventListener('click', () => {
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
  });

  // Change font family
  fontSelect.addEventListener('change', () => {
    textContainer.style.fontFamily = fontSelect.value;
  });

  // Get CSS styles
  getStyleBtn.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(textContainer);
    const styles = [];

    const colorName = colorInput.value || computedStyle.color;
    styles.push(`color: ${textContainer.style.color || colorName};`);

    if (textContainer.style.textDecoration === 'underline') {
      styles.push('text-decoration: underline;');
    }

    if (textContainer.style.fontStyle === 'italic') {
      styles.push('font-style: italic;');
    }

    if (textContainer.style.fontWeight === 'bold') {
      styles.push('font-weight: bold;');
    }

    if (textContainer.style.fontSize) {
      styles.push(`font-size: ${textContainer.style.fontSize};`);
    }

    if (textContainer.style.fontFamily) {
      styles.push(`font-family: ${textContainer.style.fontFamily};`);
    }

    cssPropsDisplay.textContent = styles.join(' ');
  });
