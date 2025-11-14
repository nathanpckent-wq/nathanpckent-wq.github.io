# Dev Env Instructions

## Foreman server

To compile the entire app for dev:

```sh
foreman start
```

## TailwindCSS

To run the local compiler for tailwindcss use this command to watch:

```sh
# To watch the active changes
tailwindcss -w -i ./assets/css/portfolio/input.css -o ./assets/css/portfolio/main.min.css -m

# To recompile once only
tailwindcss -i ./assets/css/portfolio/input.css -o ./assets/css/portfolio/main.min.css -m
```

## Serving The Jekyll Site

To run the local jekyll server

```sh
bundle exec jekyll serve

# OR

jekyll serve
```
