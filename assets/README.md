# RB Properties Website

A responsive, front-end website for **RB Properties**, a real estate company. Built with plain HTML, CSS and JavaScript, so there is nothing to install or build.

## Pages and features

- **Home**: hero section, key stats, featured properties, services and a call to action.
- **Properties**: property listings with 10-slide picture carousels, price, location, property type, sale or rent status, bedrooms, bathrooms, size, parking and features. Filter by type, sale or rent, and location.
- **Blog**: article cards that expand to read more.
- **Contact**: enquiry form that collects name, phone, email, interest, property and message. The "Enquire" button on each listing pre-selects that property.
- **Live chat**: floating chat widget with quick-reply buttons and automatic answers.
- **WhatsApp**: floating WhatsApp button, a link inside the chat window, a button on the Contact page, and a "Chat on WhatsApp" button on every listing that opens a chat with the property details pre-filled.
- **Design**: teal blue brand colour, responsive layout, and automatic light and dark themes.

## Project structure

```
index.html      Page markup (all four pages, chat widget, enquiry form)
css/style.css   Styles, brand colours, light/dark themes, responsive layout
js/script.js    Property data, carousels, filters, page switching, form and chat
README.md
.gitignore
```

## Running locally

Open `index.html` in a browser. No build step or server is needed.

## Deploying with GitHub Pages

1. Push the files to the root of your repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your main branch and the `/ (root)` folder, then save.
4. Your site will be live at `https://<your-username>.github.io/<repository-name>/`.

## Customising

- **Brand colour:** change `--teal` (and `--teal-d` for the darker shade) in the `:root` block at the top of `css/style.css`. Dark-mode values are set in the dark theme blocks just below.
- **Properties:** edit the `P` array in `js/script.js`. Each entry has a title, type, sale or rent status, location, price, bedrooms, bathrooms, size, parking, colours and feature tags.
- **Blog posts:** edit the `B` array in `js/script.js`.
- **WhatsApp number:** change `WA` at the top of `js/script.js`, and the `https://wa.me/message/...` links in `index.html`.
- **Contact details:** update the phone number, email and address in `index.html`.

## Still to do before launch

- **Real photos:** the property pictures are illustrated placeholders generated in `script.js` by the `scene()` function. Add up to 10 real photos per property by giving an entry in the `P` array an `img` list, e.g. `img:["images/p1-1.jpg", "images/p1-2.jpg", ...]`. Any slide without a photo keeps its placeholder.
- **Contact details:** the phone number, email and address are placeholders.
- **Enquiry form:** submissions are sent to Formspree (`https://formspree.io/f/xkjjqooo`, set as `FORM_URL` in `js/script.js` and as the form's `action` in `index.html`) and emailed to the address registered on your Formspree account. Fields sent: `name`, `phone`, `email`, `interest`, `property`, `message`. To test: open the site locally, submit the form, then check your inbox and the Formspree dashboard. Confirm your email with Formspree on the first submission if asked.
- **Live chat:** the chat uses scripted replies. Replace the `reply()` function in `script.js` with a real live-chat service or backend so your team can answer visitors.

## License

All rights reserved by RB Properties unless stated otherwise.
