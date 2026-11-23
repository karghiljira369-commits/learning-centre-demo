# Karghil Learning Centre

Karghil Learning Centre is a fictional tuition centre portfolio demonstration. It presents example subjects, a short description of the centre, frequently asked questions, and a demo enquiry form.

## Live demo

[Open the live demo](https://karghiljira369-commits.github.io/learning-centre-demo/)

## Features

- A homepage for the fictional learning centre.
- Example classes covering Mathematics, Science, and English.
- Navigation links to the classes and About sections.
- An About section describing the fictional centre.
- A collapsible FAQ with two questions.
- A demo enquiry form with required Name, Email, and Message fields.
- Browser email-format validation through the email input type.
- A visible note explaining that nothing is sent or saved.
- A demo completion message after a valid form submission attempt.
- Responsive layout adjustments for mobile, tablet, and desktop screens.

## Technologies

- HTML
- CSS
- JavaScript
- GitHub Pages for the live demo

## Open the website locally

1. Download or copy the project folder to your computer.
2. Open the `First-Website` folder.
3. Double-click `index.html` to open it in your default browser.

To open it specifically in Chrome, right-click `index.html`, choose **Open with**, and select Google Chrome.

No local server is required for this page because it uses relative file paths and can open directly in a browser.

## How the files work together

- `index.html` contains the page structure and content, including the navigation, class information, About section, FAQ, and enquiry form.
- `style.css` contains the visual design and responsive layout rules. It is linked from the HTML `<head>`.
- `script.js` adds the demo form behaviour. It prevents the form from being sent and displays a completion message after the browser's required-field and email validation succeeds. It is loaded from the HTML with `defer`.

## Limitations

This is a portfolio demonstration only. It does not provide real enrolments, a backend, data storage, or message delivery. The enquiry form does not send or save anything.
