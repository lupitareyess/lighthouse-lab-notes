## Domain Name System (DNS)

What happens in between the time a request is started and the time a response is given?

- **DNS!**

### DNS Resolution

- Translates domain names to machine readable IP addresses
- **Root -> TLD -> Authoritative -> Resolving**

## Record Types

- There are several but focus on the following:
  - `A`: maps hostname to IP address, most common
  - `NS`: Name Server
  - `MX`: Mail Exchange - specifies where email gets sent
  - `CNAME`: Canonical Name
  - `AAAA`: similar to `A`
- We can get information from websites using these record types

### Using DNS

- `dig` - makes iterative queries to resolve name being looked up
- Type `dig +trace google.com` into terminal for an example
- You'll notice that there are 4 request response stages:
  1. Starting the journey at the _root name servers_
  2. Continuing to the _.com top level domain (TLD)_
  3. Followed by the _google.com Name Servers (NS)_
  4. Concludes with _Address Records (A)_
     - These are servers hosting google.com
     - Most websites only need one web server node, but depends on the scale
