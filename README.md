# Swapc

Swapc is a tiny library to make simple animations very easy.

Inspired by HTMX, you declare classes to add, remove or toggle at certain events.
You can also declare targets with the `sw-target` attribute.

## Why
Very often you can make good enough and lightweight animations by just toggling classes without loading libraries such anime, GSJS or others.
And sometimes you need a little more complicated triggers than Tailwind states.

Inpired by htmx attributes declarations, Swapc can add, remove or toggle classes at DOM events on the node itself or at a target nod identified by the `sw-target` attribute.

## What can it do
Supported events are all events that can be registered by the `node.addEventListener` method.

You can select a different node as target of the function by speciifying the `sw-target` attribute with a query selector.

## How to use
Best way for now is to use UNPKG and import swapc in the script tag
```html
<script src="https://unpkg.com/swapc@latest/dist/swapc.min.js"></script>

```

### Syntax
There are three methods of swapping between classes: add, remove and toggle.
To add a class at a certain event you write it with a + at the beginning, and a - to remove it. For example to make a text red on mouse enter and back to black on mouse leave:
```html
<div
    sw-mouseenter="+text-red"
    sw-mouseleave="-text-red"
>
    Text
</div>
```

Or just toggling the class:
```html
<div
    sw-mouseenter="text-red"
    sw-mouseleave="text-red"
>
    Text
</div>
```

### Target another node
You can define a target with `sw-target` attribute
```html
<div id="target">
    I will become red
</div>

<div
    sw-target="#target"
    sw-mouseenter="text-red"
    sw-mouseleave="text-red"
>
    I am the trigger
</div>
```

### Current node sobstitution
Every node containing an `sw` tag will be associated with an unique id `sw-id`. In this way you can query starting from this node by using the `$this` word (jQuery ❤️).
For example: 
```html
<div 
    sw-mouseenter="text-red" sw-mouseleave="text-red" sw-target="$this p"
>
    Select the following child paragraph
    <p>
        I am the target paragraph
    </p>
</div>
```

### Delay
`sw-delay` can delay the execution of the function
```html
<div sw-mouseenter="text-red" sw-mouseleave="text-red" sw-delay="1000">
    I will become red after 1 second
</div>
```

## What will do 
Don't know yet. It's at eary stage and will add functionality day by day.
