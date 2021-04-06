# JavaScript HashSet

JavaScript Hashset is an open-source, pure JS implementation of the HashSet datatype.  


## Compatibility

 JavaScript Hashset has  'close to universal' JS compatibility in both the browser and also in Node.js

 Internet Explorer 5, IE5.5, IE6, IE7, IE8, IE9, IE10, IE11.  Node, NPM,  Chrome. FireFox, Opera, Konqueror. 

## What is a HashSet?

A Hash-set is a like an array - but it differs in key 3 ways:

- It is not ordered
- It holds only values (not key-value pairs)
- Looking up values in a HashSet does not take significantly more time, even as the HashSet grows.

## Why use is a HashSet?
Short answer:  because arrays get much slower to search as they get bigger.

Hashsets are useful for writing optimized code, particularly where looping and looking up values in an array.  

When dealing with large datasets - traditional Array.IndexOf lookups in JS get very slow.  The lookup speed grows with each item added, making nested loops potentially slow down in a N Squared pattern.

Hashsets look up values by hashing, and lookup times are relatively stable, even for huge data sets.



## What is the Performance Increase?

 Even with just ten values in it,  a HashSet is noticeably (2x) faster than a normal array.   The performance increase grows exponentially with size:  by the time a dataset gets to 100,000 items the hashset may be up to 500 times faster.

![Hashset Search Performance in JS ](http://searchturbine.com/assets/js-hashset/js-search-performance-hashset.png)



##  Installing JavaScript HashSet

Installing PHPWee should only take a minute. Here are you 3 choices:

- Download this repository into your project
- Test it by running test.html
- Include hashset.min.js into the head of your page.  (or into your node project)


```js
&lt;script src='js-hashset/hashset.min.js>&lt;/script>
```


##  Using JavaScript HashSet


### initialization
Create a new hashSet

```js
var myhashset = new hashSet();
```

### add
Add a value to the hashset.  If the value already exists, it will be ignored.
You can add any JS variable to the hashSet.  A string , int, a class, a type, a function, anything!

```js
 myhashset.add("value");
```

### remove
Remove a value from the hashset.   If the value does not already exists, there will be no effect.

```js
 myhashset.remove("value");
```


### contains
Returns an boolean. True if the given value already exists in the hashset.

```js
var value_already_exists = myhashset.contains("value");
```

### clear
Empties the hashset of all values.

```js
myhashset.clear();
```




### count
Returns an integer count of all of the unique values in the hashSet. 

```js
var array_of_values = myhashset.values();
```

### values
Returns an array or all of the unique values in the hashSet. 

```js
var array_of_values = myhashset.values();
```

### copyToArray
Copies all of the unique values in the hashSet into an array;

```js
array = myhashset.copyToArray(array);
```

### unionWith
Adds all elements from another hashset into this  hasset.

```js
 myhashset.exceptWith(another_hashSet);
```

### exceptWith
Removes all elements in the hasset that are contained in another HasSet. 

```js
 myhashset.exceptWith(another_hashSet);
```

### isSubsetOf
Returns true is every value on this hasSet is also contained in another HashSet.

```js
 myhashset.isSubsetOf(another_hashSet);
```


### isSubsetOf
Allows enumeration of this hashset by an anonymous function.  For more complex enumeration - you can always use myhashset.values as iterate as per a normal array.

```js
 myhashset.enumerate(function(value){alert(value)});
```


## Who Makes JavaScript HashSet ?

JavaScript HashSet  is built and maintained by http://searchturbine.com as part of their 20% codeshare policy.  They can be contacted at community@seacrhturbine.com

We developed this class for optimizing Node.js based search engine algorithms - but found it equally useful in the browser.s

 
## Contributing 
This class is used within out own Node,js search engine core software. If you can make it even more stable, or even faster - we could be very happy.

- Please feel welcome to modify, fork and contribute.




