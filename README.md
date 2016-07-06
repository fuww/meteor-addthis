# Meteor addthis

A lightweight package to add addthis easily to meteor

http://www.addthis.com

## Installation

```sh
meteor add fuww:addthis
```

## Usage

Add your `pubid` in meteor settings.

```json
{
  "public": {
    "addthis": {
      "pubid": "your pubid"
    }
  }
}
```

```js
// set url, title, description, image
addthis.update('share', 'url', url);
addthis.update('share', 'title', title);
addthis.update('share', 'description', description);
addthis.update('share', 'image', imageUrl);

// add toolbox
addthis.toolbox('.addthisToolbox');
```
