![CoreFunc](.github/img/logo_128.png?raw=true "CoreFunc")

# CoreFunc UpsertMap

Addition of a method that will add a value to a map if the map does not already have something at key, and will also update an existing value at key.

[ECMAScript proposal Map.prototype.upsert](https://github.com/tc39/proposal-upsert)

[![Buy Me A Coffee][buymeacoffee-img]][buymeacoffee-url]
[![Follow New Releases][releasly-img]][releasly-url]

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![GitHub Stars][gh-stars-img]][gh-stars-url]
[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]
[![LGTM][lgtm-img]][lgtm-url]

---

*If you use this project don't forget to give a ⭐ [star](https://www.npmjs.com/package/@corefunc/upsert-map) ⭐ to it on GitHub!*

---

## Usage

CommonJS import.

```javascript
const { UpsertMap } = require("@corefunc/upsert-map");
```

ECMAScript Module.

```javascript
import { UpsertMap } from "@corefunc/upsert-map";
```

AMD, UMD, browser script tag.

```html
<script src="https://unpkg.com/@corefunc/upsert-map"></script>
```

CDN (unpkg [https://unpkg.com/](https://unpkg.com/))

```html
<script src="https://unpkg.com/@corefunc/upsert-map" type="module"></script>
```

Deno (Pika [https://pika.dev/](https://pika.dev/))

```javascript
import { UpsertMap } from "https://cdn.pika.dev/@corefunc/upsert-map";
```

---

## Examples

```javascript
import { UpsertMap } from "@corefunc/upsert-map";

const map = new UpsertMap();
const key = "YOUR_KEY";

// You can skip update function and use only insert function
map.upsert(key, undefined, () => new Set());

// Use both update function and insert function
map.upsert(
  key,
  (currentValue) => {
    currentValue.add(1);
    return currentValue;
  },
  () => new Set()
);

// Use only update function
map.upsert(key, (currentValue) => {
  currentValue.add(2);
  return currentValue;
});

map.get(key) === Set(1, 2)
```

---

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[buymeacoffee-url]: https://buymeacoffee.com/r37r0m0d3l
[buymeacoffee-img]: https://img.shields.io/badge/support-buymeacoffee-1E90FF.svg?&logo=buy-me-a-coffee&label=support
[gh-stars-url]: https://github.com/corefunc/upsert-map
[gh-stars-img]: https://badgen.net/github/stars/corefunc/upsert-map?&icon=github&label=stars&color=FFCC33
[lgtm-url]: https://lgtm.com/projects/g/corefunc/upsert-map
[lgtm-img]: https://badgen.net/lgtm/grade/g/corefunc/upsert-map?&icon=lgtm&label=lgtm:js/ts&color=00C853
[npm-version-url]: https://npmjs.com/package/@corefunc/upsert-map
[npm-version-img]: https://badgen.net/npm/v/@corefunc/upsert-map?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@corefunc/upsert-map
[npm-downloads-img]: https://badgen.net/npm/dt/@corefunc/upsert-map?&icon=terminal&label=downloads&color=009688
[releasly-url]: https://app.releasly.co/sites/corefunc/upsert-map?utm_source=github_badge
[releasly-img]: https://app.releasly.co/assets/badges/badge-blue-classic.svg
[travis-url]: https://travis-ci.com/github/corefunc/upsert-map
[travis-img]: https://badgen.net/travis/corefunc/upsert-map?&icon=travis&label=build
[ts-url]: https://github.com/corefunc/upsert-map/blob/master/dist/upsert-map.d.ts
[ts-img]: https://badgen.net/npm/types/@corefunc/upsert-map?&icon=typescript&label=types&color=1E90FF
