## Command Line cURL

Link found [here.](https://www.thegeekstuff.com/2012/04/curl-examples/)

- **Note:** Only interested in examples 1-8 for now

### What is cURL?

- It is a command line utility that is used to make HTTP requests to a given URL and it outputs the response
  - Allows you to see the URL
  - For example, type `curl www.example.com` in your terminal
    - Now add `-i` to your curl command - lets you inspect the response headers

Overall: it is a software package that is made up of command line tools and a library for transferring data using URL syntax

### Commands to Know:

1. `curl`:

```html
curl http://www.centos.org
```

- Outputs content of the URL and displays it in your terminal

2. `curl -o ` or `curl -O`

- Lowercase (o) - result will be saved in the filename provided in the command line
- Uppercase (O) - filename in the URL will be taken and be used as the filename to store the result

3. To fetch multiple files ayt once, use the following syntax

```html
curl -O URL1 -O URL2
```

4. Follow HTTP location header with `-L`

5. Continue a previous download using `-C`

- Stop downloads using Ctrl + C

6. Limit the rate of data transfer using `-limit-rate`

- Can pass the max tarnsfer rate as an argument

7. Download file if it is modified before/after the given time using `-z`

8. Pass HTTP authentication using `-u`
