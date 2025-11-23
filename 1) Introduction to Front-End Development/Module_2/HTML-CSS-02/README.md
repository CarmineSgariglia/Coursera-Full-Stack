# Module 2 – Block & Inline Elements, Centering Techniques

This section introduces **span** and **div** to help understand the difference between **inline** and **block** elements in HTML, as well as how to center elements and text.

## Block Elements

Block elements occupy the full available width and automatically push the following content to a new line.  
Common block elements include:

- `<div>`
- Paragraphs: `<p>`
- Headings: `<h1>` to `<h6>`
- Semantic elements: `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<nav>`, `<main>`, `<figure>`, `<figcaption>`
- `<address>`, `<blockquote>`, `<pre>`, horizontal rule `<hr>`
- Forms and lists: `<form>`, `<ul>`, `<ol>`, `<li>`
- Table elements: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`
- Form-related elements: `<fieldset>`, `<legend>`

All block elements always create a new **visual block** in the page layout.

## Inline Elements

Inline elements stay on the same line and only take up the space required by their content.  
Examples include:

- `<span>`
- Links: `<a>`
- Text formatting elements: `<strong>`, `<em>`, `<b>`, `<i>`, `<u>`, `<small>`, `<sub>`, `<sup>`, `<mark>`, `<cite>`, `<code>`, `<kbd>`, `<samp>`, `<var>`, `<abbr>`, `<time>`, `<q>`
- Images: `<img>`
- Line breaks: `<br>`
- Certain form elements: `<label>`, plus others that behave like **inline-block**, such as `<input>`, `<select>`, `<textarea>`, `<button>`
- `<svg>` (inline by default)

Inline elements behave like text: they remain on the same line and are used for smaller pieces of content.

##  Summary

- **Block elements** structure the vertical layout of a page because they span the full width and start on a new line.
- **Inline elements** behave like text, staying on the same line and occupying only the necessary space.

##  Centering Techniques

- To center a **block element**:  
  ```css
  margin: auto;
  width: <defined value>;

