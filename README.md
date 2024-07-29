Agency Jekyll theme - Bioinfolab@UniSannio
==========================================

Agency theme based on [Agency bootstrap theme ](https://startbootstrap.com/template-overviews/agency/)
Customized for the Bioinfolab@UniSannio website.

# Maintenance instructions


## Making a local copy of the website

- Install Jekyll: https://jekyllrb.com/docs
- Install Git: https://git-scm.com/downloads
- Clone the website: https://github.com/franapoli/bioinfolab.github.io.git


## Testing the website

- From the website local folder, run in the terminal: bundle exec jekyll serve 
- From a browser, go to http://127.0.0.1:4000/bioinfolab.github.io


## Managing news

- Add an image for the news in the img/portfolio folder
- Add a new mardown file in the _posts folder (duplicate an existing one).
   Name it following the format: YYYY-MM-DD-description.markdown.
   In the file, update the title, image file, and link. Use "pinned: true" to
   have the post appear at the top. If "category: publication" and
   "modal: true", the "description" contents are shown in a popup window.


## Manage team members

- Team members and info are in the "_team" folder.
- Team pictures are in '/img/team/' and should be 500x500.


## Updating the website

- Update your local copy:
    git pull
- Commit your changes locally:
    git commit -a -m "description of the update"
- Push the changes on the remote server (you need writing access):
    git push

