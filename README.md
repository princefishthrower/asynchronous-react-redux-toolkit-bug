# What is this?

This is a simple minimum working example showing how async `@redux/toolkit` NEVER WORKS with react testing library. It never has, despite what numerous blog posts and GitHub might lead you to believe. 

I challenge anyone as to how I can get the single test in this project pass. It would help me greatly in some test that very badly need to be written for a project I'm working on for work.

Steps to reproduce:

1. Since we can't issue npm scripts here in codesandbox, download a ZIP of this codesandbox (the down arrow in the top left there by the title 'Files')
2. Issue `npm install`
3. Issue `npm run test`
4. Watch as the test fails, only `data-testid="ORIGINAL"` is visible, the redux store change and subsequent rerender is never fired.

Of course, fee free to observe the normal behavior in a non-test environment - as we expect, we quickly see the "I'm original" text flash for a very short moment before it is replaced by the "I'm new" text.

The only "non-normal" thing I needed to do in terms of this whole minimum working example was add `SKIP_PREFLIGHT_CHECK=true` to a `.env` file, since there was some issue with varying `babel-jest` versions.
