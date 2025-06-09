# PRD: Search Results Prototype

## Project Overview

### Purpose

Interactive prototype demonstrating personalized search engine results across mobile and desktop viewports simultaneously.

### Goals

- Showcase how search results vary between users
- Display responsive design differences between mobile/desktop
- Enable quick switching between user personas
- Facilitate stakeholder discussions about search personalization

### Non-Goals

- Production deployment
- Backend integration
- Real search functionality
- Performance optimization
- Accessibility compliance

## Technical Requirements

### Stack

- **Build Tool**: Vite 5.x
- **Framework**: React 18.x
- **Styling**: Tailwind 4
- **Animations**: Framer Motion (optional)
- **Dev Environment**: Node.js 18+

### Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)

## Functional Requirements

### Core Features

#### 1. Dual Viewport Display

- Desktop view (1280px width)
- Mobile view (375px width)
- Both views rendered simultaneously side-by-side
- Synchronized content updates

#### 2. Person Selector

- 4 clickable buttons: "Caitlin Clark", "Blake Lively", "Eleanor Roosevelt", "Janis Joplin"
- Active state indication
- Instant view updates on selection

#### 3. Search Results Display

- 5-8 results per person
- Each result includes:
  - Title
  - URL
  - Description snippet
  - Optional: thumbnail, date, badges

#### 4. Responsive Behavior

- Desktop: Traditional SERP layout
- Mobile: Condensed cards, larger touch targets
- Consistent information architecture

### Data Structure

```javascript
{
  "caitlin-clark": {
    query: "basketball training",
    results: [
      {
        title: "Elite Basketball Training Programs",
        url: "sportsacademy.com/elite-training",
        description: "Professional training programs...",
        thumbnail: "optional-image-url"
      }
    ]
  }
}
```

## UI/UX Specifications

### Layout

```
+----------------------------------+
|     Person Selector Buttons      |
+----------------------------------+
|                                  |
|  Desktop View  |   Mobile View   |
|                |                 |
|  [1280x800]    |   [375x667]     |
|                |                 |
+----------------------------------+
```

### Visual Design

- Clean, modern search engine aesthetic
- Clear visual hierarchy
- Subtle shadows/borders between viewports
- Smooth transitions between persona switches

### Interactions

- Hover states on buttons and results
- Click feedback
- Optional: Fade/slide transitions on content change

## Implementation Plan

### Phase 1: Core Components
- PersonSelector component
- DesktopView/MobileView containers
- SearchResult component
- Mock data creation

### Phase 2: Styling

- Desktop layout
- Mobile optimizations
- Transition effects

### Phase 3: Polish

- Edge case handling
- Final styling tweaks
- Demo flow optimization

## Success Criteria

- Stakeholders can easily switch between personas
- Clear visual differences between mobile/desktop
- Smooth, professional demo experience
- Total development time under 4 hours

## Example Component Structure

```jsx
// App.jsx
function App() {
  const [activePerson, setActivePerson] = useState('caitlin-clark');

  return (
    <div className="min-h-screen bg-gray-50">
      <PersonSelector
        active={activePerson}
        onChange={setActivePerson}
      />

      <div className="grid grid-cols-2 gap-8 p-8">
        <DesktopView data={searchData[activePerson]} />
        <MobileView data={searchData[activePerson]} />
      </div>
    </div>
  );
}
```

## Notes

- Keep mock data realistic but generic
- Prioritize demo flow over code quality
- Document any keyboard shortcuts for smoother demos
- Consider adding a "presentation mode" that cycles through personas automatically