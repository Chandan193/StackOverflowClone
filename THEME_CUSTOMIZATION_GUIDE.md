# Dark/Light Mode Theme Customization Guide

## How the Theme System Works

The application uses a context-based theme system with CSS custom properties for maximum flexibility and performance.

### Architecture Overview

```
ThemeProvider (src/context/ThemeContext.js)
    ↓
    └─ useTheme Hook (src/hooks/useTheme.js)
         ↓
         └─ All Components (using CSS variables)
```

## Accessing Theme in Components

### Using the useTheme Hook

```javascript
import { useTheme } from '../../hooks/useTheme';

function MyComponent() {
  const { isDark, toggleTheme, colors } = useTheme();
  
  return (
    <div>
      <p>Current Mode: {isDark ? 'Dark' : 'Light'}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p style={{ color: colors.primary }}>Text in primary color</p>
    </div>
  );
}
```

### Using CSS Variables Directly

All CSS uses CSS custom properties for automatic theme switching:

```css
.my-div {
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
  box-shadow: 0px 2px 6px var(--shadow);
}

.my-div:hover {
  background-color: var(--hover);
}
```

## Available CSS Variables

### Background Colors
- `--background`: Main page background
- `--surface`: Card/container background
- `--surface-light`: Lighter surface (inputs, etc.)
- `--hover`: Hover state background
- `--active`: Active/selected state background

### Text Colors
- `--text`: Primary text color
- `--text-secondary`: Secondary/muted text
- `--navbar-color`: Navbar background color

### Theme Colors
- `--primary`: Main blue (#1e88e5)
- `--primary-light`: Lighter blue (#42a5f5)
- `--primary-dark`: Darker blue (#1565c0)
- `--secondary`: Orange accent (#ff6b35)

### Status Colors
- `--success`: Green (#4caf50)
- `--warning`: Orange (#ff9800)
- `--error`: Red (#f44336)

### Utility Colors
- `--border`: Border color
- `--shadow`: Box shadow color

## Customizing the Color Palette

### Option 1: Modify ThemeContext.js

Edit the `colors` object in `src/context/ThemeContext.js`:

```javascript
export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: isDark
      ? {
          primary: "#YOUR_COLOR",  // Change primary color
          background: "#YOUR_COLOR",
          // ... other colors
        }
      : {
          // Light mode colors
        },
  };
};
```

### Option 2: Override CSS Variables

Add custom CSS variables to override defaults:

```css
/* Override in light mode */
:root {
  --primary: #your-color;
  --secondary: #your-color;
}

/* Override in dark mode */
[data-theme="dark"] {
  --primary: #your-color;
  --secondary: #your-color;
}
```

## Adding New Theme Colors

### Step 1: Add to ThemeContext.js

```javascript
colors: isDark ? {
  myCustomColor: "#5a3dev",
  // ...
} : {
  myCustomColor: "#e8d4f1",
  // ...
}
```

### Step 2: Add CSS Variable to index.css

```css
:root {
  --my-custom-color: #e8d4f1;
}

[data-theme="dark"] {
  --my-custom-color: #5a3def;
}
```

### Step 3: Use in Components

```css
.my-element {
  color: var(--my-custom-color);
}
```

## Theme Toggle Button Customization

The theme toggle is located in `src/components/Navbar/Navbar.jsx`:

### Change Icons

Replace the FontAwesome icons:

```javascript
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// or use other icons:
import { faSunrise, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
```

### Change Button Position

Move the toggle button by modifying the navbar layout in the JSX structure.

### Customize Button Appearance

Edit `.theme-toggle` in `src/components/Navbar/Navbar.css`:

```css
.theme-toggle {
  width: 42px;
  height: 42px;
  /* Customize size, colors, style, etc. */
}
```

## Gradient Customization

Many elements use gradient backgrounds. To change them, modify the `background` property:

```css
.element {
  /* Original gradient */
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  
  /* Custom gradient */
  background: linear-gradient(90deg, #ff0000 0%, #00ff00 100%);
}
```

## Shadow Customization

Modify shadow values in CSS:

```css
/* Light shadow */
box-shadow: 0px 2px 6px var(--shadow);

/* Heavy shadow */
box-shadow: 0px 8px 24px var(--shadow);

/* Multiple shadows */
box-shadow: 0px 2px 6px var(--shadow), 0px 8px 16px var(--shadow);
```

## Creating a Custom Theme Preset

### Step 1: Create a new theme object

```javascript
const themes = {
  light: {
    primary: "#1e88e5",
    secondary: "#ff6b35",
    background: "#ffffff",
    // ... all colors
  },
  dark: {
    primary: "#1e88e5",
    secondary: "#ff6b35",
    background: "#0a0e27",
    // ... all colors
  },
  highContrast: {
    primary: "#000000",
    secondary: "#ffff00",
    background: "#ffffff",
    // ... all colors for accessibility
  }
};
```

### Step 2: Update ThemeContext to support multiple presets

```javascript
const [theme, setTheme] = useState('light');

const switchTheme = (themeName) => {
  setTheme(themeName);
  localStorage.setItem('theme', themeName);
};
```

## Performance Tips

1. **CSS Variables are performant**: No runtime overhead
2. **Avoid excessive re-renders**: Use `useTheme` hook sparingly
3. **Use CSS for styling**: Don't dynamically generate styles in JavaScript
4. **Leverage transitions**: Use CSS transitions instead of JavaScript animations

## Accessibility Considerations

### Color Contrast
Ensure sufficient contrast between text and background:

```css
/* Bad */
color: #999999;
background-color: #f5f5f5;

/* Good */
color: #333333;
background-color: #f5f5f5;
```

### Focus States
Always provide visible focus states:

```css
input:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### Reduced Motion
Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Testing Your Changes

1. **Visual Testing**: Switch between light/dark mode
2. **Responsive Testing**: Check all screen sizes
3. **Accessibility**: Use browser DevTools accessibility checker
4. **Cross-browser**: Test in Chrome, Firefox, Safari, Edge

## Common Issues & Solutions

### Issue: Theme not persisting
**Solution**: Clear localStorage and browser cache, check ThemeContext logic

### Issue: Colors not changing smoothly
**Solution**: Ensure `transition` property is added to CSS rules

### Issue: Text not readable in dark mode
**Solution**: Check color contrast ratios, aim for 4.5:1 minimum

## Deployment

After customizing the theme:

1. Test thoroughly in both modes
2. Validate accessibility compliance
3. Check performance (no janky transitions)
4. Test on real devices
5. Deploy to production

---

**For more information**, refer to:
- `src/context/ThemeContext.js` - Theme logic
- `src/index.css` - CSS variables
- `PREMIUM_UI_UPGRADE.md` - Complete upgrade documentation
