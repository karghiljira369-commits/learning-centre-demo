KARGHIL LEARNING CENTRE — REVIEWED PRACTICE WEBSITE

OPEN ON WINDOWS
1. Right-click First-Website-Reviewed.zip and choose Extract All.
2. Keep index.html, style.css and script.js together in the extracted folder.
3. Open that folder in VS Code.
4. Right-click index.html in File Explorer and open it with Chrome.

This is a corrected package based on your uploaded index(2).html,
style.css and script.js. index(1).html contained the earlier inline
CSS and JavaScript version. Your uploaded originals were not changed.
The corrected homepage is named index.html for conventional hosting.

CORRECTIONS
- Replaced nested h1 tags with one main heading.
- Repaired corrupted punctuation using HTML entities.
- Updated the browser-tab title to Karghil Learning Centre.
- Moved About and FAQ out of the footer into the main page content.
- Added a simple footer credit and labelled the About and FAQ sections.
- Removed an extra CSS semicolon (harmless, but unnecessary).
- Replaced horizontal-overflow hiding with text wrapping so content is
  not silently clipped. Retained the existing responsive sizing.
- Added a visible keyboard focus outline and padding to FAQ questions.
- Preserved the original JavaScript demo form behaviour.

CHECKS COMPLETED
- Balanced HTML structure and one main heading.
- Unique element IDs and valid internal link destinations.
- CSS and JavaScript files exist at their referenced relative paths.
- JavaScript is loaded with defer.
- Required fields have matching visible labels; email uses type=email.
- CSS brace balance and corrupted-character checks.
- JavaScript submit handler tested with an isolated DOM mock:
  prevents default submission and displays the expected demo message.

BROWSER CHECKS STILL NEEDED
The review environment blocked browser preview. These code checks do
not prove visual appearance, browser validation, or accessibility.
Please check in Chrome:
[ ] No sideways scrolling when the window is narrow.
[ ] Explore classes and About us jump to the correct sections.
[ ] Each FAQ opens and closes.
[ ] Tab reaches links, fields, the button, and FAQ questions visibly.
[ ] An empty form is rejected.
[ ] Email abc is rejected after the other required fields are filled.
[ ] Test User / test@example.com / Test message displays:
    Demo complete. Your enquiry has not been sent or saved.
[ ] Submitting does not navigate away or reload the page.

This remains a fictional portfolio demonstration. The form does not
send enquiries or provide a backend. Nothing has been published.
