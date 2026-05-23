Run `bundle exec jekyll build 2>&1` to compile the Jekyll site and capture all output (stdout and stderr).

Analyze the output for:
1. **Deprecation warnings** — e.g. Sass `@import` deprecation, plugin deprecations, Jekyll API deprecations
2. **Build errors** — any errors that prevent the site from building successfully
3. **Liquid template warnings** — missing includes, undefined variables, filter errors
4. **Plugin warnings** — issues from jekyll-feed, jekyll-seo-tag, jekyll-sitemap, or other plugins

For each issue found:
- State what the warning/error is
- Identify the exact file and line number
- Explain why it's happening
- Suggest a concrete fix

If the build succeeds with no warnings, confirm the build is clean.

If the non-verbose build says warnings were omitted, run again with `--verbose` to capture all of them.
