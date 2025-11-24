# MatchSphere Testing Guide

## 🎯 Manual Testing Checklist

### Phase 1: Initial Setup ✅

- [ ] Dependencies installed without errors
- [ ] App starts successfully with `npm start`
- [ ] Metro bundler runs without errors
- [ ] QR code displays in terminal

### Phase 2: Splash & Onboarding 🚀

- [ ] Splash screen appears with "MatchSphere" branding
- [ ] Auto-navigates to onboarding after 2 seconds
- [ ] Onboarding screen displays welcome message
- [ ] "Get Started" button navigates to login

### Phase 3: Authentication 🔐

#### Login Screen

- [ ] Login screen displays properly
- [ ] Username and password inputs work
- [ ] Can type in both fields
- [ ] "Sign In" button is clickable
- [ ] "Sign Up" link navigates to register

#### Register Screen

- [ ] Register screen displays properly
- [ ] All input fields work (username, email, password)
- [ ] "Create Account" button is clickable
- [ ] "Sign In" link navigates back to login

#### Successful Login

- [ ] Login with credentials works:
  - Username: `emilys`
  - Password: `emilyspass`
- [ ] Loading spinner appears during login
- [ ] Successful login navigates to main app
- [ ] User stays logged in after app reload

### Phase 4: Main Navigation 🧭

#### Bottom Tabs

- [ ] All 6 tabs are visible
- [ ] Tab icons display correctly
- [ ] Tab labels are readable
- [ ] Active tab is highlighted
- [ ] Tapping each tab navigates properly:
  - [ ] Home
  - [ ] Leagues
  - [ ] Teams
  - [ ] Players
  - [ ] Favourites
  - [ ] Profile

### Phase 5: Home Screen 🏠

- [ ] Greeting displays with username
- [ ] "Today's Matches" section appears
- [ ] Match cards display correctly
- [ ] "Upcoming Matches" section appears
- [ ] "Recent Results" section appears
- [ ] Can scroll through content
- [ ] Loading spinner shows while fetching data
- [ ] Tapping a match card navigates (if detail screen exists)

### Phase 6: Leagues Screen 🏆

- [ ] League list displays
- [ ] League cards show:
  - [ ] League name
  - [ ] Sport type
  - [ ] Country
- [ ] Can scroll through leagues
- [ ] Loading spinner shows while fetching
- [ ] At least 20 leagues display

### Phase 7: Teams Screen 👥

- [ ] Teams screen displays
- [ ] Helper text appears
- [ ] Screen is scrollable

### Phase 8: Players Screen 👤

- [ ] Search bar displays
- [ ] Can type in search field
- [ ] Helper text shows before searching
- [ ] Debounced search works (waits 500ms)
- [ ] Search results display after typing
- [ ] Player cards show:
  - [ ] Player name
  - [ ] Team name
  - [ ] Position
- [ ] "No players found" shows for invalid search
- [ ] Loading spinner during search

### Phase 9: Favourites Screen ❤️

#### Initial State

- [ ] Screen displays with header
- [ ] Three sections appear:
  - [ ] Teams
  - [ ] Players
  - [ ] Matches
- [ ] Badge shows count (initially 0)
- [ ] Empty state messages display

#### With Favourites (if toggle functionality works)

- [ ] Favourite items display in cards
- [ ] Can tap to navigate to details
- [ ] Counts update in badges

### Phase 10: Profile Screen ⚙️

#### Profile Information

- [ ] Avatar displays with initials
- [ ] Username displays correctly
- [ ] Email displays (if available)

#### Settings Section

- [ ] Settings card displays
- [ ] Theme toggle button shows
- [ ] Current theme indicated (Light/Dark)

#### Theme Toggle

- [ ] Clicking theme button changes theme
- [ ] App switches between light/dark mode
- [ ] Theme preference persists after reload
- [ ] All colors change appropriately:
  - [ ] Background
  - [ ] Text
  - [ ] Cards
  - [ ] Buttons
  - [ ] Borders

#### Logout

- [ ] Logout button displays
- [ ] Clicking logout shows confirmation or logs out
- [ ] Returns to login screen
- [ ] User must login again to access app

### Phase 11: Theme Testing 🎨

#### Light Mode

- [ ] Background is light
- [ ] Text is dark
- [ ] Cards are white/light
- [ ] Primary color is sky blue
- [ ] Everything is readable

#### Dark Mode

- [ ] Background is dark
- [ ] Text is light
- [ ] Cards are dark slate
- [ ] Primary color is lighter blue
- [ ] Everything is readable

#### Theme Consistency

- [ ] Theme applies to all screens
- [ ] Navigation bar respects theme
- [ ] Status bar respects theme
- [ ] All components use theme colors

### Phase 12: Data Fetching 📡

#### Loading States

- [ ] Loading spinners appear when fetching data
- [ ] Spinners are centered and visible
- [ ] Content appears after loading

#### Error Handling

- [ ] No crashes when offline
- [ ] Error messages are user-friendly
- [ ] Can retry after errors

#### Data Display

- [ ] Match data displays correctly
- [ ] League data displays correctly
- [ ] Player data displays correctly
- [ ] Scores format properly
- [ ] Dates format properly
- [ ] Times format properly

### Phase 13: Performance ⚡

- [ ] App loads in reasonable time
- [ ] Navigation is smooth
- [ ] No lag when switching tabs
- [ ] Search is responsive
- [ ] Scrolling is smooth
- [ ] Images load properly (when added)
- [ ] No memory leaks visible

### Phase 14: Persistence 💾

- [ ] Login state persists after app close
- [ ] Theme preference persists
- [ ] Favourites persist (if functionality added)
- [ ] Can clear data by logging out

### Phase 15: UI/UX Polish ✨

#### Visual Design

- [ ] Consistent spacing throughout
- [ ] Rounded corners on cards
- [ ] Shadows on cards visible
- [ ] Icons display correctly
- [ ] Fonts are readable
- [ ] Colors are pleasant

#### Responsiveness

- [ ] Works on small screens
- [ ] Works on large screens
- [ ] Content doesn't overflow
- [ ] Buttons are tap-friendly
- [ ] Input fields are usable

#### Typography

- [ ] Headings are distinct
- [ ] Body text is readable
- [ ] Font sizes are appropriate
- [ ] Line heights are comfortable

### Phase 16: Edge Cases 🔍

- [ ] Empty search returns helpful message
- [ ] No data shows empty state
- [ ] Long text truncates properly
- [ ] Special characters display correctly
- [ ] No crashes on rapid tapping
- [ ] No crashes on rapid navigation

---

## 🐛 Bug Report Template

If you find issues, document them like this:

```
**Bug Title**: [Short description]

**Steps to Reproduce**:
1. Go to...
2. Click on...
3. See error

**Expected Behavior**: [What should happen]

**Actual Behavior**: [What actually happens]

**Screen**: [Which screen/tab]

**Theme**: Light / Dark

**Platform**: iOS / Android / Web

**Error Message**: [If any]

**Screenshot**: [If available]
```

---

## ✅ Success Criteria

### Minimum Viable Product (MVP)

- ✅ App starts without crashes
- ✅ Can navigate through auth flow
- ✅ Can view all main screens
- ✅ Theme toggle works
- ✅ API data displays

### Full Feature Set

- ✅ All navigation works
- ✅ All API endpoints return data
- ✅ Search functionality works
- ✅ Favourites can be saved
- ✅ Theme persists
- ✅ UI is polished

---

## 📊 Test Results Log

Date: ****\_\_\_****

Tester: ****\_\_\_****

| Feature      | Status | Notes |
| ------------ | ------ | ----- |
| Installation | ✅/❌  |       |
| Splash       | ✅/❌  |       |
| Auth         | ✅/❌  |       |
| Navigation   | ✅/❌  |       |
| Home         | ✅/❌  |       |
| Leagues      | ✅/❌  |       |
| Teams        | ✅/❌  |       |
| Players      | ✅/❌  |       |
| Favourites   | ✅/❌  |       |
| Profile      | ✅/❌  |       |
| Theme        | ✅/❌  |       |
| API          | ✅/❌  |       |
| Performance  | ✅/❌  |       |

---

## 🚀 Quick Test Run (5 Minutes)

1. ⏱️ **0:00** - Start app
2. ⏱️ **0:30** - Login with test credentials
3. ⏱️ **1:00** - Check Home screen data loads
4. ⏱️ **2:00** - Navigate through all tabs
5. ⏱️ **3:00** - Toggle theme
6. ⏱️ **4:00** - Search for a player
7. ⏱️ **4:30** - Logout and login again
8. ⏱️ **5:00** - Verify theme persisted

---

**Good luck with testing! 🎉**
