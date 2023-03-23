const react_terms = [
    {
        term: "Compilers", prompt: "What is a compiler in JS in OTerms? Whats their function?",
        description: "A JavaScript compiler takes JavaScript code, transforms it and returns JavaScript code in a different format. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. Babel is the compiler most commonly used with React.",
        example: "A compiler is a special program that translates a programming language's source code into machine code, bytecode or another programming language."
    },
    {
        term: "Bundlers", prompt: "What are Bundlers in JS and CSS? and whats their function?",
        description: "Bundlers take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files better optimized for the browsers. Some bundlers commonly used in React applications include Webpack and Browserify.",
        example: "Similar to Linking, which means creating a single executable file from several multiple object files. In this step, it is common that the linker will complain about undefined functions which are commonly main themselves."

    },
    {
        term: "Package Managers", prompt: "What are Package Managers?",
        description: "Package managers are tools that allow you to manage dependencies in your project. npm and Yarn are two package managers commonly used in React applications. Both of them are clients for the same npm package registry."
    },
    {
        term: "(a) Components, (b) Props (c) props.children  (d) State (e) Controlled Component",
        prompt: "Describe (1+) the meaning on own words",
        description: "\n\
        (a) React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element\n\n\
        (b) props are inputs to a React component. They are data passed down from a parent component to a child component.\n\n\
        (c) props.children is available on every component. It contains the content between the opening and closing tags of a component. For example\n\n\
        (d) A component needs state when some data associated with it changes over time. For example, a Checkbox component might need isChecked in its state, and a NewsFeed component might want to keep track of fetchedPosts in its state.\n\n\
        (e) An input form element whose value is controlled by React is called a controlled component. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.\n\n\
        "
    },



];


const apex = [
    {
        term: "len-substr-concatenate",
        description: ":m given: \n\
            ```java\n\
             String message = 'Hello, world!';\n\
             ```",
        prompt: "get length, substring Hello, and replace `world` with `Apex`",
        example: "int length = message.length();\n\
        String sub = message.substring(0, 5);\n\
        String newMessage = sub + 'Apex';\n\
        System.debug(newMessage);"
    },
    {
        term: "contains-trim-charAt",
        description: ":m given: \n\
            ```java\n\
             String message = '  Hello, world!  ';```",
        prompt: "check if message contains `world`, trim the message (remove any leading and trailing white space), and get the first character",
        example: ":m ```java\n\
        boolean contains = message.contains('world');\n\
        String trim = message.trim();\n\
        char first = trim.charAt(0);\n\
        System.debug(first);```"
    },
    // Datetime
    {
        term: "now-format-addDays",
        description: ":m given: \n\
            ```java\n\
                Datetime now = Datetime.now();```",
        prompt: "format the date to `yyyy-MM-dd`, and add 5 days to the date",
        example: ":m ```java\n\
        String format = now.format('yyyy-MM-dd');\n\
        Datetime newDate = now.addDays(5);\n\
        System.debug(newDate);```"

    },
    {
        term: "timzone-difference-parse",
        description: ":m given: \n\
            ```java\n\
                Datetime now = Datetime.now();\n\
                Datetime dt1 = Datetime.newInstance(2019, 1, 1, 0, 0, 0);\n\
                ```",
        prompt: "get the millisecond difference between dt1 and now and parse the date to `yyyy-MM-dd`",
        example: ":m ```java\n\
        Integer difference = now - dt1;\n\
        String parse = now.parse('yyyy-MM-dd');\n\
        System.debug(parse);```"
    },
    // Collections
    {
        term: "list-initialize-size-add-remove-sort",
        prompt: "initialize a list of size 5, add `Hello` to the list, remove `Hello` from the list, and sort the list",
        example: ":m ```java\n\
        List<String> list = new List<String>{'Hello', 'World', 'Apex'};\n\
        list.add('Hello');\n\
        list.remove('Hello');\n\
        list.sort();\n\
        System.debug(list);```"
    },
    {
        term: "query-records-into-list",
        description: "Givena a table Account with columns: id, name, email, phone, createddate, createdbyid, lastmodifieddate, lastmodifiedbyid",
        prompt: "query all records (id, name) from the table and store them in a list",
        example: ":m ```java\n\
        List<Account> accounts = [SELECT Id, Name FROM Account];\n\
        System.debug(accounts);```"

    },
    {
        term: "set-methods",
        prompt: "create an animals initizialization, get the size, add element, remove elemnt,  addAll, clone, retainAll(intersection), removeAll(difference)",
        example: ":m\n\
        ```js\n\
        // Initialization\nSet<String> animals = new Set<String>{'dog', 'cat', 'bird'};\nSystem.debug(animals); // Output: (dog, cat, bird)\n\n// Size\nInteger size = animals.size();\nSystem.debug(size); // Output: 3\n\n// Add Elements\nanimals.add('fish');\nSystem.debug(animals); // Output: (dog, cat, bird, fish)\n\n// Remove Elements\nanimals.remove('bird');\nSystem.debug(animals); // Output: (dog, cat, fish)\n\n// Contains\nBoolean containsDog = animals.contains('dog');\nSystem.debug(containsDog); // Output: true\nBoolean containsBird = animals.contains('bird');\nSystem.debug(containsBird); // Output: false\n\n// Union\nSet<String> pets = new Set<String>{'dog', 'cat', 'hamster'};\nSet<String> allAnimals = animals.clone();\nallAnimals.addAll(pets);\nSystem.debug(allAnimals); // Output: (dog, cat, fish, hamster)\n\n// Intersection\nSet<String> commonAnimals = animals.clone();\ncommonAnimals.retainAll(pets);\nSystem.debug(commonAnimals); // Output: (dog, cat)\n\n// Difference\nSet<String> differentAnimals = animals.clone();\ndifferentAnimals.removeAll(pets);\nSystem.debug(differentAnimals);\
        ```\
        "
    },
    {
        term: "set-vs-list",
        prompt: "What is the difference between set and list in Apex?",
        example: "    Elements:     A List can contain duplicate elements, while a Set cannot. Each element in a Set must be unique.      Order:     A List maintains the order in which elements were added, while a Set does not guarantee any specific order of its elements.      Lookup Time:     A Set provides faster lookup time compared to a List because it uses hashing algorithms to determine whether an element exists in the Set or not. On the other hand, a List has to traverse each element sequentially to find a specific element.      Performance:     Since Sets do not allow duplicates, they require extra processing to prevent duplicate elements from being added. As a result, adding elements to a Set can be slightly slower than adding elements to a List. However, Sets can be much faster than Lists when it comes to checking if an element is present or removing duplicates."
    },
    {
        term: "map-methods",
        example: ":m\n\
        ```js\n\
        // Initialization\nMap<String, Integer> ages = new Map<String, Integer>{'John' => 35, 'Mary' => 42, 'Bob' => 28};\nSystem.debug(ages); // Output: {Bob=28, John=35, Mary=42}\n\n// Size\nInteger size = ages.size();\nSystem.debug(size); // Output: 3\n\n// Put Elements\nages.put('Alice', 20);\nSystem.debug(ages); // Output: {Alice=20, Bob=28, John=35, Mary=42}\nages.put('Bob', 29);\nSystem.debug(ages); // Output: {Alice=20, Bob=29, John=35, Mary=42}\n\n// Remove Elements\nages.remove('Bob');\nSystem.debug(ages); // Output: {Alice=20, John=35, Mary=42}\n\n// Contains Key\nBoolean containsJohn = ages.containsKey('John');\nSystem.debug(containsJohn); // Output: true\nBoolean containsAlice = ages.containsKey('Alice');\nSystem.debug(containsAlice); // Output: true\nBoolean containsBob = ages.containsKey('Bob');\nSystem.debug(containsBob); // Output: false\n\n// Get Values\nList<Integer> allAges = new List<Integer>(ages.values());\nSystem.debug(allAges); // Output: (20, 35, 42)\
        ```\
        ",
        prompt: "create a map of ages: {John: 35, Mary: 42, Bob: 28}, get the size, add element, remove elemnt,  addAll, clone, retainAll(intersection), removeAll(difference)"
    }

    // Integers
]

module.exports = { react_terms, apex };