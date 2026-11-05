Agency Jekyll theme - Bioinfolab@UniSannio
==========================================

Agency theme based on [Agency bootstrap theme ](https://startbootstrap.com/template-overviews/agency/)
Customized for the Bioinfolab@UniSannio website.

# Maintenance instructions


## Making a local copy of the website

- Install Jekyll: https://jekyllrb.com/docs
- Install Git: https://git-scm.com/downloads
- Clone the website from: https://github.com/franapoli/bioinfolab.github.io.git


## Testing the website

- From the website local folder, run in the terminal: bundle exec jekyll serve 
- From a browser, go to http://127.0.0.1:4000/bioinfolab.github.io/ (or whatever
  address jekyll will provide after the previous command).

## Managing news

- Add an image for the news in the img/portfolio folder
- Add a new markdown file in the _posts folder (duplicate an existing one).
   Name it following the format: YYYY-MM-DD-description.markdown.
   In the file, update the title, image file (use the same as thumbnail), and
   link. Use "pinned: true" to have the post appear at the top, completely
   remove the "pinned" line otherwise. If "category: publication" and
   "modal: true", the "description" contents are shown in a popup window.


## Manage team members

- Team members and info are in the "_team" folder.
- Team pictures are in '/img/team/' and should be 500x500.


## Updating the website

- Update your local copy:
    git pull
- Make your changes and **test** the website:
    *see above*
- Commit your changes locally:
    git commit -a -m "description of the update"
- Push the changes on the remote server (you need writing access):
    git push


## Italian version

The site is published in English (/) and Italian (/it/), with an EN | IT
switch in the navbar.

- Interface texts (menu, section titles, About, Facilities, Contact...) are
  in `_data/i18n.yml`, under `en:` and `it:`.
- News, people and tools are translated in the front matter of each file with
  `_it` fields. If a field is missing, the English text is shown.
    - news (`_posts`): `title_it`, `description_it`; publications also
      `headline_it` (the paper title stays in English); optional `link_it`.
    - people (`_team`): `position_it`, `bio_it` (Italian version of the text
      below the front matter).
    - tools (`_tools`, `_edutools`): `title_it`, `content_it`, `link_label_it`.
- The Italian page is `it/index.html`; it uses the same layout as the English
  one.
