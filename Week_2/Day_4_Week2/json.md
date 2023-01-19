## **JSON**

JSON = JavaScript Object Notation

- Built on 2 structures:
  - Collection of name/value pairs
  - An ordered list of values
- JSON is language independent! Used in many languages today
- It is a data interchange format

What does object encoded by JSON look like?

```javascript
{
  "name": "New York City",
  "boroughs": [
    "Manhattan",
    "Queens",
    "Brooklyn",
    "The Bronx",
    "Staten Island"],
  "population": 8491079,
  "area_codes": [212, 347, 646, 718, 917, 929],
  "position": { "lat": 40.7127, "lng": -74.0059 }
}
```

Notice how keys are double-quotes string and values can be numbers, strings, or even objects

### Serialization

- Process that converts objects into a format that can be stored or transmitted between computers
  - Objects --> strings
    - The oppisite direction is deserialization

`JSON.parse()`

- parse string, return value

`JSON.stringify()`

- Returns JSON string corresponding to the specified value

**Walkthrough Example:**

1. Creat valid JSON string

```javascript
const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
jsonString;
// returns a string:
('{"a":1, "b":2, "foo":"bar"}');
```

2. Parse string to convert it into an object

```javascript
const obj = JSON.parse(jsonString);
obj
// returns:
{ a: 1, b: 2, foo: 'bar' }
```

3. Modify object

```javascript
delete obj.foo;
obj
//returns:
> obj
{ a: 1, b: 2 }
```

4. Serialize it back to a string

```javascript
JSON.stringify(obj);
//returns:
('{"a":1,"b":2}');
```

**Lets talk edge cases:**
What happnes if we try to parse invalid JSON string?

- e.g. missing curly bracket or double quote
  - we get an error! JSON MUST be formatted correctly in order to be parsed

### JSON Media Type

- Media type for JSON data is `application/json` when data is being sent using HTTP request/responses
- Set by `Content-Type` response header
  - Indicates media type and charcter encoding of the reponse body

### JSON for Configuration like `package.json`

- Remember - `npm` addeds a `package.json` file into project root directory
  - Text in file is a string, NPM reads file and parses it into an object using the JSON object
