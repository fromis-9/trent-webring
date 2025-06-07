# trent university webring

<img src="img/trenticon.png" alt="Trent Webring" width="50">

## what is this?

a directory where trent students and alumni can display profiles of themselves

## joining

you need a @trentu.ca email. fill out [this form](https://forms.office.com/r/StpgGu1xje) and wait for approval

what we need:
- name
- program 
- grad year
- bio

what's optional:
- profile pic
- pronouns  
- socials (linkedin, github, etc)

## if you have a website

throw one of these on there if you want:

```html
<a href="https://trentwebring.com">
  <img src="https://trentwebring.com/trenticon.png" width="20" alt="Trent Webring"/>
</a>
```

or just:
```html
Part of the <a href="https://trentwebring.com">Trent University Webring</a>
```

## how it works

- newest 6 members get the main grid
- everyone else: still there, just search for them
- each profile gets its own url (trentwebring.com#your-name)
- click around the network thing, it's interactive
- mobile responsive

## tech stack

- html/css/js + tailwind
- supabase for data
- D3.js for the network visualization
- microsoft forms for submissions

## dev setup

```bash
npm install
npm run build    # builds css
npm run dev      # local server
```

---

inspired by [uwaterloo's webring](https://github.com/JusGu/uwatering)

GPL-3.0 license
