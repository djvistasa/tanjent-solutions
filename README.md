# Tangent solutions assessment

To start project run the following:

`yarn && yarn dev`

## Tooling

- react
- react-dom
- react-router-dom
- plop (scaffolding)
- typescript
- vite
- styled-components
- react-router
- vitest
- easy-peasy

## Approach

On the employee listing page, I decided to display each employee's email address so as to make searching via email address easier.

## Filters

I decided to use the rename the filter to sort and changed functionality accordingly as I thought this made more sense from a users perspective.

## Global state

I used a easy-peasy for this because it is super lightweight and has almost zero boilerplate. I also comes with the ability to persist data to session or local storage out the box. (https://easy-peasy.vercel.app/)

## Styling

I decided to use styled-components for styling as they give me the power of decision making in js.

## Delete

I noticed the design didn't cater for a delete action so I added one, together with a safety mechanism to prevent accidental deletion of employees.
