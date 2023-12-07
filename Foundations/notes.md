# How Does the Web Work?

- [Internet](https://www.youtube.com/watch?v=7_LPdttKXPc)
  - Physical backbone of the web
  - Think about hardware (computers, routers, modems)
  - ISPs (Think in terms of routers)
- Packets
- IP addresses, domain names, and DNS
- The web
- Intranet, Extranet
- Web page, website, web server, search engine
- Server, client
- TCP/IP, DNS, HTTP
- Browser parsing order: HTML, CSS, JS
- TLD (Top-Level Domain), SLD (secondary-level domain), sub-domains
- top-level DNS servers
- All the name servers responsible for a single lookup are...

## CLI

- Shell commands (Pipes, filters, etc)
- [Art of the Command Line](https://github.com/jlevy/the-art-of-command-line)

## [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

- Local vs Centralized vs Distributed
- Snapshots not differences
- Like a file system
- Working, Staging, Local repo, Remote repo
- [Good commit message](https://cbea.ms/git-commit/)

## HTML/CSS

- Basic info about stuff like semantic HTML and tags
- opening links in a new tab (target _blank and rel noopener noreferrer)
- absolute vs relative links
- 4 main image formats and what they're for
- CSS: Selector-property-value
- Selectors: universal, type, class, ID
- Grouping, chaining, combining
- Generic font family as fallback
- Including height/width for image to prevent "shifting" if the image takes longer to load than the rest of the page
- CSS cascade and specificity rules
- When to use flex vs grid
- Firefox's grid and flex inspector
- Basic box model knowledge (margin, padding, border, box-sizing)
- Block, inline, inline-block
- [Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/), Grid
- Obtaining an accurate mental model for CSS

## Javascript

- If a number and string are added, result is string concatenation
  - Interpreter works left to right
  - Until a string is found, it does addition then only concatenation
- In numeric operations, strings are converted to numbers
- Division by 0 generates "Infinity", which is a number in JS
- Cannot compare objects in JS with == or ===(strict equality) (Think memory addresses)
- Floats, integers, etc all represented by Number object
- Unary + can convert non-numerics into numbers (same as Number(...)), however be wary that it does string coercion entirely diff. than normal for certain objs
- precedence table
- As an operator, assignment returns value
- prefix postfix increment/decrement (think C)
- comma operator
- bitwise operators
- Math is "safe" in JS, no fatal errors
- Quote types: double, single, backticks. (Ruby double quotes = JS backticks) (#{} vs ${})
- Ruby (nil) vs JS (null)
- Ruby (#class) vs JS (typeof)
- Strings in JS are immutable unlike Ruby
- Objects vs primitives (String, Boolean, Number have slightly diff behavior)
- Unicode order for string comparisons, think Unicode value
- When comparing different types, JS converts values into numbers
  - Think about how this affects values that can be undefined/null/NaN and when to use == or ===, or just check things separately
- Logical operators work same as Ruby (short-circuit, boolean conversion, etc)
- Nullish coalescing operator ??
- In Devtools, going to an incognito window with no extensions can make debugging easier
- Anonymous, arrow functions and various JS scoping issues
  - Arrow: implicit returns without curly brackets
- var is function scope while let/const are block scope