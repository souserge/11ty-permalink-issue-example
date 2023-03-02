# Eleventy permalink issue

To replicate the issue, run:
```bash
npm install
DEBUG="Eleventy*" npx @11ty/eleventy
```

Observe the error appear while trying to compute `computedProp` during the first render of the `test/index.njk` paginated template:
```
  Eleventy:Template First round of computed data for './test/index.njk' +5ms
  Eleventy:Template Rendering permalink for './test/index.njk': (((11ty(((permalink)))11ty))) becomes '(((11ty(((permalink)))11ty)))' +1ms
  Eleventy:ComputedData 'page.url' accesses [ 'permalink' ] variables +0ms
  Eleventy:Template Rendering permalink for './test/index.njk': (((11ty(((permalink)))11ty))) becomes '(((11ty(((permalink)))11ty)))' +1ms
  Eleventy:ComputedData 'page.outputPath' accesses [ 'permalink' ] variables +1ms
  Eleventy:ComputedData 'permalink' accesses [ 'pageData.name' ] variables +1ms
  Eleventy:ComputedData 'nestedDoubleName' accesses [ 'pageData.name' ] variables +0ms
Computing computedProp
{}
trying to run toUpperCase...
[11ty] Problem writing Eleventy templates:
[11ty] Cannot read properties of undefined (reading 'toUpperCase') (via TypeError)
  Eleventy:EleventyErrorHandler (error stack): TypeError: Cannot read properties of undefined (reading 'toUpperCase')
  Eleventy:EleventyErrorHandler     at Object.computedProp ...
```

If you check whether the property is set (see comment in `test/test.11tydata.js`), the page eventually builds properly, but it still renders the template. If you have a custom filter or something else that throws an error if the computed property is not set, the build will fail, unless you safeguard that too. 